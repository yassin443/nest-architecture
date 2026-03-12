import { Box, Typography, Container } from "@mui/material";
import ProjectGrid from "../components/projects/ProjectGrid";
import SectionTag  from "../components/common/SectionTag";
import { BEIGE, GOLD } from "../theme/theme";

export default function Projects() {
  return (
    <Box sx={{ pt: "64px" }}>

      {/* En-tête de la page */}
      <Box sx={{ py: 12, bgcolor: "#0a0a0a" }}>
        <Container maxWidth="lg">
          <SectionTag label="Portfolio" />
          <Typography variant="h1" sx={{ fontSize: { xs: "48px", md: "80px" }, color: BEIGE }}>
            Tous nos{" "}
            <Box component="em" sx={{ fontStyle: "italic", color: GOLD }}>Projets</Box>
          </Typography>
          <Typography variant="body1" sx={{ color: "rgba(245,237,216,0.5)", mt: 3, fontSize: "13px", maxWidth: 480 }}>
            Découvrez l'ensemble de nos réalisations — du résidentiel au commercial,
            chaque projet raconte une histoire unique.
          </Typography>
        </Container>
      </Box>

      {/* Tous les projets depuis MongoDB */}
      <ProjectGrid showHeader={false} />
    </Box>
  );
}