export default {
  name: 'stephenministry',
  type: 'document',
  title: 'Stephen Ministry (Archived)',
  fields: [
    {
      name: 'aboutTitle',
      type: 'string',
      title: 'About Title',
    },
    {
      name: 'about',
      type: 'array',
      of: [{type: 'block'}],
      title: 'About Text',
    },
    {
      name: 'contactTitle',
      type: 'string',
      title: 'Contact Title',
    },
    {
      name: 'contact',
      type: 'array',
      of: [{type: 'block'}],
      title: 'Contact Text',
    },
  ],
}
