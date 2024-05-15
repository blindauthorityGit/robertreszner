export default {
  name: 'impressum',
  type: 'document',
  title: 'impressum',
  fields: [
    {
      title: 'Description DE',
      name: 'description',
      type: 'array',
      of: [{type: 'block'}],
    },
    {
      title: 'Description EN',
      name: 'descriptionEN',
      type: 'array',
      of: [{type: 'block'}],
    },
  ],
}
