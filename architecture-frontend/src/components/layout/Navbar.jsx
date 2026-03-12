import { AppBar, Toolbar, Box, Typography, Button, Stack, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate, useLocation } from "react-router-dom";
import { GOLD, BEIGE } from "../../theme/theme";
import logo from "../../assets/logo.png";

const NAV_LINKS = [
  { label: "Accueil",  path: "/" },
  { label: "Projets",  path: "/projects" },
  { label: "Services", path: "/services" },
  { label: "Contact",  path: "/contact" },
];

export default function Navbar() {

  const navigate  = useNavigate();
  const location  = useLocation();

  return (
    <AppBar position="fixed" elevation={0}
      sx={{ background: "linear-gradient(to bottom, rgba(10,10,10,0.95), transparent)" }}>
      <Toolbar sx={{ px: { xs: 3, md: 7.5 }, py: 1.5, justifyContent: "space-between" }}>

        {/* LOGO */}
        <Box component="img" src={logo} alt="2CP" onClick={() => navigate("/")}
          sx={{ height: 52, width: "auto", cursor: "pointer" }} />

        {/* LIENS */}
        <Stack direction="row" spacing={5} sx={{ display: { xs: "none", md: "flex" } }}>
          {NAV_LINKS.map((l) => {
            const actif = location.pathname === l.path;
            return (
              <Typography key={l.label} onClick={() => navigate(l.path)} sx={{
                fontSize: "11px", letterSpacing: "3px", textTransform: "uppercase",
                fontWeight: 300, cursor: "pointer",
                color: actif ? GOLD : BEIGE,
                borderBottom: actif ? `1px solid ${GOLD}` : "1px solid transparent",
                pb: 0.5, transition: "all 0.3s",
                "&:hover": { color: GOLD, borderBottomColor: GOLD },
              }}>
                {l.label}
              </Typography>
            );
          })}
        </Stack>

        {/* BOUTON RDV */}
        <Button variant="outlined" onClick={() => navigate("/contact")}
          sx={{ display: { xs: "none", md: "flex" }, fontSize: "9px", py: 1.2, px: 3 }}>
          Prendre RDV
        </Button>

        {/* MENU MOBILE */}
        <IconButton sx={{ display: { xs: "flex", md: "none" }, color: BEIGE }}>
          <MenuIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}