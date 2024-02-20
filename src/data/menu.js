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
        path: 'https://portal.fabric-testbed.net/about/leadership',
        isExternalLink: true,
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
      {
        text: 'Testbeds',
        path: '/resources/testbeds',
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
    text: 'Get Involved',
    path: '/get-involved/funding-opportunities',
    submenu: [
      {
        text: 'Newsletter Signup',
        path: '/get-involved/newsletter-signup',
        isExternalLink: false,
      },
      {
        text: 'Funding Opportunities',
        path: 'https://portal.fabric-testbed.net/community/funding-opportunities',
        isExternalLink: true,
      },
    ],
  },
  {
    text: 'Events',
    path: 'https://learn.fabric-testbed.net/article-categories/events/',
    isExternalLink: true,
  },
  {
    text: 'Login/Signup',
    path: 'https://portal.fabric-testbed.net/',
  },
]
