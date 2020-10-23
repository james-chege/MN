import bookingController from "../controllers/searchController";

import express from "express";
import authenticate from "../middleware/authenticate";

const router = express.Router();

router.use(authenticate);

router.get(
    '/getSite',
    bookingController.getSite
);

router.get(
    '/getMncMcc',
    bookingController.getMncMcc
);

router.get(
    '/getMccCountry',
    bookingController.getMccCountry
);

export default router;
