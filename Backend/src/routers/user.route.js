
import { express } from 'express';
import { register } from '../controllers/user.controllers';

const router = express.Router();

router.post("/register",register)