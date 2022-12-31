export default {
  name: 'sermon',
  type: 'document',
  title: 'Sermon',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'name',
        slugify: (input: string) => input.toLowerCase().replace(/\s+/g, '-').slice(0, 200),
      },
    },
    {
      name: 'publishDate',
      type: 'date',
      title: 'Publish Date',
    },
    {
      name: 'videoUrl',
      type: 'string',
      title: 'YouTube URL',
      description: "Sermon link URL, should look like 'https://youtu.be/somestringid?t=1234'",
    },
    {
      name: 'body',
      type: 'array',
      of: [{type: 'block'}],
      title: 'Body',
    },
  ],
}
