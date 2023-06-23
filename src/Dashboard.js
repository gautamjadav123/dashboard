import React from "react";
import Header from "./Header";
import { Box } from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import Link from "@mui/material/Link";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Table from "./Table"
import Footer from "./Footer";

export default function Dashboard() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <div style={{display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'column', margin:'auto'}}>
      <Header />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "1vw",
        }}
      >
        <img
          src="data:image/jpeg;base64,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"
          width={800}
          height={100}
        />
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            width: "800px",
            height: "80px",
            bgcolor: "#eef6ff",
            padding: "10px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "5px",
            border: "1px solid #d1e2f5",
            margin: "20px",
          }}
        >
          <p
            style={{
              marginTop: "-10px",
              padding: "20px",
            }}
          >
            <InfoOutlinedIcon />
          </p>
          <p>
            Your Premium Plan is expiring on 20th july,2023. Renew your Premium
            Plan to continue enjoying access to Premium features and post
            unlimited Premium internship and fresher jobs.{" "}
            <Link>Renew Now</Link>
          </p>
        </Box>
      </div>
      <Box
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons={false}
          aria-label="scrollable prevent tabs example"
        
        >
          <Tab
            label="Internship"
            sx={{
              color: "gray",
              fontWeight: "bold",
              borderBottom: "2px solid lightgray",
            }}
          />
          <Tab
            label="Fresher Jobs"
            sx={{
              color: "gray",
              fontWeight: "bold",
              borderBottom: "2px solid lightgray",
            }}
          />
        </Tabs>
      </Box>
     <Box sx={{mt:"2% "}} >
      <Table/>

     </Box>

    
    </div>
  );
}
