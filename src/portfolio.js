const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://rajshekhar26.github.io/cleanfolio',
  title: 'YA.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Yusra Ahmed',
  role: 'Fullstack Developer',
  description:
    "I'm a fullstack developer who can build anything, from the ground up. I have a deep understanding of both front-end and back-end development, and I'm always looking for new ways to use technology to solve real-world problems. ",
  resume: 'https://drive.google.com/file/d/1fJ0_jBD2_wkXe1-wWZHGH4rc29rRwJxY/view',
  social: {
    linkedin: 'https://www.linkedin.com/in/yusra-ahmed-14541b209/',
    github: 'https://github.com/yusra-bit',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Tindog',
    description:
      'TinDog is the perfect way to make sure your dog is always having fun and socializing.',
    stack: ['HTML', 'CSS', 'Bootstrap'],
    sourceCode: 'https://github.com/yusra-bit/TinDog',
    livePreview: 'https://yusra-bit.github.io/TinDog/',
  },
  {
    name: 'MovieLand',
    description:
      'MovieLand is a website built with React and an API that provides users with a comprehensive and user-friendly way to explore and discover new movies.',
    stack:  ['React', 'API'],
    sourceCode: 'https://github.com/yusra-bit/movieland',
    livePreview: 'https://moviessland.netlify.app/',
  },
  {
    name: 'BookList',
    description:
      'BookList is a CRUD application that allows you to create, read, update, and delete books in your collection.',
    stack: ['React', 'Node.js', 'MongoDB'],
    sourceCode: 'https://github.com/yusra-bit/booklist-mern',
 //   livePreview: 'https://github.com',
  },
  ,
  {
    name: 'Hotel Management',
    description:
      'A hotel management website is a web application that helps hotels manage their operations and bookings.',
    stack: ['PHP', 'MySQL', 'Bootstrap'],
    sourceCode: 'https://github.com/yusra-bit/hotel_managment_system',
    
  },
  ,
  {
    name: 'Peekabooks',
    description:
      ' Peekabooks is a well-designed website with a user-friendly interface, offering curated genres for effortless exploration of literary works.',
    stack: ['Canva', 'Figma', 'Webflow'],
    sourceCode: 'https://bookstore-site-85f07c.webflow.io/',
    
  },
   ,
  {
    name: 'Vision Creative ',
    description:
      ' ',
    stack: ['Canva', 'Figma', 'Webflow'],
    sourceCode: 'https://yusras-fabulous-site.webflow.io/',
    
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'Java',
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Node.js',
  'Express',
  'MongoDB',
  'PHP',
  'MySQL',
  'Tailwindcss',
  'Git',
  'Figma',
  'Canva',
  'Webflow',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'yusra.abdi999@mail.com',
}

export { header, about, projects, skills, contact }
