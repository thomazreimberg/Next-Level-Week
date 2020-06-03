import Knex from 'knex';

export async function up(knex: Knex) {
    return  knex.schema.createTable('tb_point_itens', table => {
        table.increments('id').primary();

        table.integer('point_id')
            .notNullable()
            .references('id').
            inTable('tb_points');
        table.integer('item_id')
            .notNullable()
            .references('id').
            inTable('tb_itens');
    })
}

export async function down(knex: Knex) {
    return knex.schema.dropTable('tb_point_itens');
}