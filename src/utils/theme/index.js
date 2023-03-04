import { ThemeProvider, createTheme } from "@mui/material/styles";

const darkTheme = createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: "#1976d2",
      },
    },
  });
  
  const ApplyTheme = ({children})=>(
    <ThemeProvider theme={darkTheme}>
        {children}
    </ThemeProvider>
  )

  export default ApplyTheme;