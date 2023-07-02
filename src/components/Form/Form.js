
import Image from 'next/image';
import {useState} from 'react';

import {FormSection, InputWrapper, Input, TextArea, Error, ErrorMessage ,Button} from './StyledComponents';

import attention from '@/public/form/attention.svg';

const Form = () => {

    const [field, setField] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    });

    const handleFields = (name, value) => {
        setField({...field, [name]: value})
    }

    const hadleSubmit = (e) => {
        e.preventDefault();
        console.log(field.name);

    }

    const validation = () => {

    }

    return (
        <FormSection onSubmit={(e) => hadleSubmit(e)}>
            <InputWrapper>
                <Input
                    name='name'
                    placeholder='Name'
                    onChange={(e) => handleFields(e.target.name, e.target.value)}
                />
                <Error>
                    <ErrorMessage></ErrorMessage>
                    <Image
                        src={attention}
                        alt='atention'
                        width={20}
                        height={20}
                    />
                </Error>
            </InputWrapper>
            <InputWrapper>
                <Input
                    name='email'
                    placeholder='Email Address'
                    onChange={(e) => handleFields(e.target.name, e.target.value)}
                />
            </InputWrapper>
            <InputWrapper>
                <Input
                    name='phone'
                    placeholder='Phone'
                    onChange={(e) => handleFields(e.target.name, e.target.value)}
                />
            </InputWrapper>
            <InputWrapper>
                <TextArea
                    name='message'
                    placeholder='Your Message'
                    onChange={(e) => handleFields(e.target.name, e.target.value)}
                />
            </InputWrapper>

            <Button type='submit'>submit</Button>
        </FormSection>
    )
}

export default Form;