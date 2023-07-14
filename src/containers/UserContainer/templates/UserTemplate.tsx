import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import dynamic from "next/dynamic";
import { usePrevious } from '@/utils/helper';

const UserAddress = dynamic(() => import("../modules/UserAddress"));
const UserPayments = dynamic(() => import("../modules/UserPayments"));
const UserDetails = dynamic(() => import("../modules/UserDetails")); //, { ssr: false }

const UserTemplate = () => {
  const [value, setValue] = React.useState("1");
  const previousTab = usePrevious(value);

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Details" value="1" />
            <Tab label="Address" value="2" />
            <Tab label="Payments" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1">
          <UserDetails />
        </TabPanel>
        <TabPanel value="2">
          <UserAddress />
        </TabPanel>
        <TabPanel value="3">
          <UserPayments />
        </TabPanel>
      </TabContext>
      {parseInt(value) > 1 && (
        <Button
          variant="contained"
          onClick={(event) => {
            handleChange(event, previousTab || "1");
          }}
        >
          Back
        </Button>
      )}
    </Box>
  );
};

export default UserTemplate;
