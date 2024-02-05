import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  // Add the column pictureUrl in user's table
  await knex.schema.alterTable("users", (table) => {
    table.string("pictureUrl").nullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.table("user", (table) => {
    table.dropColumn("pictureUrl");
  });
}
