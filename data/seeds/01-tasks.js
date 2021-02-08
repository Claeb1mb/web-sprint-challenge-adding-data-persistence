
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {"task_id":1,"task_description":"baz","task_notes":null,"task_completed":false,"project_id":1}
      ]);
    });
};
