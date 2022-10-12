import { Box, MenuItem, Select, TextField, Button } from "@mui/material";

const formContainer = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginBottom: "10px",
};

const Form = () => {
  return (
    <Box style={formContainer}>
      <Select label="POST" style={{ width: "150px", height: "40px" }}>
        <MenuItem value="POST">POST</MenuItem>
        <MenuItem value="GET">GET</MenuItem>
      </Select>
      <TextField
        size="small"
        style={{ width: "100%", backgroundColor: "#F6F6F6" }}
      />
      <Button
        variant="contained"
        style={{ width: "100px", height: "40px", marginLeft: "10px" }}
      >
        Send
      </Button>
    </Box>
  );
};

export default Form;
