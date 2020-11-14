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
      required: ['title','story'],
      properties: {
        id: { type: 'integer' },
        title:{type:'string',minLength:1},
        story:{type:'string',minLength:1}
      }
    };
  }
}

module.exports = Blog;