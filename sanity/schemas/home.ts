export default {
  name: 'home',
  type: 'document',
  title: 'Home Page',
  fields: [
    {
      name: 'heroImage',
      type: 'imageWithAlt',
      title: 'Hero Image',
    },
    {
      name: 'about',
      type: 'array',
      of: [{type: 'block'}],
      title: 'About Text',
    },
    {
      name: 'elcaLogo',
      type: 'imageWithAlt',
      title: 'ELCA Logo',
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
