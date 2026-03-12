import axios from "axios";

// Toutes les requêtes vont vers ton backend NestJS sur le port 3000
const API = axios.create({
  baseURL: "http://localhost:3000",
});

// Projects ─────────────────────────────────────────
export const getProjects = ()       => API.get("/projects");
export const getProject  = (id)     => API.get(`/projects/${id}`);

// Services ─────────────────────────────────────────
export const getServices = ()       => API.get("/services");

// Appointments ─────────────────────────────────────
export const createAppointment = (data) => API.post("/appointments", data);

// Contact ──────────────────────────────────────────
export const sendContact = (data)   => API.post("/contact", data);