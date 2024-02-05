import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("questions", (table) => {
    table.uuid("questionId").primary();
    table.uuid("userId").notNullable().references("userId").inTable("users");
    table.string("question").notNullable();
    table.timestamp("createAt").defaultTo(knex.fn.now());
    table.timestamp("updateAt").nullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable("questions");
}
