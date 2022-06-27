import { createTheme } from "@mui/system";

export const theme = createTheme({
  components: {
    MuiTypography: {
      styleOverrides: {
        h5: {
          fontFamily: 'Times New Roman',
          color: 'blue',
        }
      } 
    }
  }
})
