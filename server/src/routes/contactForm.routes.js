// import modules
import { Router } from 'express';
import { getAllFormController } from '#controllers/contactForm.controllers.js';
import { createFormController } from '#controllers/contactForm.controllers.js';

const router = Router();

router.get('/test', (req, res) => {
  res.send({ test: 'testing...' });
});

router.get('/', getAllFormController);
router.post('/posts', createFormController);

export default router;
