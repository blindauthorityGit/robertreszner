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
