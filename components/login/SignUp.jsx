import React, { useState } from 'react';
import {
  Box,
  Center,
  Heading,
  VStack,
  FormControl,
  Button,
  Link,
} from 'native-base';
import { useForm, Controller } from 'react-hook-form';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../lib/firebaseConfig';
import getControlledInput from './getControlledInput';

export default function SignUp({ navigation }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    control,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();

  async function onSubmit(data) {
    setIsSubmitting(true);
    createUserWithEmailAndPassword(auth, data.email, data.password1)
      .then(() => setIsSubmitting(false))
      .catch((e) => {
        if (e.message.includes('(auth/email-already-in-use)')) {
          setError('email', {
            type: 'emailTaken',
            message: 'An account with this address already exists.',
          });
        } else {
          console.error(e);
        }
        setIsSubmitting(false);
      });
  }

  return (
    <Center w='100%'>
      <Box p='2' w='90%' maxW='290' py='8'>
        <Heading size='lg' fontWeight='semibold'>
          Welcome
        </Heading>
        <Heading mt='1' fontWeight='medium' size='xs'>
          Sign up to continue!
        </Heading>

        <VStack space={3} mt='5'>
          <FormControl isRequired isInvalid={'email' in errors}>
            <FormControl.Label>Email</FormControl.Label>
            <Controller
              control={control}
              render={getControlledInput('example@domain.com')}
              name='email'
              rules={{
                required: 'Email address is required',
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: 'Must be a valid email address',
                },
              }}
            />
            <FormControl.ErrorMessage>
              {errors.email?.message}
            </FormControl.ErrorMessage>
          </FormControl>
          {errors?.email?.type === 'emailTaken' && ( // TODO: make these links accessible by either replacing with button or figuring out url / deeplinking
            <Link
              onPress={() => navigation.navigate('Sign In')}
              _text={{
                fontWeight: 'medium',
                fontSize: 'sm',
              }}
            >
              Sign in instead?
            </Link>
          )}

          <FormControl isRequired isInvalid={'password1' in errors}>
            <FormControl.Label>Password</FormControl.Label>
            <Controller
              control={control}
              render={getControlledInput('', true)}
              name='password1'
              rules={{
                required: 'Password is required',
                minLength: {
                  value: 6,
                  message: 'Password must be longer than 6 characters',
                },
              }}
            />
            <FormControl.ErrorMessage>
              {errors.password1?.message}
            </FormControl.ErrorMessage>
          </FormControl>

          <FormControl isRequired isInvalid={'password2' in errors}>
            <FormControl.Label>ConfirmPassword</FormControl.Label>
            <Controller
              control={control}
              render={getControlledInput('', true)}
              name='password2'
              rules={{
                required: 'Password is required',
                validate: (v, values) => (
                  v === values.password1 || 'Passwords do not match'
                ),
                minLength: {
                  value: 6,
                  message: 'Password must be longer than 6 characters',
                },
              }}
            />
            <FormControl.ErrorMessage>
              {errors.password2?.message}
            </FormControl.ErrorMessage>
          </FormControl>

          <Button
            mt='2'
            isLoading={isSubmitting}
            isLoadingText='Creating Account...'
            onPress={handleSubmit(onSubmit)}
          >
            Sign up
          </Button>
        </VStack>
      </Box>
    </Center>
  );
}
