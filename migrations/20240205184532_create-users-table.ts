import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  //Create in Database the table users
  return knex.schema.createTable("users", (table) => {
    table.uuid("userId").primary();
    table.string("name").notNullable();
    table.string("email").notNullable();
    table.text("password").notNullable();
    table.timestamp("createAt").defaultTo(knex.fn.now());
    table.timestamp("updateAt").nullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  //Delete the table users from Database
  return knex.schema.dropTable("users");
}
