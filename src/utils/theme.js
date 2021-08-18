//this file makes use of the API from material-ui called create Material ui theme

// import { createTheme, color } from "@material-ui/core";
import {createTheme } from '@material-ui/core/styles';
import {purple} from '@material-ui/core/colors'


// const theme = createTheme({
//     typography: {
//         fontFamily: [
//             'Montserrat',
//             'sans-serif'
//           ].join(','),
//         },
//   });
// export default theme

// const theme = createTheme({
//     palette: {
//         primary: {
//             main: '#8d9a8d'
//         },
//         secondary: purple
//     }
// })

const theme = createTheme({
  pallette: {
    primary: {
      main: '#003049',
    },
  },
})


// const theme = createTheme({
//   palette: {
//     primary: {
//       main: `#556cd6`,
//     },
//     secondary: {
//       main: `#19857b`,
//     },
//     error: {
//       main: colors.red.A400,
//     },
//     background: {
//       default: `#fff`,
//     },
//   },
// });
export default theme