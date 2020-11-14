exports.up = async function(knex) {
    return await knex.schema.createTable("blog",table=>{
        table.increments("id").primary();
        table.string("title",30).notNullable();
        table.string("story").notNullable();
        table.integer("users_id").references('id').inTable('users').unsigned();
        table.timestamp('created_at').defaultTo(knex.fn.now());
  
    })
};

exports.down = async function(knex) {
    return await knex.schema.dropTable("blog")
};