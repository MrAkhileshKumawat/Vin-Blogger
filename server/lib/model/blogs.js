const { Model } = require('objection');
const knex = require('../config/knex')
Model.knex(knex)


class Blog extends Model{
  static get tableName() {
    return 'blog';
  }
  static get jsonSchema() {
    return {
      type: 'object',
      required: ['title','article'],
      properties: {
        id: { type: 'integer' },
        title:{type:'string',minLength:1},
        story:{type:'string',minLength:1}
      }
    };
  }

  static get relationMappings() {
    const Users = require('./users')
    return {
        users: {
            relation: Model.BelongsToOneRelation,
            modelClass: Users,
            join: {
                from: 'blog.users_id',
                to: 'users.id'
            }
        }
    }
}
}




module.exports = Blog;