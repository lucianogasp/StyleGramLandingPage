// import modules
import { 
  getAllFormService, 
  getFormByIdService, 
  createFormService, 
  updateFormByIdService, 
  deleteFormByIdService 
} from '#services/contactForm.services.js';

export async function getAllFormController(req, res) {
  try {
    const form = await getAllFormService();
    return res.status(200).send(form);
  } catch(err) {
    return res.status(404).send(err.message);
  }
}

export async function getFormByIdController(req, res) {
  const { id } = req.params;
  try {
    const row = await getFormByIdService(id);
    return res.status(200).send(row);
  } catch(err) {
    return res.status(404).send(err.message);
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

export async function updateFormByIdController(req, res) {
  const { id } = req.params;
  const newForm = req.body;
  try {
    const formMessage = await updateFormByIdService(id, newForm);
    return res.status(200).send(formMessage);
  } catch(err) {
    return res.status(404).send(err.message);
  }
}

export async function deleteFormByIdController(req, res) {
  const { id } = req.params;
  try {
    const formMessage = await deleteFormByIdService(id);
    return res.status(200).send(formMessage);
  } catch(err) {
    return res.status(404).send(err.message);
  }
}
