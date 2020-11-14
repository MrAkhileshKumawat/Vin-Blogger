exports.up = async function(knex) {
    return await knex.schema.createTable("users",table=>{
        table.increments("id").primary();
        table.string("google_id").notNullable().defaultTo("");
        table.string("name").notNullable();
        table.string("email",30).unique().notNullable(),
        table.string("username",30).unique().notNullable(),
        table.string("provider").notNullable().defaultTo(""),
        table.text("password").notNullable().defaultTo(""),
        table.string("profile_picture").notNullable().defaultTo("https://www.kindpng.com/picc/m/21-214439_free-high-quality-person-icon-default-profile-picture.png");
    })
};

exports.down = async function(knex) {
    return await knex.schema.dropTable("users")
};