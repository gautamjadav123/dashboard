import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { Box } from "@mui/material";
import LongMenu from "./MenuDot";
import HelpIcon from "@mui/icons-material/Help";
import { FaCrown } from "react-icons/fa";
function createData(name, calories, fat, carbs, protein, iron) {
  const options = [
    "None",
    "Atria",
    "Callisto",
    "Dione",
    "Ganymede",
    "Hangouts Call",
    "Luna",
    "Oberon",
    "Phobos",
    "Pyxis",
    "Sedna",
    "Titania",
    "Triton",
    "Umbriel",
  ];

  const ITEM_HEIGHT = 48;

  return { name, calories, fat, carbs, protein, iron };
}

const rows = [
  createData(
    "Frozen yoghurt",
    159,
    6.0,
    <Button variant="contained" sx={{ width: "15vw" }}>
      View applications (686)
    </Button>,
    <Box
      sx={{
        backgroundImage: "linear-gradient(to right, #3646c7 , #bea6e9)",
        color: "#fff",
        fontWeight: "bold",
        textAlign: "center",
        borderRadius: "5px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <FaCrown />
      <p style={{ margin: "5px" }}>Premium</p>
    </Box>,
    <LongMenu />
  ),
  createData(
    "Ice cream sandwich",
    237,
    9.0,
    <Button variant="contained" sx={{ width: "15vw" }}>
      View applications (686)
    </Button>,

    <Box
      sx={{
        backgroundImage: "linear-gradient(to right, #3646c7 , #bea6e9)",
        color: "#fff",
        fontWeight: "bold",
        textAlign: "center",
        borderRadius: "5px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <FaCrown />
      <p style={{ margin: "5px" }}>Premium</p>
    </Box>,
    <LongMenu />
  ),
  createData(
    "Eclair",
    262,
    16.0,
    <Button variant="contained" sx={{ width: "15vw" }}>
      View applications (686)
    </Button>,

    <Box
      sx={{
        backgroundImage: "linear-gradient(to right, #3646c7 , #bea6e9)",
        color: "#fff",
        fontWeight: "bold",
        textAlign: "center",
        borderRadius: "5px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <FaCrown />
      <p style={{ margin: "5px" }}>Premium</p>
    </Box>,
    <LongMenu />
  ),
  createData(
    "Cupcake",
    305,
    3.7,
    <Button variant="contained" disabled="contained" sx={{ width: "15vw" }}>
      View applications (686)
    </Button>,

    <Box
      sx={{
        backgroundImage: "linear-gradient(to right, #3646c7 , #bea6e9)",
        color: "#fff",
        fontWeight: "bold",
        textAlign: "center",
        borderRadius: "5px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <FaCrown />
      <p style={{ margin: "5px" }}>Premium</p>
    </Box>,
    <LongMenu />
  ),
  createData(
    "Gingerbread",
    356,
    16.0,
    <Button variant="contained" sx={{ width: "15vw" }}>
      View applications (686)
    </Button>,

    <Box
      sx={{
        backgroundImage: "linear-gradient(to right, #3646c7 , #bea6e9)",
        color: "#fff",
        fontWeight: "bold",
        textAlign: "center",
        borderRadius: "5px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <FaCrown />
      <p style={{ margin: "5px" }}>Premium</p>
    </Box>,
    <LongMenu />
  ),
  createData(
    "Gingerbread",
    356,
    16.0,
    <Button variant="contained" disabled sx={{ width: "15vw" }}>
      View applications (686)
    </Button>,

    <Box
      sx={{
        backgroundImage: "linear-gradient(to right, #3646c7 , #bea6e9)",
        color: "#fff",
        fontWeight: "bold",
        textAlign: "center",
        borderRadius: "5px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <FaCrown />
      <p style={{ margin: "5px" }}>Premium</p>
    </Box>,
    <LongMenu />
  ),
  createData(
    "Gingerbread",
    356,
    16.0,
    <Button variant="contained" disabled sx={{ width: "15vw" }}>
      View applications (686)
    </Button>,

    <Box
      sx={{
        backgroundImage: "linear-gradient(to right, #3646c7 , #bea6e9)",
        color: "#fff",
        fontWeight: "bold",
        textAlign: "center",
        borderRadius: "5px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <FaCrown />
      <p style={{ margin: "5px" }}>Premium</p>
    </Box>,
    <LongMenu />
  ),
  createData(
    "Gingerbread",
    356,
    16.0,
    <Button variant="contained" sx={{ width: "15vw" }}>
      View applications (686)
    </Button>,

    <Box
      sx={{
        backgroundImage: "linear-gradient(to right, #3646c7 , #bea6e9)",
        color: "#fff",
        fontWeight: "bold",
        textAlign: "center",
        borderRadius: "5px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <FaCrown />
      <p style={{ margin: "5px" }}>Premium</p>
    </Box>,
    <LongMenu />
  ),
  createData(
    "Gingerbread",
    356,
    16.0,
    <Button variant="contained" sx={{ width: "15vw" }}>
      View applications (686)
    </Button>,

    <Box
      sx={{
        backgroundImage: "linear-gradient(to right, #3646c7 , #bea6e9)",
        color: "#fff",
        fontWeight: "bold",
        textAlign: "center",
        borderRadius: "5px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <FaCrown />
      <p style={{ margin: "5px" }}>Premium</p>
    </Box>,
    <LongMenu />
  ),
  createData(
    "Gingerbread",
    356,
    16.0,
    <Button variant="contained" disabled sx={{ width: "15vw" }}>
      View applications (686)
    </Button>,

    <Box
      sx={{
        backgroundImage: "linear-gradient(to right, #3646c7 , #bea6e9)",
        color: "#fff",
        fontWeight: "bold",
        textAlign: "center",
        borderRadius: "5px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <FaCrown />
      <p style={{ margin: "5px" }}>Premium</p>
    </Box>,
    <LongMenu />
  ),
];
export default function BasicTable() {
  return (
    <TableContainer component={Paper} sx={{ border: "1px solid #c3cdcc3d", marginBottom:"5%" }}>
      <Table sx={{ maxWidth: "100vw" }} aria-label="simple table">
        <TableHead sx={{ backgroundColor: "#c3cdcc3d" }}>
          <TableRow>
            <TableCell>PROFILE</TableCell>
            <TableCell align="right">STATUS</TableCell>
            <TableCell align="right">TOTAL VIEWS</TableCell>
            <TableCell align="center">ACTION</TableCell>
            <TableCell
              align="right"
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <HelpIcon sx={{ color: "blue", margin: "5px" }} />
              <p>UPGRADE TO PREMIUM </p>
            </TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="center">{row.calories}</TableCell>
              <TableCell align="center">{row.fat}</TableCell>
              <TableCell align="center">{row.carbs}</TableCell>
              <TableCell align="center">{row.protein}</TableCell>
              <TableCell align="center">{row.iron}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
