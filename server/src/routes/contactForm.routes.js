// import modules
import { Router } from 'express';

const router = Router();

router.get('/test', (req, res) => {
  res.send({ test: 'testing...' });
});

export default router;
