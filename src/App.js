import React from "react";
import { ThemeProvider } from "styled-components";
import Header from "./components/Header";
const theme={
  colors:{
    nav:"#FFFFFF",
    main:"#840808",
    footer:"#D052DE",
  },
  mobile:"820px",
}
const App = () => {
  return (  
    <ThemeProvider theme={theme}>
    <Header/>
    </ThemeProvider>
    
  );
};

export default App;
