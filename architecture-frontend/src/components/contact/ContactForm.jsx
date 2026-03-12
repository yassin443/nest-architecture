import { useState } from "react";
import { Box, Typography, Grid, TextField, Button, Stack } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import { sendContact } from "../../services/api";
import { GOLD } from "../../theme/theme";

export default function ContactForm() {
  const [form, setForm]     = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [sent, setSent]     = useState(false);
  const [loading, setLoading] = useState(false);

  const handle = (field) => (e) => setForm({ ...form, [field]: e.target.value });

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.message) return;
    setLoading(true);
    try {
      await sendContact(form);   // → POST /contact dans NestJS
      setSent(true);
      setForm({ name: "", email: "", phone: "", subject: "", message: "" });
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
        Message envoyé
      </Typography>
      <Typography sx={{ color: "rgba(245,237,216,0.5)", fontSize: "13px" }}>
        Nous vous répondrons sous 24h.
      </Typography>
      <Button variant="outlined" onClick={() => setSent(false)} sx={{ mt: 2 }}>
        Envoyer un autre message
      </Button>
    </Box>
  );

  return (
    <Stack spacing={4}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField fullWidth variant="standard" label="Nom complet"
            placeholder="Jean Martin" value={form.name} onChange={handle("name")} />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField fullWidth variant="standard" label="Email"
            placeholder="jean@email.fr" value={form.email} onChange={handle("email")} />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField fullWidth variant="standard" label="Téléphone"
            placeholder="+33 6 00 00 00 00" value={form.phone} onChange={handle("phone")} />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField fullWidth variant="standard" label="Sujet"
            placeholder="Demande de devis" value={form.subject} onChange={handle("subject")} />
        </Grid>
        <Grid item xs={12}>
          <TextField fullWidth variant="standard" label="Message"
            placeholder="Décrivez votre projet..." multiline rows={4}
            value={form.message} onChange={handle("message")} />
        </Grid>
      </Grid>
      <Button variant="contained" fullWidth size="large" onClick={handleSubmit} disabled={loading}
        sx={{ py: 2.2, fontSize: "10px", letterSpacing: "4px" }}>
        {loading ? "Envoi..." : "Envoyer le message"}
      </Button>
    </Stack>
  );
}