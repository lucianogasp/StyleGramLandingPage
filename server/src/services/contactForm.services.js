// import modules
import { InvalidFormIdError, ConflictFormEmailError, ConflictFormWhatsappNumberError } from '#errors/myErrors/index.js';
import { 
  getAllFormRepository, 
  getFormByIdRepository, 
  createFormRepository, 
  updateFormByIdRepository, 
  deleteFormByIdRepository, 
  findFormByEmailRepository,
  findFormByWhatsappNumberRepository
} from '#repositories/contactForm.repositories.js';

export async function getAllFormService() {
  const form = await getAllFormRepository();
  return form;
}

export async function getFormByIdService(id) {
  const row = await getFormByIdRepository(id);
  if(!row) throw new InvalidFormIdError('Invalid Form id, Form does not exist');
  return row;
}

export async function createFormService(newForm) {
  const {whatsapp_number, email } = newForm;

  const formByEmail = await findFormByEmailRepository(email);
  if(formByEmail) throw new ConflictFormEmailError('Email Form already exists');

  const formByWhatappNumber = await findFormByWhatsappNumberRepository(whatsapp_number);
  if (formByWhatappNumber) throw new ConflictFormWhatsappNumberError('Whatsapp Number Form already exists');

  const formMessage = await createFormRepository(newForm);
  return formMessage;
}

export async function updateFormByIdService(id, newForm) {
  const row = await getFormByIdRepository(id);
  if(!row) throw new InvalidFormIdError('Invalid Form id, Form does not exist');
  const formMessage = await updateFormByIdRepository(id, newForm);
  return formMessage;
}

export async function deleteFormByIdService(id) {
  const row = await getFormByIdRepository(id);
  if(!row) throw new InvalidFormIdError('Invalid Form id, Form does not exist');
  const formMessage = await deleteFormByIdRepository(id);
  return formMessage;
}
