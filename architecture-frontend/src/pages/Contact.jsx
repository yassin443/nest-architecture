import { useState } from "react";
import { Box, Typography, Grid, Stack, Divider, Tabs, Tab } from "@mui/material";
import LocationOnIcon  from "@mui/icons-material/LocationOn";
import PhoneIcon       from "@mui/icons-material/Phone";
import EmailIcon       from "@mui/icons-material/Email";
import AccessTimeIcon  from "@mui/icons-material/AccessTime";
import ContactForm     from "../components/contact/ContactForm";
import AppointmentForm from "../components/contact/AppointmentForm";
import SectionTag      from "../components/common/SectionTag";
import { GOLD, BEIGE, DARK2 } from "../theme/theme";

const INFO = [
  { icon: <LocationOnIcon sx={{ fontSize: 16 }} />,  label: "Adresse",   value: "12 Rue des Architectes, 75008 Paris" },
  { icon: <PhoneIcon      sx={{ fontSize: 16 }} />,  label: "Téléphone", value: "+33 1 42 00 00 00" },
  { icon: <EmailIcon      sx={{ fontSize: 16 }} />,  label: "Email",     value: "contact@2cp-architecture.fr" },
  { icon: <AccessTimeIcon sx={{ fontSize: 16 }} />,  label: "Horaires",  value: "Lun – Ven : 9h00 – 18h00" },
];

export default function Contact() {
  const [tab, setTab] = useState(0);  // 0 = RDV  |  1 = Message

  return (
    <Box sx={{ pt: "64px", bgcolor: DARK2, minHeight: "100vh" }}>
      <Grid container>

        {/* ── GAUCHE : infos ── */}
        <Grid item xs={12} md={5}>
          <Box sx={{ p: { xs: 6, md: 10 }, borderRight: { md: "1px solid rgba(201,168,76,0.15)" }, minHeight: "100vh" }}>
            <SectionTag label="Contact" />
            <Typography variant="h2" sx={{ fontSize: { xs: "36px", md: "48px" }, color: BEIGE, mb: 1 }}>
              Parlons de<br />
              <Box component="em" sx={{ fontStyle: "italic", color: GOLD }}>votre Projet</Box>
            </Typography>
            <Typography variant="body1" sx={{ color: "rgba(245,237,216,0.5)", fontSize: "13px", mt: 3, mb: 6, maxWidth: 360 }}>
              Notre équipe vous reçoit pour une première consultation gratuite.
            </Typography>

            <Stack spacing={0}>
              {INFO.map((item, i) => (
                <Box key={i}>
                  <Stack direction="row" spacing={2} alignItems="flex-start" sx={{ py: 3 }}>
                    <Box sx={{
                      width: 36, height: 36, flexShrink: 0,
                      border: "1px solid rgba(201,168,76,0.3)",
                      display: "flex", alignItems: "center", justifyContent: "center", color: GOLD,
                    }}>
                      {item.icon}
                    </Box>
                    <Box>
                      <Typography sx={{ fontSize: "9px", letterSpacing: "3px", textTransform: "uppercase", color: GOLD, mb: 0.5 }}>
                        {item.label}
                      </Typography>
                      <Typography sx={{ fontSize: "13px", fontWeight: 300, color: "rgba(245,237,216,0.7)" }}>
                        {item.value}
                      </Typography>
                    </Box>
                  </Stack>
                  {i < INFO.length - 1 && <Divider sx={{ borderColor: "rgba(201,168,76,0.1)" }} />}
                </Box>
              ))}
            </Stack>
          </Box>
        </Grid>

        {/* ── DROITE : formulaires ── */}
        <Grid item xs={12} md={7}>
          <Box sx={{ p: { xs: 6, md: 10 } }}>

            {/* Onglets Prendre RDV / Envoyer un message */}
            <Tabs value={tab} onChange={(_, v) => setTab(v)} sx={{
              mb: 6,
              "& .MuiTab-root":     { fontSize: "10px", letterSpacing: "3px", textTransform: "uppercase", color: "rgba(245,237,216,0.4)", minWidth: 0, px: 0, mr: 5 },
              "& .Mui-selected":    { color: `${GOLD} !important` },
              "& .MuiTabs-indicator": { backgroundColor: GOLD, height: "1px" },
            }}>
              <Tab label="Prendre RDV" />
              <Tab label="Envoyer un message" />
            </Tabs>

            {/* Tab 0 → AppointmentForm → POST /appointments */}
            {tab === 0 && <AppointmentForm />}

            {/* Tab 1 → ContactForm → POST /contact */}
            {tab === 1 && <ContactForm />}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}