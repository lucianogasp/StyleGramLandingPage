import { z } from "zod";

export const FormSchema = z.object({
  name: z.string(),
  whatsapp_number: z.string(),
  email: z.email(),
  contact_reason: z.string().max(150),
  contact_message: z.string().max(1000)
});
