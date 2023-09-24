import { Router } from "express";
import { greenHouseHireAppliation } from "../controllers/greenhouse.controller";

const router = Router();

// router.get('/applications', (req, res) => {
//   // greenhouse applications
//   // res.send('OK')
// })

router.post('/applications/:id/hire', greenHouseHireAppliation);

export const greenhouseRoutes = router;