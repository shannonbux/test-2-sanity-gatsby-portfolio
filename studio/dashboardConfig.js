export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '5cf6eb6915f204018068bfc6',
                  title: 'Sanity Studio',
                  name: 'test-2-sanity-gatsby-portfolio-studio',
                  apiId: 'fdbcf2ef-f031-456a-88b7-739dfda3e021'
                },
                {
                  buildHookId: '5cf6eb69d783730184fedb51',
                  title: 'Portfolio Website',
                  name: 'test-2-sanity-gatsby-portfolio',
                  apiId: 'e3b17b15-f2c5-4a7b-9290-7f71ed494c5a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/shannonbux/test-2-sanity-gatsby-portfolio',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://test-2-sanity-gatsby-portfolio.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['project']},
      layout: {width: 'medium'}
    }
  ]
}
