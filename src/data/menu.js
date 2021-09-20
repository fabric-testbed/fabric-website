module.exports = [
    {
        text: 'About',
        path: '/about',
        submenu: [
            {
                text: 'Overview',
                path: '/about/overview',
                isExternalLink: false,
            },
            {
                text: 'FAB',
                path: '/about/fab',
                isExternalLink: false,
            },
            {
                text: 'SAC',
                path: '/about/scientific-advisory-committee',
                isExternalLink: false,
            },
            {
                text: 'Leadership',
                path: '/about/leadership',
                isExternalLink: false,
            },
        ],
    },
    {
        text: 'Resources',
        path: '/resources',
        submenu: [
            {
              text: 'Knowledge Base',
              path: 'https://learn.fabric-testbed.net/',
              isExternalLink: true,
            },
            {
              text: 'Publications',
              path: '/resources/publications',
              isExternalLink: false,
            },
            {
              text: 'Brochures',
              path: '/resources/brochures',
              isExternalLink: false,
            },
        ],
    },
    {
        text: 'News',
        path: '/news',
        isExternalLink: false,
    },
    {
        text: 'Events',
        path: '/events',
        isExternalLink: false,
    },
    {
        text: 'Get Involved',
        path: '/get-involved/funding-opportunities',
        submenu: [
          {
              text: 'Newsletter Signup',
              path: '/get-involved/newsletter-signup',
              isExternalLink: false,
          },
          {
              text: 'Beta Testers Request',
              path: '/get-involved/beta-testers-request',
              isExternalLink: false,
          },
          {
              text: 'Funding Opportunities',
              path: '/get-involved/funding-opportunities',
              isExternalLink: false,
          },
      ],
    },
    {
        text: 'Portal',
        path: 'https://portal.fabric-testbed.net/',
        isExternalLink: true,
    },
]