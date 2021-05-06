import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors: {
      primary: string;
      secondary: string;

      gradientPrimary: string[];
      gradientSecondary: string[];

      backgroundPrimary: string;
      backgroundSecondary: string;

      text: string;
    };
  }
}
