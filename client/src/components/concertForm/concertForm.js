import { useState, useEffect } from 'react'
import { ErrorMessage, Field, Formik, Form } from 'formik'
import concertFormSchema from './concertFormSchema'
import { CustomHoursSelect, CustomMinutesSelect, CustomPeriodSelect } from './timePicker'

const ConcertForm = () => {
    const [venues, setVenues] = useState([])
    const [artists, setArtists] = useState([[]])

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
                venue_id_id: ''
            }}
            validationSchema={concertFormSchema}
            onSubmit={(values) => {
                
            }}
        >
            {formik => {
                const { errors, touched } = formik
                return (
                    <div className='concert-form'>
                        <Form>
                            <div className='form-field'>
                                <label htmlFor='date'>Date</label>
                                <Field
                                    type='date'
                                    name='date'
                                    id='date'
                                    className={errors.date && touched.date ? 'input-error' : null}
                                />
                                <ErrorMessage name='date' component='span' className='error'/>
                            </div>
                            
                            <div className='form-field'>
                                <label htmlFor='time'>Time</label>
                                <Field
                                    type='time'
                                    name='time'
                                    id='time'
                                    className={errors.time && touched.time ? 'input-error' : null}
                                />
                                <ErrorMessage name='time' component='span' className='error'/>
                            </div>

                            <div className='form-field'>
                                <label htmlFor='price'>Price</label>
                                <Field
                                    type='price'
                                    name='price'
                                    id='price'
                                    className={errors.price && touched.price ? 'input-error' : null}
                                />
                                <ErrorMessage name='price' component='span' className='error'/>
                            </div>

                            <div className='form-field'>
                                <label htmlFor='artist_id'>Artist</label>
                                <Field
                                    as='select'
                                    name='artist_id'
                                    id='artist_id'
                                    className={errors.artist && touched.artist ? 'input-error' : null}
                                >
                                    <option value=''>Select Artist</option>
                                    {artists.map(artist => (
                                        <option key={artist.id} value={artist.name}>
                                            {artist.name}
                                        </option>
                                    ))}
                                </Field>
                                <ErrorMessage name='artist_id' component='span' className='error'/>
                            </div>

                            <div className='form-field'>
                                <label htmlFor='venue_id'>Venue</label>
                                <Field
                                    as='select'
                                    name='venue_id'
                                    id='venue_id'
                                    className={errors.venue && touched.venue ? 'input-error' : null}
                                >
                                    <option value=''>Select Venue</option>
                                    {venues.map(venue => (
                                        <option key={venue.id} value={venue.name}>
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