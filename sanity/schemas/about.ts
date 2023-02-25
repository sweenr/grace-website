export default {
  name: 'about',
  type: 'document',
  title: 'About Page',
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
      name: 'missionTitle',
      type: 'string',
      title: 'Mission Title',
    },
    {
      name: 'mission',
      type: 'array',
      of: [{type: 'block'}],
      title: 'Mission Text',
    },
    {
      name: 'missionImage',
      type: 'imageWithAlt',
      title: 'Mission Image',
    },
    {
      name: 'messageTitle',
      type: 'string',
      title: 'Message Title',
    },
    {
      name: 'message',
      type: 'array',
      of: [{type: 'block'}],
      title: 'Message Text',
    },
    {
      name: 'messageImage',
      type: 'imageWithAlt',
      title: 'Message Image',
    },
    {
      name: 'believeTitle',
      type: 'string',
      title: 'We Believe Title',
    },
    {
      name: 'believe',
      type: 'array',
      of: [{type: 'block'}],
      title: 'We Believe Text',
    },
    {
      name: 'believeImage',
      type: 'imageWithAlt',
      title: 'Believe Image',
    },
  ],
}
