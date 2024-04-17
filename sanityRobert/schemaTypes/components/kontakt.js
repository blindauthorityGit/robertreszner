export default {
  name: 'kontakt',
  type: 'document',
  title: 'kontakt',
  fields: [
    {
      title: 'Email',
      name: 'email',
      type: 'string',
    },
    {
      title: 'Phone',
      name: 'phone',
      type: 'string',
    },
    {
      title: 'Description',
      name: 'description',
      type: 'array',
      of: [{type: 'block'}],
    },
  ],
}
