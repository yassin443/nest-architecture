import { useState } from "react";
import { Box, Typography, Grid, TextField, Button, MenuItem, Stack } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import { createAppointment } from "../../service/api";
import { GOLD } from "../../theme/theme";

const PROJECT_TYPES = ["Résidentiel", "Commercial", "Public", "Intérieur"];

export default function AppointmentForm() {
  const [form, setForm]     = useState({ clientName: "", clientEmail: "", clientPhone: "", date: "", time: "", message: "" });
  const [sent, setSent]     = useState(false);
  const [loading, setLoading] = useState(false);

  const handle = (field) => (e) => setForm({ ...form, [field]: e.target.value });

  const handleSubmit = async () => {
    if (!form.clientName || !form.clientEmail || !form.date || !form.time) return;
    setLoading(true);
    try {
      await createAppointment(form);   // → POST /appointments dans NestJS
      setSent(true);
      setForm({ clientName: "", clientEmail: "", clientPhone: "", date: "", time: "", message: "" });
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
  };

  if (sent) return (
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", py: 10, gap: 2 }}>
      <Box sx={{ width: 64, height: 64, border: `1px solid ${GOLD}`, display: "flex", alignItems: "center", justifyContent: "center" }}>
        <CheckIcon sx={{ color: GOLD, fontSize: 32 }} />
      </Box>
      <Typography sx={{ fontSize: "11px", letterSpacing: "3px", textTransform: "uppercase", color: GOLD }}>
        Rendez-vous demandé
      </Typography>
      <Typography sx={{ color: "rgba(245,237,216,0.5)", fontSize: "13px", textAlign: "center" }}>
        Nous confirmerons votre RDV sous 24h.
      </Typography>
    </Box>
  );

  return (
    <Stack spacing={4}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField fullWidth variant="standard" label="Nom complet"
            placeholder="Jean Martin" value={form.clientName} onChange={handle("clientName")} />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField fullWidth variant="standard" label="Email"
            placeholder="jean@email.fr" value={form.clientEmail} onChange={handle("clientEmail")} />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField fullWidth variant="standard" label="Téléphone"
            placeholder="+33 6 00 00 00 00" value={form.clientPhone} onChange={handle("clientPhone")} />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField fullWidth variant="standard" select label="Type de projet"
            value={form.message} onChange={handle("message")}>
            {PROJECT_TYPES.map((t) => (
              <MenuItem key={t} value={t}>{t}</MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField fullWidth variant="standard" label="Date souhaitée"
            type="date" InputLabelProps={{ shrink: true }}
            value={form.date} onChange={handle("date")}
            inputProps={{ style: { colorScheme: "dark" } }} />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField fullWidth variant="standard" label="Heure souhaitée"
            type="time" InputLabelProps={{ shrink: true }}
            value={form.time} onChange={handle("time")}
            inputProps={{ style: { colorScheme: "dark" } }} />
        </Grid>
      </Grid>
      <Button variant="contained" fullWidth size="large" onClick={handleSubmit} disabled={loading}
        sx={{ py: 2.2, fontSize: "10px", letterSpacing: "4px" }}>
        {loading ? "Envoi..." : "Confirmer le rendez-vous"}
      </Button>
    </Stack>
  );
}