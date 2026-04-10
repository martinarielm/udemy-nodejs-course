import express from "express";
import {
  createPerson,
  deletePerson,
  getPeople,
  updatePerson,
} from "../controllers/people.js";

const router = express.Router();

router.get("/", getPeople);
router.post("/", createPerson);
router.put("/:id", updatePerson);
router.delete("/:id", deletePerson);

export default router;
