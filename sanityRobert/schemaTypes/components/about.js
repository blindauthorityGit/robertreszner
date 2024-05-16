export default {
  name: 'about',
  type: 'document',
  title: 'About',
  fields: [
    // {
    //     title: "Titel",
    //     name: "title",
    //     type: "string",
    // },
    {
      title: 'Beschreibung DE',
      name: 'description',
      type: 'array',
      of: [{type: 'block'}],
    },
    {
      title: 'Beschreibung EN',
      name: 'descriptionEN',
      type: 'array',
      of: [{type: 'block'}],
    },
  ],
}
