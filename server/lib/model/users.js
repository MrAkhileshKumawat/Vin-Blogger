const { Model } = require('objection');
const knex = require('../config/knex')
Model.knex(knex)


class User extends Model{
  static get tableName() {
    return 'users';
  }
  static get jsonSchema() {
    return {
      type: 'object',
      required: ['email','name','password','username'],
      properties: {
        id: { type: 'integer' },
        name: { type: 'string',minLegnth:2,maxLength:20 },
        email: { type: 'string' },
        username:{type:'string',minLegnth:2,maxLength:30},
        password:{type:'text'},
        profile_picture: { type: 'string' },
      }
    };
  }
}



module.exports = User;