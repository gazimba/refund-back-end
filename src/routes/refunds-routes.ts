import { Router } from "express";

import { RefundsController } from "@/controllers/refunds-controller";
import { verifyUserAuthentication } from "@/middlewares/verify-user-authorization";

const refundsRoutes = Router();
const refundsController = new RefundsController();

refundsRoutes.post(
    "/",
    verifyUserAuthentication(["employee"]),
    refundsController.create
)

export { refundsRoutes }