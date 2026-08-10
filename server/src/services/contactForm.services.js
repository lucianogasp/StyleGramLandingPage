// import modules
import { getAllFormRepository } from '#repositories/contactForm.repositories.js';
import { createFormRepository } from '#repositories/contactForm.repositories.js';

export async function getAllFormService() {
  const form = await getAllFormRepository();
  return form;
}

export async function createFormService(newForm) {
  const formMessage = await createFormRepository(newForm);
  return formMessage;
}
