import * as Yup from 'yup'
import artistFormSchema from '../artistForm/artistFormSchema'

const concertFormSchema = Yup.object().shape({
    date: Yup
    .date()
    .required('Date is required.')
    .min(new Date(), 'Date must be in the future.'),

    time: Yup
    .string()
    .required('Time is required.')
    .matches(/^([0-1]?[0-9]|2[0-3]):([0-5]?[0-9])$/, 'Invalid time format. Please use HH:MM.')
    .matches(/(00|15|30|45)$/, 'Time must end in 00, 15, 30, or 45.'),

    price: Yup
    .number()
    .required('Price is required.')
    .integer('Price must be an integer.')
    .moreThan(-1, 'Price must be 0 or greater.'),

    // artist: artistFormSchema,

    venue: Yup
    .string()
    .required('Venue is required.'), 
})

export default concertFormSchema