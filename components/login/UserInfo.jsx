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

import getControlledInput from './getControlledInput';

export default function UserInfo({ navigation }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    control,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();

  async function onSubmit(data) {
    setIsSubmitting(true);
    setIsSubmitting(false);
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
            <FormControl.Label>Phone number</FormControl.Label>
            <Controller
              control={control}
              render={getControlledInput()}
              name='phone'
              rules={{
                required: 'Phone number is required',
              }}
            />
            <FormControl.ErrorMessage>
              {errors.phone?.message}
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
