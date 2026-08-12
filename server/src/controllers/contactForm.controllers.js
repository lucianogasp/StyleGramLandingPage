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
    return res.status(200).json(form);
  } catch(err) {
    return res.status(500).json({ 
      message: 'The request could not find the resources',
      statusCode: 500
     });
  }
}

export async function getFormByIdController(req, res) {
  const { id } = req.params;
  try {
    const row = await getFormByIdService(id);
    return res.status(200).json(row);
  } catch(err) {
    return res.status(err.statusCode ?? 500).json({ 
      message: err.message ?? 'Internal Server Error',
      statusCode: err.statusCode
    });
  }
}

export async function createFormController(req, res) {
  const newForm = req.body;
  try {
    const formMessage = await createFormService(newForm);
    return res.status(201).json(formMessage);
  } catch(err) {
    return res.status(err.statusCode ?? 500).json({ 
      message: err.message ?? 'Internal Server Error',
      statusCode: err.statusCode
     });
  }
}

export async function updateFormByIdController(req, res) {
  const { id } = req.params;
  const newForm = req.body;
  try {
    const formMessage = await updateFormByIdService(id, newForm);
    return res.status(201).json(formMessage);
  } catch(err) {
    return res.status(err.statusCode ?? 500).json({ 
      message: err.message ?? 'Internal Server Error',
      statusCode: err.statusCode
    });
  }
}

export async function deleteFormByIdController(req, res) {
  const { id } = req.params;
  try {
    const formMessage = await deleteFormByIdService(id);
    return res.status(200).json(formMessage);
  } catch(err) {
    return res.status(err.statusCode ?? 500).json({ 
      message: err.message ?? 'Internal Server Error',
      statusCode: err.statusCode
    });
  }
}
