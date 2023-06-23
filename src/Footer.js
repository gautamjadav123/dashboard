import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import { Box } from "@mui/material";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#4c4b4b",
        p: 3,
        color: "white",
        fontSize: "12px",
      }}
    >
      <Container sx={{ width: "60vw" }}>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={1.4}>
            <Typography variant="p" gutterBottom>
              About Us
            </Typography>
          </Grid>
          <Grid item xs={12} sm={1.4}>
            <Typography variant="p" gutterBottom>
              We're hiring
            </Typography>
          </Grid>

          <Grid item xs={12} sm={1.8}>
            <Typography variant="p" gutterBottom>
              Employer resources
            </Typography>
          </Grid>

          <Grid item xs={12} sm={1.4}>
            <Typography variant="p" gutterBottom>
              Our services
            </Typography>
          </Grid>

          <Grid item xs={12} sm={1.9}>
            <Typography variant="p" gutterBottom>
              Terms and conditions
            </Typography>
          </Grid>

          <Grid item xs={12} sm={1}>
            <Typography variant="p" gutterBottom>
              Policy
            </Typography>
          </Grid>

          <Grid item xs={12} sm={1.4}>
            <Typography variant="p" gutterBottom>
              Refund Policy
            </Typography>
          </Grid>

          <Grid item xs={12} sm={1.4}>
            <Typography variant="p" gutterBottom>
              Contact Us
            </Typography>
          </Grid>
        </Grid>
      </Container>
      <Box
        mt={5}
        sx={{
          borderTop: "1px solid #fff",
        }}
      >
        <Typography
          variant="body2"
          align="end"
          sx={{
            padding: "20px",
            marginRight: "18vw",
            fontSize:'12px'
          }}
        >
          {"© Copyright  "}
          {new Date().getFullYear()}
          {"."}
          internshala
        </Typography>
      </Box>
    </Box>
  );
}
