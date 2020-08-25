export default {
    name: 'team',
    type: 'document',
    title: 'team',
    fields: [
      {
        name: 'name',
        type: 'string',
        title: 'Name'
      },
      {
        name: 'slug',
        type: 'slug',
        title: 'Slug',
        options: {
          source: 'name',
          maxLength: 96
        }
      },
      {
        name: 'role',
        type: 'string',
        title: 'Role'
      }, 
      {
        name: 'branch',
        type: 'string',
        title: 'Branch'
      },
      {
        name: 'image',
        type: 'mainImage',
        title: 'Image'
      }
    ],
    preview: {
      select: {
        title: 'name',
        subtitle: 'slug.current',
        media: 'image'
      }
    }
  }
  