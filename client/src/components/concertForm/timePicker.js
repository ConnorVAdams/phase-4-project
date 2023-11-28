import { Field } from 'formik';

const hours = Array.from({ length: 12 }, (_, i) => i + 1)

export const CustomHoursSelect = () => (
    <Field
        as='select'
        name='hours'
        id='hours'
        className='custom-select'
    >
    {hours.map((hour) => (
        <option key={hour} value={hour}>
            {hour}
        </option>
    ))}
    </Field>
)

export const CustomMinutesSelect = () => (
    <Field
        as='select'
        name='minutes'
        id='minutes'
        className='custom-select'
    >
        <option value='00'>00</option>
        <option value='15'>15</option>
        <option value='30'>30</option>
        <option value='45'>45</option>
    </Field>
)

export const CustomPeriodSelect = () => (
    <Field
        as='select'
        name='period'
        id='period'
        className='custom-select'
    >
        <option value='AM'>AM</option>
        <option value='PM'>PM</option>
    </Field>
)