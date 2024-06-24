import React from 'react';

import {ActivityIndicator} from '../ActivityIndicator/ActivityIndicator';
import {TouchableOpacityBox, TouchableOpacityBoxProps} from '../Box/Box';
import {Text} from '../Text/Text';

import {buttonPresets} from './buttonPresets';

export type ButtonPreset = 'Primary' | 'Outline';

interface ButtonProps extends TouchableOpacityBoxProps {
  title: string;
  loading?: boolean;
  preset?: ButtonPreset;
  disabled?: boolean;
}

export function Button({
  title,
  loading,
  disabled,
  preset = 'Primary',
  ...touchableOpacityBoxProps
}: ButtonProps) {
  const buttonPreset = buttonPresets[preset][disabled ? 'disabled' : 'default'];

  return (
    <TouchableOpacityBox
      paddingHorizontal="s20"
      height={50}
      alignItems="center"
      justifyContent="center"
      borderRadius="s16"
      disabled={disabled || loading}
      {...buttonPreset.container}
      {...touchableOpacityBoxProps}>
      {loading ? (
        <ActivityIndicator color={buttonPreset.content.color} />
      ) : (
        <Text preset="paragraphMedium" bold color={buttonPreset.content.color}>
          {title}
        </Text>
      )}
    </TouchableOpacityBox>
  );
}
