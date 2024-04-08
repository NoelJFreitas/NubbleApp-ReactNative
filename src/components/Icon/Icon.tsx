import React from 'react';
import {EyeOnIcon} from '../../assets/icons/EyeOnICon';
import {EyeOffIcon} from '../../assets/icons/EyeOffIcon';
import {ThemeColors} from '../../theme/theme';
import {useAppTheme} from '../../hooks/useAppTheme';

export interface IconBase {
  size?: number;
  color?: string;
}

interface Props {
  name: IconName;
  size?: number;
  color: ThemeColors;
}

const iconRegistry = {
  eyeOn: EyeOnIcon,
  eyeOff: EyeOffIcon,
};

type IconType = typeof iconRegistry;
type IconName = keyof IconType;

export function Icon({name, size, color = 'backgroundContrast'}: Props) {
  const {colors} = useAppTheme();
  const SVGIcon = iconRegistry[name];

  return <SVGIcon color={colors[color]} size={size} />;
}
