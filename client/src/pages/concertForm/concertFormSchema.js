import * as Yup from 'yup'

const addConcertSchema = Yup.object().shape({
    date: Yup
    .string()
    .required('Date is required.')
    .matches(/^(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])-\d{4}$/, 'Invalid date format. Please use DD-MM-YYYY.')
    .test('valid-future-date', 'Date must be in the future.', (value) => {
        const currentDate = new Date()
        const inputDate = new Date(value)

        return inputDate > currentDate
    }),

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

    artist: Yup
    .required('Artist is required.'),

    venue: Yup
    .required('Venue is required.')
    , 
})