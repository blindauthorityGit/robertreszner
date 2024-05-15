export default {
  name: 'datenschutz',
  type: 'document',
  title: 'datenschutz',
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
