import {ThemeColors} from '../../theme/theme';
import {TouchableOpacityBoxProps} from '../Box/Box';
import {ButtonPreset} from './Button';

interface ButtonUI {
  container: TouchableOpacityBoxProps;
  content: ThemeColors;
}

export const buttonPresets: Record<ButtonPreset, ButtonUI> = {
  Primary: {
    container: {
      backgroundColor: 'primary',
    },
    content: 'primaryContrast',
  },
  Outline: {
    container: {
      borderWidth: 1,
      borderColor: 'primary',
    },
    content: 'primary',
  },
  Secondary: {
    container: {
      backgroundColor: 'carrotSecondary',
    },
    content: 'primaryContrast',
  },
};
