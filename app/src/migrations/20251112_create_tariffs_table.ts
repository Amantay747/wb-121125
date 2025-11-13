export async function up(knex) {
  await knex.schema.createTable("tariffs", (table) => {
    table.increments("id").primary();
    table.integer("box_id").notNullable();
    table.decimal("coef").notNullable();
    table.string("day").notNullable();
    table.jsonb("raw");
    table.timestamps(true, true);
    table.unique(["box_id", "day"]);
  });
}

export async function down(knex) {
  await knex.schema.dropTableIfExists("tariffs");
}
