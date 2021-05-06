import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors: {
      text: string;
      textSecondary: string;

      backgroundPrimary: string;
    };
  }
}
