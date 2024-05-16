export default {
  name: 'video',
  type: 'object',
  title: 'Video Link',
  fields: [
    {
      title: 'link',
      name: 'link',
      type: 'string',
    },
    {
      title: 'bottomLine DE',
      name: 'bottomLine',
      type: 'string',
    },
    {
      title: 'bottomLine EN',
      name: 'bottomLineEN',
      type: 'string',
    },
    {
      title: 'Video Top',
      name: 'videoTop',
      type: 'boolean',
      description: 'Set to true if this video should be at the top.',
      // validation: (Rule) => Rule.default(false),
    },
  ],
}
