export default {
  name: 'home',
  type: 'document',
  title: 'Home Page',
  fields: [
    {
      name: 'about',
      type: 'array',
      of: [{type: 'block'}],
      title: 'About Text',
    },
    {
      name: 'newsHeadline',
      type: 'string',
      title: 'News Headline',
    },
    {
      name: 'newsBody',
      type: 'array',
      of: [{type: 'block'}],
      title: 'News Body',
    },
    {
      name: 'worshipTimes',
      type: 'array',
      of: [{type: 'worshipTime'}],
      title: 'Worship Times',
    },
  ],
}
