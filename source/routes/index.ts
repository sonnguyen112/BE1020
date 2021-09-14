import express from "express"
const router = express.Router()
import {indexController} from "../controllers/indexController"

router.use("/timestamp", indexController.index)
router.use("/registrations", indexController.registrations)

export = router
