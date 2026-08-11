// Import modules
import express from "express";
import 'dotenv/config';
import cors from 'cors';

// import local modules
import contactForm_routes from '#routes/contactForm.routes.js';

// Config server
const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use(cors({
  origin: 'http://localhost:5173'
}));
app.use(contactForm_routes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
