import { useState, useEffect } from 'react'
import { ErrorMessage, Field, Formik, Form } from 'formik'
import concertFormSchema from './concertFormSchema'
// import { CustomHoursSelect, CustomMinutesSelect, CustomPeriodSelect } from './timePicker'

const ConcertForm = () => {
    const [venues, setVenues] = useState([])
    const [artists, setArtists] = useState([[]])
    const [newArtist, setNewArtist] = useState(false)

    useEffect(() => {
        const fetchVenues = async () => {
            try {
                const response = await fetch('/api/v1/venues')
                if (response.ok) {
                    const data = await response.json()
                    setVenues(data)
                } else {
                    console.error('Response not ok: ', response.status)
                }
            } catch (error) {
                console.error('Failed to fetch venues: ', error)
            }
        }

        fetchVenues()
    }, [])

    useEffect(() => {
        const fetchArtists = async () => {
            try {
                const response = await fetch('/api/v1/artists')
                if (response.ok) {
                    const data = await response.json()
                    setArtists(data)
                } else {
                    console.error('Response not ok: ', response.status)
                }
            } catch (error) {
                console.error('Failed to fetch artists: ', error)
            }
        }

        fetchArtists()
    }, [])

    return (
        <Formik
            initialValues={{
                date: '',
                time: '',
                price: '',
                artist_id: '',
                venue_id: '',
                tix_low: 0,
                sold_out: 0
            }}
            validationSchema={concertFormSchema}
            onSubmit={async (values) => {
                values.date_time = `${values.date} ${values.time}`
                values.price = Number(values.price)
                values.artist_id = Number(values.artist_id)
                values.venue_id = Number(values.venue_id)
                values.tix_low = Number(values.tix_low)
                values.sold_out = Number(values.sold_out)

                delete values.date
                delete values.time

                try {
                    const response = await fetch('/api/v1/concerts', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(values),
                    })
        
                    if (response.ok) {
                        console.log('Form submitted successfully:', response.status);
                    } else {
                        console.error('Error submitting form:', response.status);
                    }
                } catch (error) {
                    console.error('Error submitting form:', error);
                }
            }
        }
        >
            {formik => {
                const { errors, touched, setFieldValue } = formik
                return (
                    <div className='concert-form'>
                        <Form>
                            <div className='form-field'>
                                <label htmlFor='date'>Date</label><br/>
                                <Field
                                    type='date'
                                    name='date'
                                    id='date'
                                    className={errors.date && touched.date ? 'input-error' : null}
                                />
                                <ErrorMessage name='date' component='span' className='error'/>
                            </div>
                            
                            <div className='form-field'>
                                <label htmlFor='time'>Time</label><br/>
                                <Field
                                    type='time'
                                    name='time'
                                    id='time'
                                    className={errors.time && touched.time ? 'input-error' : null}
                                />
                                <ErrorMessage name='time' component='span' className='error'/>
                            </div>

                            <div className='form-field'>
                                <label htmlFor='price'>Price</label><br/>
                                <Field
                                    type='price'
                                    name='price'
                                    id='price'
                                    className={errors.price && touched.price ? 'input-error' : null}
                                />
                                <ErrorMessage name='price' component='span' className='error'/>
                            </div>

                            <div className='form-field'>
                                <label htmlFor='artist_id'>Choose Existing Artist</label><br/>
                                <Field
                                    as='select'
                                    name='artist_id'
                                    id='artist_id'
                                    className={errors.artist && touched.artist ? 'input-error' : null}
                                    onChange={(e) => {
                                        setFieldValue('artist_id', e.target.value)
                                        setNewArtist(false)
                                    }}
                                >
                                    <option value=''>Select Artist</option>
                                    {artists.map(artist => (
                                        <option key={artist.id} value={artist.id}>
                                            {artist.name}
                                        </option>
                                    ))}
                                </Field><br/>
                                <ErrorMessage name='artist_id' component='span' className='error'/>

                                {!newArtist && (
                                    <>
                                        <label htmlFor='add_new_artist_btn'>or Add New Artist</label><br/>
                                        <button 
                                            type='button' 
                                            name='add_new_artist_btn'
                                            onClick={() => setNewArtist(true)}>
                                            New Artist
                                        </button>
                                    </>
                                )}

                                {newArtist && (
                                    <>
                                        <div class='form-field'>
                                            <label htmlFor='artist_name'>Name</label>
                                            <Field
                                                type='text'
                                                name='artist_name'
                                                id='artist_name'
                                                className={errors.artist_name && touched.artist_name ? 'input-error' : null}
                                            />
                                            <ErrorMessage name='artist_name' component='span' className='error'/>
                                        </div>

                                        <div class='form-field'>
                                        <label htmlFor='artist_genre'>Genre</label>
                                        <Field
                                            type='text'
                                            name='artist_genre'
                                            id='artist_genre'
                                            className={errors.artist_genre && touched.artist_genre ? 'input-error' : null}
                                        />
                                        <ErrorMessage name='artist_genre' component='span' className='error'/>
                                        </div>

                                    </>
                                )}
                            </div>

                            <div className='form-field'>
                                <label htmlFor='venue_id'>Venue</label><br/>
                                <Field
                                    as='select'
                                    name='venue_id'
                                    id='venue_id'
                                    className={errors.venue && touched.venue ? 'input-error' : null}
                                >
                                    <option value=''>Select Venue</option>
                                    {venues.map(venue => (
                                        <option key={venue.id} value={venue.id}>
                                            {venue.name}
                                        </option>
                                    ))}
                                </Field>
                                <ErrorMessage name='venue_id' component='span' className='error'/>
                            </div>

                            <button type='submit'>Submit</button>
                        </Form>
                    </div>
                )
            }}
        </Formik>
    )
}

export default ConcertForm