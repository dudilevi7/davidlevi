import React from 'react';
import { createMuiTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

const ResponsiveTypography = props=> {
  return (
    <div>
       <ThemeProvider theme={theme}>
        <Typography {...props}>{props.children}</Typography>
      </ThemeProvider>
    </div>
     
  );
}
export default ResponsiveTypography;