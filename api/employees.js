import express from "express";
const router = express.Router();
export default router;

import {
  createEmployee,
  getEmployee,
  getEmployees,
  updateEmployee,
  deleteEmployee,
} from "#db/queries/employees";

router.get("/", async (req, res) => {
  const employees = await getEmployees();
  res.send(employees);
});

router.post("/", async (req, res) => {
  if (!req.body) {
    return res.status(400).send("Request body is required");
  }
  const { name, birthday, salary } = req.body;
  if (!name || !birthday || !salary) {
    return res.status(400).send("Missing required fields");
  }
  const createdEmployee = await createEmployee({ name, birthday, salary });
  res.status(201).send(createdEmployee);
});

router.get("/:id", async (req, res) => {
  const id = req.params.id;
  const employee = await getEmployee(id);
  if (!employee) {
    return res.status(404).send("Employee not found");
  }
  res.send(employee);
});

router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  const deletedEmployee = await deleteEmployee(id);
  if (!deletedEmployee) {
    return res.status(404).send("Employee not found");
  }
  res.sendStatus(204);
});

router.put("/:id", async (req, res) => {
  if (!req.body) {
    return res.status(400).send("Request body is required");
  }
  const { name, birthday, salary } = req.body;
  if (!name || !birthday || !salary) {
    return res.status(400).send("Missing required fields");
  }
  const id = req.params.id;
  const updatedEmployee = await updateEmployee({ id, name, birthday, salary });
  if (!updatedEmployee) {
    return res.status(404).send("Employee not found");
  }
  res.send(updatedEmployee);
});
