// import modules
import { getAllFormService } from '#services/contactForm.services.js';
import { createFormService } from '#services/contactForm.services.js';

export async function getAllFormController(req, res) {
  try {
    const form = await getAllFormService();
    return res.status(200).send(form);
  } catch(err) {
    return res.status(404).send(erro.message);
  }
}

export async function createFormController(req, res) {
  const newForm = req.body;
  try {
    const formMessage = await createFormService(newForm);
    return res.status(200).send(formMessage);
  } catch(err) {
    return res.status(404).send(err.message);
  }
}
