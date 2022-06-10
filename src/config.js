module.exports = {
  siteTitle: 'Ketan Badhe | Cloud Computing | Tech blogger',
  siteDescription:
    'Ketan Badhe is a cloud computing student who loves to write technical blogs',
  siteKeywords:
    'Ketan Badhe, Ketan, Badhe, ketanmb69, cloud, computing, blog, stock, portfolio, web application, python, amdocs, mumbai, dublin, shell, kubernetes',
  siteUrl: 'https://ketanmb69.github.io/',
  siteLanguage: 'en_US',
  googleAnalyticsID: 'UA-45666519-2',
  googleVerification: '',
  name: 'Ketan Badhe',
  location: 'Dublin, Ireland',
  email: 'badhe.ketan@gmail.com',
  github: 'https://github.com/ketanmb69/',
  twitterHandle: '',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/ketanmb69/',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/ketanbadhe/',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/theketanbadhe/',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Projects',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
