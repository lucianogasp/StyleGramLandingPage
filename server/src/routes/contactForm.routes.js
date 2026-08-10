// import modules
import { Router } from 'express';
import { 
  getAllFormController, 
  getFormByIdController, 
  createFormController, 
  updateFormByIdController, 
  deleteFormByIdController 
} from '#controllers/contactForm.controllers.js';

const router = Router();

router.get('/test', (req, res) => {
  res.send({ test: 'testing...' });
});

router.get('/forms', getAllFormController);
router.get('/forms/:id', getFormByIdController);
router.post('/forms', createFormController);
router.patch('/forms/:id', updateFormByIdController);
router.delete('/forms/:id', deleteFormByIdController);

export default router;
