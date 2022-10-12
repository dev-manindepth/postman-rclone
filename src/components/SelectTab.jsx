
import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CreateTable from "./CreateTable";
import CreateJsonText from "./CreateJsonText";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function SelectTab() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box /**sx={{ borderBottom: 1, borderColor: "divider" }} */>
        <Tabs
          value={value}
          onChange={handleChange}
          textColor="none"
          aria-label="basic tabs example"
          TabIndicatorProps={{
            sx: { backgroundColor: "#F26b3A", height: 4, bottom: 2 },
          }}
        >
          <Tab label="Params" {...a11yProps(0)} />
          <Tab label="Headers" {...a11yProps(1)} />
          <Tab label="Body" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <CreateTable text="Query Params"/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <CreateTable text="Headers" />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <CreateJsonText/>
      </TabPanel>
    </Box>
  );
}
