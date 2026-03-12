import { useState, useEffect } from "react";
import { Box, Typography, Grid, Container } from "@mui/material";
import Loader from "../common/Loader";
import SectionTag from "../common/SectionTag";
import { getServices } from "../../services/api";
import { GOLD, BEIGE } from "../../theme/theme";

export default function ServiceCard() {
  const [services, setServices] = useState([]);
  const [loading, setLoading]   = useState(true);

  useEffect(() => {
    getServices()
      .then((res) => {
        setServices(res.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) return <Loader />;

  return (
    <Box sx={{ py: 15, bgcolor: "#0a0a0a" }}>
      <Container maxWidth="lg">
        <SectionTag label="Expertise" />
        <Typography variant="h2" sx={{ fontSize: { xs: "36px", md: "52px" }, color: BEIGE, mb: 8 }}>
          Nos{" "}
          <Box component="em" sx={{ fontStyle: "italic", color: GOLD }}>Services</Box>
        </Typography>

        <Grid container sx={{ border: "1px solid rgba(201,168,76,0.1)" }}>
          {services.map((service, i) => (
            <Grid item xs={12} md={4} key={service._id}>
              <Box sx={{
                p: { xs: 5, md: 6 }, border: "1px solid rgba(201,168,76,0.1)",
                height: "100%", position: "relative", overflow: "hidden", cursor: "pointer",
                transition: "background 0.3s",
                "&:hover": { bgcolor: "rgba(201,168,76,0.04)" },
                "&::before": {
                  content: '""', position: "absolute", top: 0, left: 0,
                  width: 0, height: "2px", bgcolor: GOLD, transition: "width 0.4s",
                },
                "&:hover::before": { width: "100%" },
              }}>

                {/* Numéro 01 02 03 */}
                <Typography sx={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "64px", fontWeight: 300,
                  color: "rgba(201,168,76,0.15)", lineHeight: 1, mb: 3,
                }}>
                  {String(i + 1).padStart(2, "0")}
                </Typography>

                {/* Titre du service — vient de MongoDB */}
                <Typography variant="h3" sx={{ fontSize: "24px", color: BEIGE, mb: 2 }}>
                  {service.title}
                </Typography>

                {/* Description — vient de MongoDB */}
                <Typography variant="body1" sx={{ fontSize: "12px", color: "rgba(245,237,216,0.5)" }}>
                  {service.description}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}