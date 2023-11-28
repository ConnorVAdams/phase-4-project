import { useState, useEffect } from 'react'
import { ErrorMessage, Field, Formik, Form } from 'formik'
import concertFormSchema from './concertFormSchema'

const ConcertForm = () => {
    const [venues, setVenues] = useState([])

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

    return (
        <Formik
            initialValues={{
                date: '',
                time: '',
                price: '',
                artist: '',
                venue: ''
            }}
            validationSchema={concertFormSchema}
            onSubmit={values => {
                console.log(values)
            }}
        >
            {formik => {
                const { errors, touched, isValid, dirty } = formik
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
                                    step='900'
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

                            {/* <div className='form-field'>
                                <label htmlFor='artist'>Artist</label>
                                <Field
                                    type='artist'
                                    name='artist'
                                    id='artist'
                                    className={errors.artist && touched.artist ? 'input-error' : null}
                                />
                                <ErrorMessage name='artist' component='span' className='error'/>
                            </div> */}

                            {/* <div className='form-field'>
                                <label htmlFor='venue'>venue</label>
                                <Field
                                    as='select'
                                    name='venue'
                                    id='venue'
                                    className={errors.venue && touched.venue ? 'input-error' : null}
                                >
                                    <option value=''>Select Venue</option>
                                    {venues.map(venue => (
                                        <option key={venue.id} value={venue.name}>
                                            {venue.name}
                                        </option>
                                    ))}
                                </Field>
                                <ErrorMessage name='venue' component='span' className='error'/>
                            </div> */}

                            <button
                                type='submit'
                                className={!(dirty && isValid) ? 'disabled-btn' : ''}
                                disabled={!(dirty && isValid)}
                            >
                                Submit
                            </button>
                        </Form>
                    </div>
                )
            }}
        </Formik>
    )
}

export default ConcertForm