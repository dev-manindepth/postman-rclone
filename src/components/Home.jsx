import { Box } from "@mui/material";
import React from "react";
import ErrorScreen from "./ErrorScreen";
import Form from "./Form";
import Header from "./Header";
// import Response from "./Response";
import SelectTab from "./SelectTab";


const homeContainer={
  width: '900px',
  margin: '20px auto',
  display: 'flex',
  flexDirection: 'column',
}
const Home = () => {

  
  return (
    <>
      <Header />
      <Box  style={homeContainer}>
        <Form />
        <SelectTab className="select-tab"/>
        {/* <Response/> */}
        <ErrorScreen/>
      </Box>
    </>
  );
};

export default Home;
