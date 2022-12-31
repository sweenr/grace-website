export const deskStructure = (S) =>
  S.list()
    .title('Pages')
    .items([
      S.listItem().title('Home Page').child(S.editor().schemaType('home').documentId('home')),
      S.listItem().title('About Page').child(S.editor().schemaType('about').documentId('about')),
      S.listItem()
        .title('Newsletter')
        .child(S.editor().schemaType('newsletter').documentId('newsletter')),
      S.listItem().title('Contact').child(S.editor().schemaType('contact').documentId('contact')),
      S.listItem()
        .title('Outreach')
        .child(S.editor().schemaType('outreach').documentId('outreach')),
      S.listItem().title('Life at Grace').child(S.editor().schemaType('life').documentId('life')),
      S.listItem()
        .title('Stephen Ministry (Archived)')
        .child(S.editor().schemaType('stephenministry').documentId('stephenministry')),
      // Add a visual divider (optional)
      S.divider(),
      // List out the rest of the document types, but filter out the config type
      ...S.documentTypeListItems().filter(
        (listItem) =>
          ![
            'home',
            'about',
            'stephenministry',
            'newsletter',
            'contact',
            'outreach',
            'life',
          ].includes(listItem.getId())
      ),
    ])
