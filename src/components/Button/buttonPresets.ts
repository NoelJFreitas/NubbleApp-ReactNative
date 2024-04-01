import {ThemeColors} from '../../theme/theme';
import {TouchableOpacityBoxProps} from '../Box/Box';
import {ButtonPreset} from './Button';

interface ButtonUI {
  container: TouchableOpacityBoxProps;
  content: ThemeColors;
}

export const buttonPresets: Record<
  ButtonPreset,
  {default: ButtonUI; disable: ButtonUI}
> = {
  Primary: {
    default: {
      container: {
        backgroundColor: 'primary',
      },
      content: 'primaryContrast',
    },
    disable: {
      container: {
        backgroundColor: 'gray4',
      },
      content: 'gray2',
    },
  },

  Outline: {
    default: {
      container: {
        backgroundColor: 'primary',
      },
      content: 'primary',
    },
    disable: {
      container: {
        backgroundColor: 'gray4',
      },
      content: 'gray2',
    },
  },
};
