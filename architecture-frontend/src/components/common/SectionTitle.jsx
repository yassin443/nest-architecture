// Titre de section avec un mot en doré italique
// Utilisation : <SectionTitle normal="Nos" italic="Projets" />

import { Typography, Box } from "@mui/material";
import { GOLD, BEIGE } from "../../theme/theme";

export default function SectionTitle({ normal, italic, size = { xs: "36px", md: "52px" } }) {
  return (
    <Typography variant="h2" sx={{ fontSize: size, color: BEIGE, mb: 8 }}>
      {normal}{" "}
      <Box component="em" sx={{ fontStyle: "italic", color: GOLD }}>
        {italic}
      </Box>
    </Typography>
  );
}