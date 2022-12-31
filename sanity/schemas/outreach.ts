export default {
  name: 'outreach',
  type: 'document',
  title: 'Outreach',
  fields: [
    {
      name: 'body',
      type: 'array',
      of: [{type: 'block'}],
      title: 'Heading',
    },
    {
      name: 'ministries',
      type: 'array',
      of: [{type: 'ministry'}],
      title: 'Ministries',
    },
  ],
}
