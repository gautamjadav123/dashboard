import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import Badge from "@mui/material/Badge";
import Avatar from '@mui/material/Avatar';
import { Box, Container } from "@mui/material";
import Image from "mui-image";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Grid from "@mui/material/Unstable_Grid2";
 

export default function ScrollableTabsButtonPrevent() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  }
  return (
    <Box
      sx={{
        margin: "auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        height: "5vw",
        boxShadow: "0px 1px 5px #c9c9c9 ",
      }}
    >
      <img
        src="data:image/png;base64,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"
        alt=""
        width="150px"
        style={{ marginLeft: "12vw" }}
      />
      <Box
        sx={{
          maxWidth: { xs: 300, sm: 700 },
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          width: "50%",

          mr: "12vw",
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons={false}
          aria-label="scrollable prevent tabs example"
          textColor="secondry"
        >
          <Tab label="Managed Hiring" sx={{ fontWeight: "bold" }} />
          <div
            style={{
    backgroundColor: "#FF8C00",
    color: "#fff",
    borderradius: "4px",
    fontweight:" 500",
    fontsize: "10px",
    padding: "3px 6px",
    marginTop:"2.5%",
    letterspacing: ".5px",
    height:"20px",
    display:"flex",
    alignItems:"center",
    justifyContent:'center',
              
              
            }}
          >
            New
          </div>
          <Tab label="Dashboard" sx={{ fontWeight: "bold" }} />
          <Tab label="Post internship/Job" sx={{ fontWeight: "bold" }} />

          <Tab />
        </Tabs>
        <Badge color="primary" badgeContent={99} sx={{ margin: "20px 30px" }}>
          <TextsmsOutlinedIcon />
        </Badge>
        <Avatar
          sx={{
            color: "black",
            bgcolor: "white",
            border: "1px solid black",
            margin: "20px  px",
            width: "2vw",
            height: "2vw",
          }}
        >
          N
        </Avatar>
        <ArrowDropDownIcon fontSize="medium" sx={{ marginRight: "5px" }} />
      </Box>
    </Box>
  );
}
