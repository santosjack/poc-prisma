import pg from "pg";

const { Pool } = pg;

const connectionDB = new Pool({
  host: "localhost",
  port: "5432",
  user: "postgres",
  password: "126245",
  database: "contacts"
});


export default connectionDB;