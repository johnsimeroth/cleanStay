import React, { useState } from 'react';
import {
  Box,
  Center,
  Heading,
  VStack,
  FormControl,
  Button,
  Link,
  HStack,
  Text,
} from 'native-base';
import { useForm, Controller } from 'react-hook-form';
import {
  signInWithEmailAndPassword,
} from 'firebase/auth';

import { auth } from '../../lib/firebaseConfig';
import getControlledInput from './getControlledInput';

export default function SignIn({ navigation }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    control,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();

  async function onSubmit(data) {
    setIsSubmitting(true);
    signInWithEmailAndPassword(auth, data.email, data.password)
      .then(() => setIsSubmitting(false))
      .catch((e) => {
        const emailErrorMsg = 'No account found under this address';
        const passwordErrorMsg = 'Incorrect Password';

        if (e.message.includes('(auth/user-not-found)')) {
          setError('email', { type: 'auth', message: emailErrorMsg });
        }
        if (e.message.includes('(auth/wrong-password)')) {
          setError('password', { type: 'auth', message: passwordErrorMsg });
        }
        setIsSubmitting(false);
      });
  }

  return (
    <Center w='100%'>
      <Box p='2' w='90%' maxW='290' py='8'>
        <Heading
          size='lg'
          color='coolGray.800'
          _dark={{
            color: 'warmGray.50',
          }}
          fontWeight='semibold'
        >
          Welcome
        </Heading>
        <Heading
          mt='1'
          color='coolGray.600'
          _dark={{
            color: 'warmGray.200',
          }}
          fontWeight='medium'
          size='xs'
        >
          Sign in to continue!
        </Heading>

        <VStack space={3} mt='5'>
          <FormControl isRequired isInvalid={'email' in errors}>
            <FormControl.Label>Email</FormControl.Label>
            <Controller
              control={control}
              render={getControlledInput('example@domain.com')}
              name='email'
              rules={{ required: 'Email address is required' }}
            />
            <FormControl.ErrorMessage>
              {errors.email?.message}
            </FormControl.ErrorMessage>
          </FormControl>

          <FormControl isRequired isInvalid={'password' in errors}>
            <FormControl.Label>Password</FormControl.Label>
            <Controller
              control={control}
              render={getControlledInput('', true)}
              name='password'
              rules={{
                required: 'Password is required',
              }}
            />
            <FormControl.ErrorMessage>
              {errors.password?.message}
            </FormControl.ErrorMessage>
          </FormControl>

          <Button
            isLoading={isSubmitting}
            isLoadingText='Logging in...'
            mt='2'
            colorScheme='indigo'
            onPress={handleSubmit(onSubmit)}
          >
            Sign in
          </Button>
          <HStack mt='6' justifyContent='center'>
            <Text
              fontSize='sm'
              color='coolGray.600'
              _dark={{
                color: 'warmGray.200',
              }}
            >
              I'm a new user.{' '}
            </Text>
            <Link
              onPress={() => navigation.navigate('Sign Up')}
              _text={{
                color: 'indigo.500',
                fontWeight: 'medium',
                fontSize: 'sm',
              }}
            >
              Sign Up
            </Link>
          </HStack>
        </VStack>
      </Box>
    </Center>
  );
}
