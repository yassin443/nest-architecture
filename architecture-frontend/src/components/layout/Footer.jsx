import { Box, Typography, Stack } from "@mui/material";
import { GOLD, BEIGE } from "../theme/theme";
import logo from "../assets/logo.png";

const SOCIALS = ["Instagram", "LinkedIn", "Houzz"];

export default function Footer() {
  return (
    <Box
      sx={{
        py: 5,
        px: { xs: 4, md: 8 },
        bgcolor: "#050505",
        borderTop: "1px solid rgba(201,168,76,0.15)",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: 3,
      }}
    >
      {/* Logo */}
      <Box
        component="img"
        src={logo}
        alt="2cp Agence d'Architecture"
        sx={{ height: 44, width: "auto" }}
      />

      {/* Copyright */}
      <Typography sx={{ fontSize: "10px", letterSpacing: "2px", color: "rgba(245,237,216,0.3)" }}>
        © 2024 2CP Agence d'Architecture. Tous droits réservés.
      </Typography>

      {/* Socials */}
      <Stack direction="row" spacing={4}>
        {SOCIALS.map((s) => (
          <Typography
            key={s}
            sx={{
              fontSize: "10px", letterSpacing: "2px",
              color: "rgba(245,237,216,0.3)", cursor: "pointer",
              transition: "color 0.3s",
              "&:hover": { color: GOLD },
            }}
          >
            {s}
          </Typography>
        ))}
      </Stack>
    </Box>
  );
}