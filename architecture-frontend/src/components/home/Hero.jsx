import { Box, Typography, Button, Stack, Container } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useNavigate } from "react-router-dom";
import { GOLD, BEIGE } from "../../theme/theme";

export default function Hero() {
  const navigate = useNavigate();

  return (
    <Box sx={{
      minHeight: "100vh", bgcolor: "#0a0a0a", position: "relative",
      display: "flex", alignItems: "flex-end", pb: { xs: 8, md: 12 }, overflow: "hidden",
    }}>

      {/* Grille de fond */}
      <Box sx={{
        position: "absolute", inset: 0, opacity: 0.04,
        backgroundImage: `linear-gradient(${GOLD} 1px, transparent 1px), linear-gradient(90deg, ${GOLD} 1px, transparent 1px)`,
        backgroundSize: "80px 80px",
      }} />

      {/* Ligne verticale décorative */}
      <Box sx={{
        position: "absolute", top: 0, right: { xs: "8%", md: "15%" }, bottom: 0,
        width: "1px",
        background: `linear-gradient(to bottom, transparent, ${GOLD}, transparent)`,
        opacity: 0.3,
      }} />

      {/* Texte rotatif côté droit */}
      <Typography sx={{
        position: "absolute", right: 60, top: "50%",
        transform: "translateY(-50%) rotate(90deg)",
        fontSize: "10px", letterSpacing: "4px", textTransform: "uppercase",
        color: GOLD, opacity: 0.5, display: { xs: "none", md: "block" },
      }}>
        2CP — AGENCE D'ARCHITECTURE
      </Typography>

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>

        {/* Tag doré */}
        <Stack direction="row" alignItems="center" spacing={1.5} sx={{ mb: 3 }}>
          <Box sx={{ width: 40, height: 1, bgcolor: GOLD }} />
          <Typography sx={{ fontSize: "10px", letterSpacing: "4px", textTransform: "uppercase", color: GOLD }}>
            Cabinet d'Architecture
          </Typography>
        </Stack>

        {/* Titre principal */}
        <Typography variant="h1" sx={{ fontSize: { xs: "52px", md: "88px" }, color: BEIGE, mb: 4 }}>
          L'Art de<br />
          <Box component="em" sx={{ fontStyle: "italic", color: GOLD }}>Bâtir</Box> le<br />
          Futur
        </Typography>

        {/* Sous-titre */}
        <Typography variant="body1" sx={{ color: "rgba(245,237,216,0.6)", maxWidth: 420, mb: 6, fontSize: "13px" }}>
          Nous créons des espaces qui transcendent le temps. Chaque projet est une
          conversation entre la lumière, la matière et l'humain.
        </Typography>

        {/* Boutons */}
        <Stack direction="row" spacing={2.5}>
          <Button variant="contained" endIcon={<ArrowForwardIcon />} onClick={() => navigate("/projects")}>
            Voir nos Projets
          </Button>
          <Button variant="outlined" onClick={() => navigate("/contact")}>
            Nous Contacter
          </Button>
        </Stack>
      </Container>

      {/* Indicateur scroll */}
      <Box sx={{
        position: "absolute", bottom: 40, left: 60,
        display: { xs: "none", md: "flex" }, flexDirection: "column", alignItems: "center", gap: 1,
      }}>
        <Box sx={{
          width: 1, height: 60,
          background: `linear-gradient(to bottom, transparent, ${GOLD})`,
          animation: "scrollAnim 2s ease-in-out infinite",
          "@keyframes scrollAnim": {
            "0%, 100%": { opacity: 0.3 },
            "50%":       { opacity: 1 },
          },
        }} />
        <Typography sx={{ fontSize: "9px", letterSpacing: "3px", textTransform: "uppercase", color: GOLD, writingMode: "vertical-rl" }}>
          Défiler
        </Typography>
      </Box>
    </Box>
  );
}