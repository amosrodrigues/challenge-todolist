import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    gray: {
      '700': '#0D0D0D',
      '600': '#1A1A1A',
      '500': '#262626',
      '400': '#333333',
      '300': '#808080',
      '200': '#D9D9D9',
      '100': '#F2F2F2',
    },
    green: {
      '300': '#00b37e',
      '500': '#00875f',
    },
    red: {
      '500': '#f75a68',
    },
    danger: '#E25858',
    purple: '#8284FA',
    purpleDark: '#5E60CE',
    blue: {
      '100': '#4EA8DE',
      '300': '#1E6F9F',
    },
  },
  fonts: {
    heading: 'Roboto',
    body: 'Roboto',
  },
  styles: {
    global: {
      body: {
        bg: 'gray.600',
        color: 'gray.50',
      },
      '::-webkit-scrollbar': {
        width: '0.375rem',
        height: '0.375rem',
        marginRight: '10px',
      },
      '::-webkit-scrollbar-corner': {
        border: 'none',
        background: 'none',
      },
      '::-webkit-scrollbar-thumb': {
        backgroundColor: '#3D3C42',
        borderRadius: '3px',
        cursor: 'move',
      },
    },
  },
  components: {
    Checkbox: {
      baseStyle: {
        icon: {
          color: 'white',
        },
        control: {
          border: '2px',
          borderColor: 'blue.100',
          borderRadius: 'full',
          _hover: {
            borderColor: 'blue.300',
            bg: 'gray.400',
          },
          _disabled: {
            borderColor: 'gray.300',
            bg: 'gray.200',
          },
          _checked: { borderColor: 'purpleDark', bg: 'purpleDark' },
        },
        label: {
          fontWeight: 'medium',
          color: 'gray.900',
        },
      },
    },
  },
});
