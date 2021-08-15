//this file makes use of the API from material-ui called create Material ui theme

import { createTheme } from "@material-ui/core";

const theme = createTheme({
    typography: {
        fontFamily: [
            'Montserrat',
            'sans-serif'
          ].join(','),
        },
  });
export default theme