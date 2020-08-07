export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f2cf94850193793af93f69d',
                  title: 'Sanity Studio',
                  name: 'astronomy-club-of-vvce-studio',
                  apiId: 'a6807ceb-141b-4c78-b561-46f00cc9e597'
                },
                {
                  buildHookId: '5f2cf948501937c8b393f2b3',
                  title: 'Blog Website',
                  name: 'astronomy-club-of-vvce',
                  apiId: 'fc9ad427-c60c-436a-bc05-de3ebfeb6395'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/hussamkhatib/Astronomy-club-of-vvce',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://astronomy-club-of-vvce.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
