import {defineField, defineType} from 'sanity'

export const skills = defineType({
  name: 'skills',
  title: 'Skills',
  type: 'document',
  fields: [
    defineField({
      name: 'skillsList',
      title: 'Skill List',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'name',
              title: 'Skill Name',
              type: 'string',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'iconClass',
              title: 'Icon Class Name',
              type: 'string',
              validation: (rule) => rule.required(),
            }),
          ],
        },
      ],
    }),
  ],
})
