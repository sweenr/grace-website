export default {
  name: 'life',
  type: 'document',
  title: 'Life at Grace',
  fields: [
    {
      name: 'body',
      type: 'array',
      of: [{type: 'block'}],
      title: 'Description',
    },
    {
      name: 'gallery',
      type: 'gallery',
      title: 'Images',
    },
  ],
}
