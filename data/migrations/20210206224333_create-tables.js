
exports.up = function(knex) {
  return knex.schema.createTable('projects', t => {
      t.increments('project_id')
      t.string('project_name', 30).notNullable()
      t.string('project_description', 128)
      t.boolean('project_completed').notNullable()
  })
  .createTable('resources', t => {
      t.increments('resource_id')
      t.string('resource_name', 30).notNullable().unique()
      t.string('resource_description', 128)
  })
  // A resource assignment connects a resource and a project, and is stored in a project_resources table. You decide what columns to use.
  .createTable('tasks', t => {
      t.increments('task_id')
      t.string('tasK_description').notNullable()
      t.string('task_notes')
      t.boolean('task_completed').notNullable()
      t.integer('project_id').unsigned().notNullable().references('project_id').inTable('projects')
    
})
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('tasks')
  .dropTableIfExists('project_resources')
  .dropTableIfExists('resources')
  .dropTableIfExists('projects')
};
