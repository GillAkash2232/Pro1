import React from "react";
import {
  Container,
  Typography,
  Box,
  Grid,
  Paper,
 
} from "@mui/material";
import logo from "../../assets/reporting.png"
import Team from "../team/Team"
import Footer from "../footer/Footer"
import './About.css'


export default function About() {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          textAlign: "center",
          py: 5,
          backgroundColor: "#f5f5f5",
          borderRadius: 2,
          mb: 4,
        }}
      >
        <div className="rotate"></div>
        <Typography variant="h2"  gutterBottom>
          About Us
        </Typography>

        <div className="rotate2"></div>
        <Typography variant="h6" color="textSecondary">
          We are committed to providing the best services in the industry.
        </Typography>
      </Box>
        <div className="rotate4"></div>
      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} md={6}>
          <Typography variant="h4" gutterBottom>
            Our Story
          </Typography>
          <Typography variant="body1" color="textSecondary">
          In the fast-evolving world of digital assets, [Crypto Wallet] is your trusted gateway to secure, seamless, and efficient cryptocurrency management. Whether you're a seasoned investor or just starting your crypto journey, our wallet offers a safe, intuitive, and feature-rich experience to store, send, and receive digital currencies with ease.       

          </Typography>
        
        </Grid>
        <Grid item xs={12} md={6}>
          <img
            src={logo}
            alt="About Us"
            style={{ width: "100%", borderRadius: "8px" }}
          />
        </Grid>
      </Grid>

      <Paper elevation={3} sx={{ p: 4, maxWidth: 1000, margin: "auto", mt: 5 }}>
      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} md={6}>
          <Box
            component="iframe"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d144.95592631590485!3d-37.81720997975171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0x5045675218ce6e0!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2s"
            width="100%"
            height="300"
            style={{ border: 0, borderRadius: 8 }}
            allowFullScreen
            loading="lazy"
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <Typography variant="h5" fontWeight="bold">
            Contact Us
          </Typography>
          <Typography variant="body1" mt={2}>
            📍 <strong>Address:</strong> Maharaja Ranjit Singh Bhawan, GNDU Amritsar.
          </Typography>
          <Typography variant="body1" mt={1}>
            📞 <strong>Phone:</strong> +91 9872567984
          </Typography>
          <Typography variant="body1" mt={1}>
            ✉️ <strong>Email:</strong> info@example.com
          </Typography>
          <Typography variant="body1" mt={1}>
            🕒 <strong>Working Hours:</strong> Mon-Fri, 9:00 AM - 6:00 PM
          </Typography>
        </Grid>
      </Grid>
    </Paper>

      
          <Team />
          <Footer />
     
    </Container>
    
  );
}
