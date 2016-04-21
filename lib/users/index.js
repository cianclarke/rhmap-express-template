'use strict';

var _ = require('lodash');

/**
 * Some dummy users for the example sake.
 * Naturally we'd use a db in the real world.
 */
var users = [{
  id: 0,
  firstname: 'evan',
  lastname: 'shortiss',
  age: 25
}, {
  id: 1,
  firstname: 'red',
  lastname: 'hat',
  age: 23
}];

/**
 * Get a user by a specific property
 * @param  {Function} callback
 */
exports.getAll = function (callback) {
  return callback(null,users);
};

/**
 * Get a user by a specific property
 * @param  {String}   key
 * @param  {Mixed}    val
 * @param  {Function} callback
 */
exports.getBy = function (key, val, callback) {  
  callback(
    null,
    _.find(users, function (u) {
      return u[key] === val;
    })
  );
};

/**
 * Updates a user with the given data
 * @param  {String}   id
 * @param  {Object}   data
 * @param  {Function} callback
 */
exports.updateById = function (id, data, callback) {
  exports.getBy('id', parseInt(id, 10), function (err, user) {
    if (err) {
      callback(err, null);
    } else {
      // Update user object and return it
      callback(null, _.assign(user, data));
    }
  });
};
