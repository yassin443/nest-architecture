import { Box, Typography } from "@mui/material";
import { GOLD } from "../../theme/theme";

// project vient de MongoDB : { _id, title, city, category, imageUrl }
export default function ProjectCard({ project, large = false }) {
  return (
    <Box sx={{
      height: large ? { xs: 320, md: 640 } : { xs: 260, md: 316 },
      position: "relative", overflow: "hidden", cursor: "pointer", bgcolor: "#1a1a1a",
      "&:hover .card-img":     { transform: "scale(1.05)" },
      "&:hover .card-content": { transform: "translateY(0)" },
    }}>

      {/* Image du projet (si imageUrl dans la DB) */}
      {project.imageUrl ? (
        <Box className="card-img" component="img"
          src={project.imageUrl} alt={project.title}
          sx={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.6s ease" }}
        />
      ) : (
        /* Placeholder si pas d'image dans la DB */
        <Box className="card-img" sx={{
          width: "100%", height: "100%",
          background: "linear-gradient(135deg, #1a1a2e 0%, #0a0a0a 100%)",
          transition: "transform 0.6s ease",
          display: "flex", alignItems: "center", justifyContent: "center",
        }}>
          <svg viewBox="0 0 200 200" width="60%" height="60%" opacity="0.15">
            <rect x="20" y="100" width="160" height="80" fill="none" stroke={GOLD} strokeWidth="0.6" />
            <rect x="60" y="60"  width="80"  height="40" fill="none" stroke={GOLD} strokeWidth="0.6" />
            <rect x="85" y="20"  width="30"  height="40" fill="none" stroke={GOLD} strokeWidth="0.6" />
            <line x1="20" y1="180" x2="180" y2="180" stroke={GOLD} strokeWidth="1" />
          </svg>
        </Box>
      )}

      {/* Dégradé noir en bas */}
      <Box sx={{
        position: "absolute", inset: 0,
        background: "linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 60%)",
      }} />

      {/* Titre / ville / catégorie */}
      <Box className="card-content" sx={{
        position: "absolute", bottom: 0, left: 0, right: 0,
        p: 3.5, transform: "translateY(8px)", transition: "transform 0.3s",
      }}>
        <Typography sx={{ fontSize: "9px", letterSpacing: "3px", textTransform: "uppercase", color: GOLD, mb: 1 }}>
          {project.category}
        </Typography>
        <Typography sx={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: large ? "26px" : "20px",
          fontWeight: 300, color: "white", mb: 0.5,
        }}>
          {project.title}
        </Typography>
        <Typography sx={{ fontSize: "10px", letterSpacing: "2px", color: "rgba(255,255,255,0.4)" }}>
          {project.city}
        </Typography>
      </Box>
    </Box>
  );
}