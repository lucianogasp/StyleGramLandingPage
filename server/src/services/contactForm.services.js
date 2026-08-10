// import modules
import { 
  getAllFormRepository, 
  getFormByIdRepository, 
  createFormRepository, 
  updateFormByIdRepository, 
  deleteFormByIdRepository 
} from '#repositories/contactForm.repositories.js';

export async function getAllFormService() {
  const form = await getAllFormRepository();
  return form;
}

export async function getFormByIdService(id) {
  const row = await getFormByIdRepository(id);
  if(!row) throw new Error('Invalid form id, form does not exist');
  return row;
}

export async function createFormService(newForm) {
  const formMessage = await createFormRepository(newForm);
  return formMessage;
}

export async function updateFormByIdService(id, newForm) {
  const row = await getFormByIdRepository(id);
  if(!row) throw new Error('Invalid form id, form dos not exist');
  const formMessage = await updateFormByIdRepository(id, newForm);
  return formMessage;
}

export async function deleteFormByIdService(id) {
  const row = await getFormByIdRepository(id);
  if(!row) throw new Error('Invalid form id, form dos not exist');
  const formMessage = await deleteFormByIdRepository(id);
  return formMessage;
}
