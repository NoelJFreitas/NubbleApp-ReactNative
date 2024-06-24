import React from 'react';
import {
  ActivityIndicatorProps,
  ActivityIndicator as RNActivityIndicator,
} from 'react-native';

import {useAppTheme} from '../../hooks/useAppTheme';
import {ThemeColors} from '../../theme/theme';

interface Props extends Omit<ActivityIndicatorProps, 'color'> {
  color: ThemeColors;
}

export function ActivityIndicator({color, ...props}: Props) {
  const {colors} = useAppTheme();
  return <RNActivityIndicator color={colors[color]} {...props} />;
}
