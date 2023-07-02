import Image from 'next/image';
import {useState} from 'react';

import {FormSection, InputWrapper, Input, TextArea, Error, ErrorMessage ,Button} from './StyledComponents';
import attention from '@/public/form/attention.svg';
import {regExpEmail, regExpPhone} from '@/utils';

const defaultFieldState = {
  name: '',
  email: '',
  phone: '',
  message: '',
};

const defaultValidatedState = {
  name: 'Can’t be empty',
  email: 'Can’t be empty',
  phone: 'Can’t be empty',
  message: 'Can’t be empty',
};

const Form = () => {

  const [field, setField] = useState(defaultFieldState);
  const [validate, setValidate] = useState(defaultValidatedState);

  const handleFields = (name, value) => {
    setField({...field, [name]: value})
  }

  const hadleSubmit = (e) => {
    e.preventDefault();
    if(!validate.name && !validate.email && !validate.phone && !validate.message) {
      console.log(field);
      setField(defaultFieldState);
      setValidate(defaultValidatedState);
    }
  }

  const validation = (name, value) => {
    if(value.length === 0) setValidate({ ...validate, [name]: 'Can’t be empty'});
    else if(value.length <= 4) setValidate({ ...validate, [name]: 'Must be more 4 symbols'});
    else if(name === 'email' && !value.match(regExpEmail)) setValidate({ ...validate, [name]: 'User email, must be a valid email according to RFC2822'});
    else if(name === 'phone' && !value.match(regExpPhone)) setValidate({...validate, [name]: 'Number should start with code of Ukraine +380'});
    else setValidate({ ...validate, [name]: ''});
  }

  return (
    <FormSection onSubmit={(e) => hadleSubmit(e)}>
      <InputWrapper>
        <Input
          name='name'
          placeholder='Name'
          value={field.name}
          onChange={(e) => {
            handleFields(e.target.name, e.target.value);
            validation(e.target.name, e.target.value);
          }}
          onBlur={(e) => validation(e.target.name, e.target.value)}
        />
        <Error>
          <If condition={validate.name}>
            <ErrorMessage>{validate.name}</ErrorMessage>
            <Image
              src={attention}
              alt='atention'
              width={20}
              height={20}
            />
          </If>
        </Error>
      </InputWrapper>
      <InputWrapper>
        <Input
          name='email'
          placeholder='Email Address'
          value={field.email}
          onChange={(e) => {
            handleFields(e.target.name, e.target.value);
            validation(e.target.name, e.target.value);
          }}
          onBlur={(e) => validation(e.target.name, e.target.value)}
        />
        <Error>
          <If condition={validate.email}>
            <ErrorMessage>{validate.email}</ErrorMessage>
            <Image
              src={attention}
              alt='atention'
              width={20}
              height={20}
            />
          </If>
        </Error>
      </InputWrapper>
      <InputWrapper>
        <Input
          name='phone'
          placeholder='Phone'
          value={field.phone}
          onChange={(e) => {
            handleFields(e.target.name, e.target.value);
            validation(e.target.name, e.target.value);
          }}
          onBlur={(e) => validation(e.target.name, e.target.value)}
        />
        <Error>
          <If condition={validate.phone}>
            <ErrorMessage>{validate.phone}</ErrorMessage>
            <Image
              src={attention}
              alt='atention'
              width={20}
              height={20}
            />
          </If>
        </Error>
      </InputWrapper>
      <InputWrapper>
        <TextArea
          name='message'
          placeholder='Your Message'
          value={field.message}
          onChange={(e) => {
            handleFields(e.target.name, e.target.value);
            validation(e.target.name, e.target.value);
          }}
          onBlur={(e) => validation(e.target.name, e.target.value)}
        />
        <Error>
          <If condition={validate.message}>
            <ErrorMessage>{validate.message}</ErrorMessage>
            <Image
              src={attention}
              alt='atention'
              width={20}
              height={20}
            />
          </If>
        </Error>
      </InputWrapper>
      <Button type='submit'>submit</Button>
    </FormSection>
  )
}

export default Form;