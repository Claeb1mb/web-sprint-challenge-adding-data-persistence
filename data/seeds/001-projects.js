
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {"project_id":1,"project_name":"bar","project_description":null,"project_completed":false}
      ]);
    });
};
