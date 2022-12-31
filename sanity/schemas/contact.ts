export default {
  name: 'contact',
  type: 'document',
  title: 'Contact',
  fields: [
    {
      name: 'officePhone',
      type: 'string',
      title: 'Office Phone',
    },
    {
      name: 'officeEmail',
      type: 'string',
      title: 'Office Email',
    },
    {
      name: 'officeHours',
      type: 'array',
      of: [{type: 'block'}],
      title: 'Office Hours',
    },
    {
      name: 'pastorHours',
      type: 'array',
      of: [{type: 'block'}],
      title: "Pastor's Hours",
    },
  ],
}
