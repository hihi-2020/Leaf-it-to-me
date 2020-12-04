
exports.seed = function(knex) {
  return knex('users_plants').del()
    .then(function () {
      return knex('users_plants').insert([
        {
          id: 1, 
          user_id: 1, 
          plant_id: 1, 
          name: 'test name', 
          notes: 'test notes', 
          img: ''
        },
        {
          id: 2, 
          user_id: null, 
          plant_id: null, 
          name: '', 
          notes: '', 
          img: ''
        },
        {
          id: 3, 
          user_id: null, 
          plant_id: null, 
          name: '', 
          notes: '', 
          img: ''
        }
      ]);
    });
};
