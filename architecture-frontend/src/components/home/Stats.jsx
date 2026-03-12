import { Box, Typography, Stack, Container } from "@mui/material";
import { GOLD } from "../../theme/theme";

// Chiffres statiques — pas de fetch API, c'est juste décoratif
const STATS = [
  { num: "15+", label: "Années d'expérience" },
  { num: "120", label: "Projets réalisés" },
  { num: "8",   label: "Prix d'architecture" },
];

export default function Stats() {
  return (
    <Box sx={{ bgcolor: "#0a0a0a", pb: 12 }}>
      <Container maxWidth="lg">
        <Stack direction="row" spacing={{ xs: 4, md: 8 }} flexWrap="wrap">
          {STATS.map(({ num, label }) => (
            <Box key={label}>
              <Typography sx={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: { xs: "36px", md: "52px" },
                fontWeight: 300, color: GOLD, lineHeight: 1,
              }}>
                {num}
              </Typography>
              <Typography sx={{
                fontSize: "9px", letterSpacing: "3px",
                textTransform: "uppercase",
                color: "rgba(245,237,216,0.4)", mt: 0.5,
              }}>
                {label}
              </Typography>
            </Box>
          ))}
        </Stack>
      </Container>
    </Box>
  );
}