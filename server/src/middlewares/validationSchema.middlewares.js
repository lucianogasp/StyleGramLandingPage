// import modules
import { z } from 'zod';
import { FormSchema } from '#schemas/contactForm.schemas.js';

export const validateFormSchema = (req, res, next) => {
  try {
    FormSchema.parse(req.body);
    next();
  } catch(err) {
    if(err instanceof z.ZodError) {
      return res.status(400).json({ error: err.issues });
    } else {
      return res.status(500).json({ error: "Internal Server Error" });
    }
  }
}
