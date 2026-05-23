import { PortfolioItem } from '../types/portfolio';

export const portfolioItems: PortfolioItem[] = [
  {
    id: 'street-patrol',
    title: 'Street Patrol',
    shortDescription: 'A comprehensive web application for managing street patrols with real-time tracking and analytics.',
    description: 'A comprehensive web application for managing street patrols, built with React and TypeScript. Features include real-time patrol tracking, detailed statistics, contact matrix reporting, and extensive data export capabilities.',
    primaryImage: 'https://portfolio-street-patrol.s3.us-east-1.amazonaws.com/street-patrol-app-landing-page.png',
    imageUrls: [
      'https://portfolio-street-patrol.s3.us-east-1.amazonaws.com/street-patrol-app-landing-page.png',
      'https://portfolio-street-patrol.s3.us-east-1.amazonaws.com/street-patrol-new-patrol.png',
      'https://portfolio-street-patrol.s3.us-east-1.amazonaws.com/street-patrol-patrol-history.png',
      'https://portfolio-street-patrol.s3.us-east-1.amazonaws.com/street-patrol-reports.png',
      'https://portfolio-street-patrol.s3.us-east-1.amazonaws.com/street-patrol-patrol-notes.png',
      'https://portfolio-street-patrol.s3.us-east-1.amazonaws.com/street-patrol-export-options.png'
    ],
    features: [
      'Real-time patrol management with active patrol tracking',
      'Comprehensive statistics and reporting system',
      'Monthly, quarterly, and annual report generation',
      'Contact matrix for demographic tracking',
      'Detailed notes system for each patrol',
      'Export functionality to CSV, HTML, and PDF formats',
      'Team management with leader and member tracking',
      'Police CAD number integration'
    ],
    tags: ['React', 'TypeScript', 'Supabase', 'Real-time', 'Data Analytics'],
    link: 'https://street-patrol.netlify.app/',
    githubUrl: 'https://github.com/philanderson/street-patrol',
    technicalDetails: {
      architecture: [
        'React for frontend UI components',
        'TypeScript for type-safe development',
        'Supabase for real-time database and authentication',
        'TailwindCSS for responsive styling',
        'React Router for client-side routing'
      ],
      technologies: [
        'React 18 with hooks for state management',
        'TypeScript for enhanced developer experience',
        'Supabase real-time subscriptions',
        'PDF.js for report generation',
        'Chart.js for statistical visualizations'
      ],
      challenges: [
        'Real-time synchronization of patrol data',
        'Complex statistical calculations and reporting',
        'Offline data persistence',
        'User authentication and authorization'
      ],
      solutions: [
        'Implemented Supabase real-time subscriptions for live updates',
        'Created a robust caching system for offline functionality',
        'Developed a comprehensive reporting engine',
        'Built a flexible authentication system with role-based access'
      ]
    }
  },
  {
    id: 'jesus-is-lord',
    title: 'Jesus Is Lord - Christian Clothing Store',
    shortDescription: 'A modern e-commerce platform offering Christian-themed clothing and accessories, built in collaboration with family.',
    description: 'Jesus Is Lord is a faith-focused clothing store that combines style with Christian values. This e-commerce platform offers a curated collection of Christian-themed clothing including t-shirts, hoodies, and accessories. Built using Wix\'s advanced e-commerce capabilities, the store provides a seamless shopping experience while spreading the message of faith.',
    primaryImage: 'https://philanderson888-public-image-s3-bucket.s3.eu-west-2.amazonaws.com/jesus-is-lord-home-page-01.png',
    imageUrls: [
      'https://philanderson888-public-image-s3-bucket.s3.eu-west-2.amazonaws.com/jesus-is-lord-home-page-01.png',
      'https://philanderson888-public-image-s3-bucket.s3.eu-west-2.amazonaws.com/jesus-is-lord-all-products.png',
      'https://philanderson888-public-image-s3-bucket.s3.eu-west-2.amazonaws.com/jesus-is-lord-all-womens.png',
      'https://philanderson888-public-image-s3-bucket.s3.eu-west-2.amazonaws.com/jesus-is-lord-product-page.png',
      'https://philanderson888-public-image-s3-bucket.s3.eu-west-2.amazonaws.com/jesus-is-lord-checkout.png'
    ],
    features: [
      'Full e-commerce functionality with secure checkout',
      'Curated collection of Christian-themed clothing',
      'Custom t-shirt and apparel designs',
      'Mobile-responsive design',
      'Integrated inventory management',
      'Secure payment processing',
      'Order tracking and management',
      'Customer account management'
    ],
    tags: ['E-commerce', 'Wix', 'Fashion', 'Christian', 'Family Business'],
    link: 'https://jesusislord.uk',
    technicalDetails: {
      architecture: [
        'Wix e-commerce platform',
        'Integrated payment processing',
        'Automated inventory management',
        'Mobile-first responsive design',
        'SEO optimization'
      ],
      technologies: [
        'Wix Store Editor',
        'Wix Payment Systems',
        'Custom Design Tools',
        'Analytics Integration',
        'Social Media Integration'
      ],
      challenges: [
        'Creating a user-friendly shopping experience',
        'Implementing secure payment processing',
        'Managing inventory across multiple product categories',
        'Ensuring mobile responsiveness',
        'Optimizing for search engines'
      ],
      solutions: [
        'Utilized Wix\'s advanced e-commerce features for seamless shopping',
        'Implemented secure payment gateways',
        'Created an efficient inventory management system',
        'Optimized design for all device sizes',
        'Integrated SEO best practices'
      ]
    }
  },
  {
    id: 'revival-church-mobile',
    title: 'Revival Church Mobile App',
    shortDescription: 'A modern, feature-rich mobile application for Revival Church, providing seamless access to live services, events, and church resources.',
    description: 'A comprehensive mobile application designed to enhance the digital experience for Revival Church members and visitors. The app offers live streaming of services, an interactive events calendar, detailed ministry information, and various engagement features to keep the church community connected.',
    primaryImage: 'https://philanderson888-public-image-s3-bucket.s3.eu-west-2.amazonaws.com/2025-04-rcce-mobile-app-home-page.png',
    imageUrls: [
      'https://philanderson888-public-image-s3-bucket.s3.eu-west-2.amazonaws.com/2025-04-rcce-mobile-app-home-page.png',
      'https://philanderson888-public-image-s3-bucket.s3.eu-west-2.amazonaws.com/2025-04-rcce-mobile-app-live-page.png',
      'https://philanderson888-public-image-s3-bucket.s3.eu-west-2.amazonaws.com/2025-04-rcce-mobile-app-events-page.png',
      'https://philanderson888-public-image-s3-bucket.s3.eu-west-2.amazonaws.com/2025-04-rcce-mobile-app-calendar-page.png'
    ],
    features: [
      'Live streaming of church services with chat functionality',
      'Interactive events calendar with reminders',
      'Ministry information and contact details',
      'Sermon archive with search and filtering',
      'Push notifications for important announcements',
      'Prayer request submission system',
      'Integrated giving platform',
      'Church news and updates feed',
      'Small group management and registration',
      'Digital bulletin and announcements'
    ],
    tags: ['React Native', 'TypeScript', 'Mobile App', 'Live Streaming', 'Church Tech'],
    link: 'https://rcce-mobile-app.netlify.app',
    technicalDetails: {
      architecture: [
        'React Native for cross-platform mobile development',
        'TypeScript for type-safe code',
        'Redux for state management',
        'WebSocket integration for live features',
        'Push notification system',
        'Offline-first architecture'
      ],
      technologies: [
        'React Native',
        'TypeScript',
        'Redux Toolkit',
        'WebSocket API',
        'Firebase for notifications',
        'AsyncStorage for offline data',
        'Video streaming integration'
      ],
      challenges: [
        'Implementing reliable live streaming',
        'Managing offline functionality',
        'Push notification delivery',
        'Cross-platform consistency',
        'Calendar integration complexity'
      ],
      solutions: [
        'Custom video player with adaptive streaming',
        'Robust offline data synchronization',
        'Efficient push notification system',
        'Platform-specific UI optimizations',
        'Seamless calendar integration with native APIs'
      ]
    }
  },
  {
    id: 'software-projects',
    title: 'Software Development Projects',
    description: 'A collection of modern web applications built with React, TypeScript, and other cutting-edge technologies. These projects demonstrate my expertise in creating efficient, scalable solutions.',
    tags: ['React', 'TypeScript', 'Node.js', 'Web Development'],
    githubUrl: 'https://github.com/philanderson888',
    features: [
      {
        title: 'Call-Me Contacts App',
        description: 'A smart contact management system that helps you maintain regular communication with your contacts. The app tracks contact frequency and reminds you when it\'s time to reach out to someone.',
        link: 'https://call-my-contacts.netlify.app',
        features: [
          'Track last contact date for each person',
          'Set custom contact frequency per person',
          'Mobile-friendly interface with direct calling capability',
          'Random contact selection for who to call next',
          'Sort contacts by last contacted date or alphabetically',
          'Mark contacts as contacted with a single click',
          'Automatic contact hiding until next due date'
        ],
        tags: ['React', 'TypeScript', 'Mobile Integration', 'Contact Management']
      }
    ]
  },
  {
    id: 'technical-writing',
    title: 'Technical Writing & Documentation',
    description: 'Comprehensive documentation and technical guides covering various programming concepts and best practices. These resources help other developers learn and grow in their journey.',
    tags: ['Technical Writing', 'Documentation', 'Programming Guides'],
    link: 'https://github.com/philanderson888'
  }
];

export const archivedItems: PortfolioItem[] = [
  {
    id: 'bridge-of-hope',
    title: 'Bridge of Hope - Missionary Communication System',
    shortDescription: 'A proof of concept messaging system connecting sponsors with missionaries and sponsored children through a secure, intermediary-based communication platform.',
    description: 'A demonstration application built to facilitate secure communication between sponsors and their sponsored children through mission centers. This system provides a structured, safe environment for message exchange while maintaining appropriate oversight and intermediary involvement.',
    primaryImage: 'https://philanderson888-public-image-s3-bucket.s3.eu-west-2.amazonaws.com/bridge-of-hope-01-sign-in.png',
    imageUrls: [
      'https://philanderson888-public-image-s3-bucket.s3.eu-west-2.amazonaws.com/bridge-of-hope-01-sign-in.png',
      'https://philanderson888-public-image-s3-bucket.s3.eu-west-2.amazonaws.com/bridge-of-hope-02-admin-dashboard.png',
      'https://philanderson888-public-image-s3-bucket.s3.eu-west-2.amazonaws.com/bridge-of-hope-03-approval-of-new-users.png',
      'https://philanderson888-public-image-s3-bucket.s3.eu-west-2.amazonaws.com/bridge-of-hope-04-mission-center.png',
      'https://philanderson888-public-image-s3-bucket.s3.eu-west-2.amazonaws.com/bridge-of-hope-05-communication.png'
    ],
    features: [
      'Mission center registration and management',
      'Multi-child registration system per mission center',
      'Secure messaging system between sponsors and children',
      'Missionary intermediary oversight',
      'User role management and authentication',
      'Administrative dashboard for user management',
      'New user approval workflow',
      'Detailed mission center profiles'
    ],
    tags: ['React', 'TypeScript', 'Supabase', 'Authentication', 'Messaging'],
    link: 'https://gospel-for-asia-messaging-system.netlify.app/',
    technicalDetails: {
      architecture: [
        'React with TypeScript for frontend development',
        'Supabase for backend and authentication',
        'Real-time messaging system',
        'Role-based access control',
        'Responsive design with Tailwind CSS'
      ],
      technologies: [
        'React 18',
        'TypeScript',
        'Supabase',
        'TailwindCSS',
        'React Router',
        'Real-time subscriptions'
      ],
      challenges: [
        'Implementing secure communication channels',
        'Managing complex user relationships',
        'Ensuring appropriate access controls',
        'Building an intuitive user approval system',
        'Creating a scalable messaging infrastructure'
      ],
      solutions: [
        'Developed a role-based messaging system',
        'Implemented strict access controls and user verification',
        'Created an efficient approval workflow',
        'Built a user-friendly interface for all user types',
        'Established secure communication protocols'
      ]
    },
    archived: true
  },
  {
    id: 'rcce-demo-app',
    title: 'RCCE Church Demo App',
    shortDescription: 'A web-based demonstration of a potential mobile app replacement for RCCE church, showcasing modern features and improved user experience.',
    description: 'A comprehensive web application demo created as a prototype for RCCE church\'s mobile app replacement. This demo showcases various features including live streaming, sermon archives, event calendar, and social media integration, all designed to enhance the church community\'s digital experience.',
    primaryImage: 'https://philanderson888-public-image-s3-bucket.s3.eu-west-2.amazonaws.com/rcce-demo-app-home-page.png',
    imageUrls: [
      'https://philanderson888-public-image-s3-bucket.s3.eu-west-2.amazonaws.com/rcce-demo-app-home-page.png',
      'https://philanderson888-public-image-s3-bucket.s3.eu-west-2.amazonaws.com/rcce-demo-app-live-stream-page.png',
      'https://philanderson888-public-image-s3-bucket.s3.eu-west-2.amazonaws.com/rcce-demo-app-home-sermons-page.png',
      'https://philanderson888-public-image-s3-bucket.s3.eu-west-2.amazonaws.com/rcce-demo-app-calendar.png',
      'https://philanderson888-public-image-s3-bucket.s3.eu-west-2.amazonaws.com/rcce-demo-app-connect-page.png'
    ],
    features: [
      'Interactive home page with quick access to key features',
      'Live streaming integration for church services',
      'Sermon archive with search and filtering capabilities',
      'Dynamic calendar for church events and activities',
      'Social media integration and community connection features',
      'Mobile-responsive design for all devices',
      'Modern user interface with intuitive navigation'
    ],
    tags: ['React', 'TypeScript', 'Church App', 'Live Streaming', 'Mobile-First'],
    link: 'https://rcce-web-app-demo.netlify.app',
    technicalDetails: {
      architecture: [
        'React with TypeScript for robust frontend development',
        'Mobile-first responsive design',
        'Component-based architecture',
        'Modern state management',
        'Progressive Web App capabilities'
      ],
      technologies: [
        'React 18',
        'TypeScript',
        'TailwindCSS',
        'Video streaming integration',
        'Calendar API integration'
      ],
      challenges: [
        'Creating a seamless mobile-first experience',
        'Implementing efficient video streaming',
        'Building an intuitive event calendar system',
        'Ensuring fast load times and performance',
        'Maintaining consistent design across all pages'
      ],
      solutions: [
        'Utilized modern React patterns for optimal performance',
        'Implemented responsive design principles',
        'Created modular components for maintainability',
        'Optimized media loading and caching',
        'Integrated progressive loading techniques'
      ]
    },
    archived: true
  },
  {
    id: 'legacy-project',
    title: 'Legacy Project',
    description: 'A placeholder for archived projects. This section contains older work that, while no longer actively maintained, demonstrates the evolution of my development journey.',
    tags: ['Archive', 'Legacy'],
    archived: true
  }
];