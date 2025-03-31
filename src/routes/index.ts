import { Router } from "express";

import { usersRoutes } from "./users-routes";
import { sessionsRoutes } from "./sessions-routes";
import { refundsRoutes } from "./refunds-routes";

import { ensureAutheticated } from "@/middlewares/ensure-authenticated";

const routes = Router()

//public
routes.use("/users", usersRoutes)
routes.use("/sessions", sessionsRoutes)

//private
routes.use(ensureAutheticated)
routes.use("/refunds", refundsRoutes)

export { routes }