const connection = require('./connection')


// READ - Get All Plants
function getPlants(db = connection) {
  return db('plants').select()
}

// READ - Get Single Plant
function getPlant(id, db = connection){
  return db('plants').select().where('id', id).first()
}
// kind of like a find, run thru all of the plants and find the plant whose id matches the id that has been passed in 


//CREATE (Single Resource)
function createPlant(newPlant, db = connection){
  return db('plants').insert(newPlant)
  // here we're going into the plants db, inserting & automatically returning an array of ids for whatever thing(s) has been inserted, but we just want the id of the task we've added, hence the .then
  .then(ids => ids[0])
}

module.exports = {
  getPlants,
  getPlant,
  createPlant
}