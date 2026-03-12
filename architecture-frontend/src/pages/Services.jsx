import { Box, Typography, Container } from "@mui/material";
import ServiceCard from "../components/services/ServiceCard";
import SectionTag  from "../components/common/SectionTag";
import { BEIGE, GOLD } from "../theme/theme";

export default function Services() {
  return (
    <Box sx={{ pt: "64px" }}>

      {/* En-tête de la page */}
      <Box sx={{ py: 12, bgcolor: "#0a0a0a" }}>
        <Container maxWidth="lg">
          <SectionTag label="Ce que nous faisons" />
          <Typography variant="h1" sx={{ fontSize: { xs: "48px", md: "80px" }, color: BEIGE }}>
            Nos{" "}
            <Box component="em" sx={{ fontStyle: "italic", color: GOLD }}>Services</Box>
          </Typography>
          <Typography variant="body1" sx={{ color: "rgba(245,237,216,0.5)", mt: 3, fontSize: "13px", maxWidth: 480 }}>
            De la conception à la livraison, nous vous accompagnons à chaque
            étape de votre projet architectural.
          </Typography>
        </Container>
      </Box>

      {/* Tous les services depuis MongoDB */}
      <ServiceCard />
    </Box>
  );
}