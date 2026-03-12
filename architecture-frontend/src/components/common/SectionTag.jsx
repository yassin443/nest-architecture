// Pourquoi ce composant ?
// Ce tag "— Réalisations" doré est utilisé dans Projects, Services et Contact.
// Au lieu de copier les mêmes 10 lignes dans chaque fichier,
// tu l'importes en une ligne : <SectionTag label="Réalisations" />

import { Box, Typography, Stack } from "@mui/material";
import { GOLD } from "../../theme/theme";

export default function SectionTag({ label }) {
  return (
    <Stack direction="row" alignItems="center" spacing={1.5} sx={{ mb: 1.5 }}>
      <Box sx={{ width: 30, height: 1, bgcolor: GOLD }} />
      <Typography sx={{ fontSize: "10px", letterSpacing: "4px", textTransform: "uppercase", color: GOLD }}>
        {label}
      </Typography>
    </Stack>
  );
}