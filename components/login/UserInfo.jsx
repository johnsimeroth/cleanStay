import React, { useState } from 'react';
import {
  Box,
  Center,
  Heading,
  VStack,
  FormControl,
  Button,
  ScrollView,
  Text,
} from 'native-base';
import { useForm, Controller } from 'react-hook-form';

import {
  useGetUserQuery,
  useAddUserMutation,
} from '../../lib/redux/services/auth';
import { auth } from '../../lib/firebaseConfig';
import getControlledInput from './getControlledInput';

export default function UserInfo() {
  const {
    control,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();

  const { uid } = auth.currentUser;
  console.log(uid);
  const { data, error, isLoading } = useGetUserQuery(uid);
  const [addUser, result] = useAddUserMutation();

  async function onSubmit(formData) {
    addUser({ uid, formData });
  }

  return (
    <Center w='100%'>
      <Box p='2' w='90%' maxW='290' py='8'>
        <Heading size='lg' fontWeight='semibold'>
          Thanks for creating an account!
        </Heading>
        <Heading mt='1' fontWeight='medium' size='xs'>
          We need a little more information to continue
        </Heading>

        <VStack space={3} mt='5'>
          <FormControl isRequired isInvalid={'firstName' in errors}>
            <FormControl.Label>First name</FormControl.Label>
            <Controller
              control={control}
              render={getControlledInput()}
              name='firstName'
              rules={{
                required: 'First name is required',
              }}
            />
            <FormControl.ErrorMessage>
              {errors.firstName?.message}
            </FormControl.ErrorMessage>
          </FormControl>

          <FormControl isRequired isInvalid={'lastName' in errors}>
            <FormControl.Label>Last name</FormControl.Label>
            <Controller
              control={control}
              render={getControlledInput()}
              name='lastName'
              rules={{
                required: 'Last name is required',
              }}
            />
            <FormControl.ErrorMessage>
              {errors.lastName?.message}
            </FormControl.ErrorMessage>
          </FormControl>

          <FormControl isRequired isInvalid={'phone' in errors}>
            <FormControl.Label>U.S. phone number</FormControl.Label>
            <Controller
              control={control}
              render={getControlledInput()}
              name='phone'
              rules={{
                required: 'Phone number is required',
                minLength: {
                  value: 10,
                  message: 'Phone number must be a valid 10 digit number',
                },
                maxLength: {
                  value: 10,
                  message: 'Phone number must be a valid 10 digit number',
                },
              }}
            />
            <FormControl.ErrorMessage>
              {errors.phone?.message}
            </FormControl.ErrorMessage>
          </FormControl>

          <ScrollView>
            <Text>{JSON.stringify(data)}</Text>
          </ScrollView>

          <Button
            mt='2'
            isLoading={isLoading}
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
