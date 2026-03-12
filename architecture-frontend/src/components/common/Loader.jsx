// Affiché pendant que axios fetch les données du backend
// Utilisation : if (loading) return <Loader />

import { Box, Typography } from "@mui/material";
import { GOLD } from "../../theme/theme";

export default function Loader() {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", py: 12 }}>
      <Typography sx={{
        color: GOLD, fontSize: "10px", letterSpacing: "4px", textTransform: "uppercase",
        animation: "pulse 1.5s ease-in-out infinite",
        "@keyframes pulse": {
          "0%, 100%": { opacity: 0.3 },
          "50%":       { opacity: 1 },
        },
      }}>
        Chargement...
      </Typography>
    </Box>
  );
}