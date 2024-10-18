import { Router } from 'express';
import { IdeaController  } from '../controllers/IdeaController';
import { ErrorHandler } from '../middlewares/ErrorHandler';

const ideaController = new IdeaController();
const router = Router();

router.post('/', ErrorHandler.catchErrors(ideaController.saveIdea));
router.get('/', ErrorHandler.catchErrors(ideaController.getIdeas));
router.post('/reset', ErrorHandler.catchErrors(ideaController.resetIdeas));

export default router;