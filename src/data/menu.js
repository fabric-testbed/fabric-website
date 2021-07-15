module.exports = [
    {
        text: 'About',
        path: '/about',
        submenu: [
            {
                text: 'Overview',
                path: '/about/overview',
            },
            {
                text: 'FAB',
                path: '/about/fab',
            },
            {
                text: 'SAC',
                path: '/about/scientific-advisory-committee',
            },
            {
              text: 'Leadership',
              path: '/about/leadership',
            },
        ],
    },
    {
        text: 'Resources',
        path: '/resources',
        submenu: [
            {
              text: 'Design Documents',
              path: '/resources/design-documents',
            },
            {
              text: 'Publications',
              path: '/resources/publications',
            },
            {
                text: 'Brochures',
                path: '/resources/brochures',
            },
            {
                text: 'Documentation',
                path: 'https://learn.fabric-testbed.net/',
            },
            {
                text: 'Workshop Reports',
                path: '/resources/workshop-reports',
            },
            {
                text: 'Frequently Asked Questions',
                path: '/resources/faqs',
            },
        ],
    },
    {
        text: 'News',
        path: '/news',
    },
    {
        text: 'Events',
        path: '/events',
    },
    {
        text: 'Get Involved',
        path: '/get-involved',
    },
    {
        text: 'Portal',
        path: 'https://portal.fabric-testbed.net/',
        isDisctinct: true,
    },
]