import * as Yup from 'yup';

const concertFormSchema = (newArtist) => {
    let artistIdValidator = Yup
        .number()
        .integer()
        .required('Artist is required.')
    
    let artistNameValidator = Yup
        .string(30)
        .required('Name is required.')
    
    let artistGenreValidator = Yup
        .string(30)
        .required('Genre is required.')

    let artistDescriptionValidator = Yup
        .string(200)
        .required('Description is required.')

    if (newArtist) {
        artistIdValidator = undefined
    } else {
        artistNameValidator = undefined
        artistGenreValidator = undefined
        artistDescriptionValidator = undefined
    }

    return Yup.object().shape({
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

        artist_id: artistIdValidator,

        artist_name: artistNameValidator,

        artist_genre: artistGenreValidator,

        artist_description: artistDescriptionValidator,

        venue_id: Yup
            .number()
            .integer()
            .required('Venue is required.'),
    });
};

export default concertFormSchema;