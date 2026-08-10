// import modules
import { getAllFormRepository } from '#repositories/contactForm.repositories.js';
import { getFormByIdRepository } from '#repositories/contactForm.repositories.js';
import { createFormRepository } from '#repositories/contactForm.repositories.js';
import { deleteFormByIdRepository } from '#repositories/contactForm.repositories.js';

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

export async function deleteFormByIdService(id) {
  const row = await getFormByIdRepository(id);
  if(!row) throw new Error('Invalid form id, form dos not exist');
  const formMessage = await deleteFormByIdRepository(id);
  return formMessage;
}
