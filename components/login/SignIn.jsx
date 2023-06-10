import { useState, useEffect } from 'react';
import {
  NativeBaseProvider,
  Box,
  Input,
  Center,
  Heading,
  VStack,
  FormControl,
  Button,
  KeyboardAvoidingView,
  Link,
  HStack,
  Text,
} from 'native-base';
import { useForm, Controller } from 'react-hook-form';

import {
  useCheckStoredJWTQuery,
  useStoreJWTMutation,
  useLoginMutation,
} from '../../lib/redux/services/auth';

function linkUiToFormControl(placeholder = '', isPassword = false) {
  return ({
    field: { onChange, onBlur, value, name, ref },
    fieldState: { invalid, isTouched, isDirty, error },
    formState,
  }) => (
    <Input
      onBlur={onBlur}
      placeholder={placeholder}
      onChangeText={(val) => onChange(val)}
      value={value}
      type={isPassword ? 'password' : 'text'}
      autoCapitalize='none'
    />
  );
}

export default function SignIn({ navigation }) {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [storeToken, { isLoading }] = useStoreJWTMutation();
  const [loginUser, { isLoading: isLoadingLogin }] = useLoginMutation();

  // function onSubmit(data) {
  //   handleSignIn(data, navigation);
  //   reset();
  // };

  async function login() {
    const user = await loginUser({ email: 'j@g.com', password: '123456' });
    console.log('uid is: ', user.uid);
    return;
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
          SignIn
        </Heading>
        <Button onPress={login}>Sign in?</Button>
      </Box>
    </Center>
  );
}

//   return (
//     <Center w='100%'>
//       <Box p='2' w='90%' maxW='290' py='8'>
//         <Heading
//           size='lg'
//           color='coolGray.800'
//           _dark={{
//             color: 'warmGray.50',
//           }}
//           fontWeight='semibold'
//         >
//           Welcome
//         </Heading>
//         <Heading
//           mt='1'
//           color='coolGray.600'
//           _dark={{
//             color: 'warmGray.200',
//           }}
//           fontWeight='medium'
//           size='xs'
//         >
//           Sign in to continue!
//         </Heading>

//         <VStack space={3} mt='5'>
//           <FormControl isRequired isInvalid={'email' in errors}>
//             <FormControl.Label>Email</FormControl.Label>
//             <Controller
//               control={control}
//               render={linkUiToFormControl('example@domain.com')}
//               name='email'
//               rules={{required: 'Email address is required'}}
//             />
//             <FormControl.ErrorMessage>
//               {errors.email?.message}
//             </FormControl.ErrorMessage>
//           </FormControl>

//           <FormControl isRequired isInvalid={'password' in errors}>
//             <FormControl.Label>Password</FormControl.Label>
//             <Controller
//               control={control}
//               render={linkUiToFormControl('', true)}
//               name='password'
//               rules={{
//                 required: 'Password is required',
//               }}
//             />
//             <FormControl.ErrorMessage>
//               {errors.password?.message}
//             </FormControl.ErrorMessage>
//           </FormControl>

//           <Button mt='2' colorScheme='indigo' onPress={handleSubmit(onSubmit)}>
//             Sign in
//           </Button>
//         </VStack>
//       </Box>
//     </Center>
//   );
// }
