import React from 'react';
import { Input } from 'native-base';

// returns a callable function that returns a functional component
export default function getControlledInput(placeholder = '', isPassword = false) {
  return function ControlledInput({ field: { onChange, onBlur, value } }) {
    return (
      <Input
        onBlur={onBlur}
        placeholder={placeholder}
        onChangeText={(val) => onChange(val)}
        value={value}
        type={isPassword ? 'password' : 'text'}
        autoCapitalize='none'
      />
    );
  };
}
