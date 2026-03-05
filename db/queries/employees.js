import db from "#db/client";

/** @returns the employee created according to the provided details */
export async function createEmployee({ name, birthday, salary }) {
  const text = `INSERT INTO employees (name, birthday, salary) VALUES ($1, $2, $3) RETURNING *`;
  const values = [name, birthday, salary];
  const { rows: employees } = await db.query(text, values);
  return employees[0];
}

// === Part 2 ===

/** @returns all employees */
export async function getEmployees() {
  const text = `SELECT * FROM employees`;
  const { rows: employees } = await db.query(text);
  return employees;
}

/**
 * @returns the employee with the given id
 * @returns undefined if employee with the given id does not exist
 */
export async function getEmployee(id) {
  const text = `SELECT * FROM employees WHERE id = $1`;
  const values = [id];
  const { rows: employees } = await db.query(text, values);
  return employees[0];
}

/**
 * @returns the updated employee with the given id
 * @returns undefined if employee with the given id does not exist
 */
export async function updateEmployee({ id, name, birthday, salary }) {
  const text = `UPDATE employees SET name = $1, birthday = $2, salary = $3 WHERE id = $4 RETURNING *`;
  const values = [name, birthday, salary, id];
  const { rows: employees } = await db.query(text, values);
  return employees[0];
}

/**
 * @returns the deleted employee with the given id
 * @returns undefined if employee with the given id does not exist
 */
export async function deleteEmployee(id) {
  const text = `DELETE FROM employees WHERE id = $1 RETURNING *`;
  const values = [id];
  const { rows: employees } = await db.query(text, values);
  return employees[0];
}
