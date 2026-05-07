import config from '~/config.json';

export const navLinks = [
  {
    label: 'Projects',
    pathname: '/#project-1',
  },
  {
    label: 'Details',
    pathname: '/#details',
  },
  // {
  //   label: 'Articles',
  //   pathname: '/articles',
  // },
  {
    label: 'Contact',
    pathname: '/contact',
  },
];

export const socialLinks = [
  // {
  //   label: 'Bluesky',
  //   url: `https://bsky.app/profile/${config.bluesky}`,
  //   icon: 'bluesky',
  // },
  // {
  //   label: 'Figma',
  //   url: `https://www.figma.com/${config.figma}`,
  //   icon: 'figma',
  // },
  {
    label: 'Github',
    url: `https://github.com/${config.github}`,
    icon: 'github',
  },
  {
    label: 'Whatsapp',
    url: `https://wa.me/${config.whatsapp}`,
    icon: 'whatsapp'
  },
  // {
  //   label: 'Behance',
  //   url: `https://www.behance.net/${config.behance}`,
  //   icon: 'behance',
  // },
  // {
  //   label: 'Linkedin',
  //   url: `https://www.linkedin.com/in/${config.linkedin}`,
  //   icon: 'linkedin',
  // },
];