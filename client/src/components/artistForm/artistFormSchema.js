import * as Yup from 'yup'

const artistFormSchema = Yup.object().shape({
    // name: Yup
    // .string(30)
    // .required('Name is required')
    // .test('unique-name', 'An artist by that name already exists.', async (value) => {
    //     try {
    //         const response = await fetch('/api/v1/artists')
    //         const data = await response.json()

    //         const artistNames = data.map(artist => artist.name)

    //         return !artistNames.includes(value)
    //     } catch (error) {
    //         console.error('Error validating artist name.')
    //         return 'Error validating artist name.'
    //     }
    // }),

    // genre: Yup
    // .required('Genre is required.'),

    // description: Yup
    // .string(200)
    // .required('Description is required.')
})

export default artistFormSchema