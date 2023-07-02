
import Image from 'next/image';
import {useState} from 'react';

import {FormSection, InputWrapper, Input, TextArea, Error, ErrorMessage ,Button} from './StyledComponents';

import attention from '@/public/form/attention.svg';

import {regExpEmail, regExpPhone} from '@/utils';

const Form = () => {

    const [field, setField] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    });

    // const [validate, setValidate] = useState({
    //     name: 'Can’t be empty',
    //     email: 'Can’t be empty',
    //     phone: 'Can’t be empty',
    //     message: 'Can’t be empty',
    // })

    const handleFields = (name, value) => {
        setField({...field, [name]: value})
    }

    const hadleSubmit = (e) => {
        e.preventDefault();
        console.log(field.name);

    }

    // const validation = (name, value) => {

    //     switch (value) {
    //         case value.length === 0:
    //             setValidate({...validate, [name]: 'Can’t be empty'});
    //             break;
    //         case value.length <= 4:
    //             setValidate({...validate, [name]: 'Must be more 4 symbols'});
    //             break;
    //         case name === 'email' && 
    //     }
    // }

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