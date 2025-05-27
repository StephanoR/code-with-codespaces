function skillsMember(){
  return {
    name: 'skills',
    description: 'Manage skills for a member',
    options: [
      {
        name: 'add',
        description: 'Add a skill to the member',
        args: {
          name: 'skill',
          description: 'The skill to add',
          required: true,
        },
      },
      {
        name: 'remove',
        description: 'Remove a skill from the member',
        args: {
          name: 'skill',
          description: 'The skill to remove',
          required: true,
        },
      },
      {
        name: 'list',
        description: 'List all skills of the member',
      },
    ],
  };
}