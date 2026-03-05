import db from "#db/client";
import { createEmployee } from "#db/queries/employees";

await db.connect();
await seedEmployees();
await db.end();
console.log("🌱 Database seeded.");

async function seedEmployees() {
  await createEmployee({
    name: "Aramina",
    birthday: "2003-03-27",
    salary: 100000,
  });
  await createEmployee({
    name: "Cardamon",
    birthday: "1977-01-01",
    salary: 230000,
  });
  await createEmployee({
    name: "Sumika",
    birthday: "1968-04-29",
    salary: 200000,
  });
  await createEmployee({
    name: "Cymbeline",
    birthday: "2003-03-27",
    salary: 200000,
  });
  await createEmployee({
    name: "Theodore",
    birthday: "1990-10-12",
    salary: 150000,
  });
  await createEmployee({
    name: "Miette",
    birthday: "1999-02-14",
    salary: 180000,
  });
  await createEmployee({
    name: "Etienne",
    birthday: "2000-08-08",
    salary: 120000,
  });
  await createEmployee({
    name: "Cassius",
    birthday: "1950-09-23",
    salary: 450000,
  });
  await createEmployee({
    name: "Illiana",
    birthday: "1981-06-13",
    salary: 200000,
  });
  await createEmployee({
    name: "Pucca",
    birthday: "1961-12-31",
    salary: 90000,
  });
}
