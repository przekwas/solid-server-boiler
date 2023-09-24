import { Router } from 'express'

const router = Router()

// Routes
import  { userRoutes } from "../routes/users.routes";
import { greenhouseRoutes } from './greenhouse.routes';

/** GET api/status */
router.get('/status', (req, res) => res.send('OK'))

/** Public Routes */
router.use('/users', userRoutes)
router.use('/greenhouse', greenhouseRoutes)

export const appRoutes = router;