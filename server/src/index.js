// Import modules
import express from "express";
import 'dotenv/config';

// import local modules
import contactForm_routes from '#routes/contactForm.routes.js';

// Config server
const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use(contactForm_routes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
