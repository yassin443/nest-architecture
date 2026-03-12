import { useState, useEffect } from "react";
import { Grid, Box, Typography, Button, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ProjectCard from "./ProjectCard";
import Loader from "../common/Loader";
import SectionTag from "../common/SectionTag";
import { getProjects } from "../../services/api";
import { BEIGE, GOLD } from "../../theme/theme";

// limit    → nombre de projets à afficher (5 sur Home, tous sur la page Projects)
// showHeader → afficher le titre "Nos Projets" ou pas
export default function ProjectGrid({ limit, showHeader = true }) {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading]   = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    getProjects()
      .then((res) => {
        // Si limit est défini on prend les X premiers, sinon tous
        const data = limit ? res.data.slice(0, limit) : res.data;
        setProjects(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) return <Loader />;

  return (
    <Box sx={{ py: 15, bgcolor: "#111111" }}>
      <Container maxWidth="lg">

        {/* En-tête affiché seulement sur Home */}
        {showHeader && (
          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", mb: 8 }}>
            <Box>
              <SectionTag label="Réalisations" />
              <Typography variant="h2" sx={{ fontSize: { xs: "36px", md: "52px" }, color: BEIGE }}>
                Nos{" "}
                <Box component="em" sx={{ fontStyle: "italic", color: GOLD }}>Projets</Box>
              </Typography>
            </Box>
            <Button variant="outlined" size="small" onClick={() => navigate("/projects")}
              sx={{ fontSize: "10px" }}>
              Voir tout →
            </Button>
          </Box>
        )}

        {/* Grille : 1 grande carte à gauche + petites à droite */}
        <Grid container spacing={0.3}>
          <Grid item xs={12} md={5}>
            {projects[0] && <ProjectCard project={projects[0]} large />}
          </Grid>
          <Grid item xs={12} md={7}>
            <Grid container spacing={0.3}>
              {projects.slice(1).map((project) => (
                <Grid item xs={6} key={project._id}>
                  <ProjectCard project={project} />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}