export interface Employee {
  id: string
  name: string
  email: string
  age: number
  department: string
  rating: number
  avatar: string
  phone: string
  address: string
  bio: string
  joinDate: string
  projects: Project[]
  feedback: Feedback[]
  performance: PerformanceRecord[]
}

export interface Project {
  id: string
  name: string
  status: "active" | "completed" | "pending"
  progress: number
}

export interface Feedback {
  id: string
  from: string
  message: string
  date: string
  rating: number
}

export interface PerformanceRecord {
  month: string
  score: number
  goals: number
  achievements: number
}

export const departments = ["Engineering", "Marketing", "Sales", "HR", "Finance", "Design", "Operations"]

export const employees: Employee[] = [
  {
    id: "1",
    name: "Alice Johnson",
    email: "alice.johnson@company.com",
    age: 28,
    department: "Engineering",
    rating: 4.8,
    avatar: "https://randomuser.me/api/portraits/women/1.jpg",
    phone: "+1 (555) 123-4567",
    address: "123 Tech Street, San Francisco, CA 94105",
    bio: "Senior Frontend Developer with 5+ years of experience in React and TypeScript. Passionate about creating user-friendly interfaces and mentoring junior developers.",
    joinDate: "2021-03-15",
    projects: [
      { id: "1", name: "Dashboard Redesign", status: "active", progress: 75 },
      { id: "2", name: "Mobile App", status: "completed", progress: 100 },
    ],
    feedback: [
      { id: "1", from: "John Smith", message: "Excellent work on the recent project!", date: "2024-01-15", rating: 5 },
      {
        id: "2",
        from: "Sarah Wilson",
        message: "Great collaboration and communication skills.",
        date: "2024-01-10",
        rating: 4,
      },
    ],
    performance: [
      { month: "Jan 2024", score: 95, goals: 10, achievements: 9 },
      { month: "Dec 2023", score: 92, goals: 8, achievements: 8 },
    ],
  },
  {
    id: "2",
    name: "Bob Smith",
    email: "bob.smith@company.com",
    age: 32,
    department: "Marketing",
    rating: 4.2,
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    phone: "+1 (555) 234-5678",
    address: "456 Marketing Ave, New York, NY 10001",
    bio: "Digital Marketing Specialist with expertise in SEO, content marketing, and social media strategy. Led multiple successful campaigns.",
    joinDate: "2020-07-22",
    projects: [
      { id: "3", name: "Q1 Campaign", status: "active", progress: 60 },
      { id: "4", name: "Brand Refresh", status: "pending", progress: 20 },
    ],
    feedback: [
      {
        id: "3",
        from: "Lisa Brown",
        message: "Creative approach to marketing challenges.",
        date: "2024-01-12",
        rating: 4,
      },
    ],
    performance: [
      { month: "Jan 2024", score: 88, goals: 12, achievements: 10 },
      { month: "Dec 2023", score: 85, goals: 10, achievements: 9 },
    ],
  },
  {
    id: "3",
    name: "Carol Davis",
    email: "carol.davis@company.com",
    age: 29,
    department: "Design",
    rating: 4.9,
    avatar: "https://randomuser.me/api/portraits/men/2.jpg",
    phone: "+1 (555) 345-6789",
    address: "789 Design Blvd, Los Angeles, CA 90210",
    bio: "UX/UI Designer with a passion for creating intuitive and beautiful user experiences. Expert in Figma, Adobe Creative Suite, and user research.",
    joinDate: "2021-11-08",
    projects: [
      { id: "5", name: "User Research Study", status: "completed", progress: 100 },
      { id: "6", name: "Design System", status: "active", progress: 80 },
    ],
    feedback: [
      {
        id: "4",
        from: "Mike Johnson",
        message: "Outstanding design work and attention to detail.",
        date: "2024-01-14",
        rating: 5,
      },
    ],
    performance: [
      { month: "Jan 2024", score: 97, goals: 8, achievements: 8 },
      { month: "Dec 2023", score: 94, goals: 7, achievements: 7 },
    ],
  },
  {
    id: "4",
    name: "David Wilson",
    email: "david.wilson@company.com",
    age: 35,
    department: "Sales",
    rating: 4.1,
    avatar: "https://randomuser.me/api/portraits/men/3.jpg",
    phone: "+1 (555) 456-7890",
    address: "321 Sales Street, Chicago, IL 60601",
    bio: "Senior Sales Representative with a track record of exceeding targets. Specializes in B2B sales and client relationship management.",
    joinDate: "2019-05-12",
    projects: [{ id: "7", name: "Enterprise Deals", status: "active", progress: 45 }],
    feedback: [
      {
        id: "5",
        from: "Emma Davis",
        message: "Consistently meets and exceeds sales targets.",
        date: "2024-01-11",
        rating: 4,
      },
    ],
    performance: [
      { month: "Jan 2024", score: 86, goals: 15, achievements: 13 },
      { month: "Dec 2023", score: 89, goals: 12, achievements: 11 },
    ],
  },
  {
    id: "5",
    name: "Eva Brown",
    email: "eva.brown@company.com",
    age: 26,
    department: "HR",
    rating: 4.6,
    avatar: "https://randomuser.me/api/portraits/women/2.jpg",
    phone: "+1 (555) 567-8901",
    address: "654 HR Plaza, Austin, TX 78701",
    bio: "HR Specialist focused on employee engagement, recruitment, and organizational development. Certified in SHRM practices.",
    joinDate: "2022-01-30",
    projects: [{ id: "8", name: "Employee Onboarding", status: "active", progress: 70 }],
    feedback: [
      {
        id: "6",
        from: "Tom Wilson",
        message: "Great support during the hiring process.",
        date: "2024-01-13",
        rating: 5,
      },
    ],
    performance: [
      { month: "Jan 2024", score: 91, goals: 9, achievements: 8 },
      { month: "Dec 2023", score: 88, goals: 8, achievements: 7 },
    ],
  },
  // Adding 15 more employees to reach 20 total
  {
    id: "6",
    name: "Frank Miller",
    email: "frank.miller@company.com",
    age: 31,
    department: "Engineering",
    rating: 4.3,
    avatar: "https://randomuser.me/api/portraits/men/4.jpg",
    phone: "+1 (555) 678-9012",
    address: "987 Code Lane, Seattle, WA 98101",
    bio: "Backend Developer specializing in Node.js and Python. Expert in database design and API development.",
    joinDate: "2020-09-14",
    projects: [{ id: "9", name: "API Optimization", status: "active", progress: 55 }],
    feedback: [
      {
        id: "7",
        from: "Alice Johnson",
        message: "Solid technical skills and reliable delivery.",
        date: "2024-01-09",
        rating: 4,
      },
    ],
    performance: [
      { month: "Jan 2024", score: 87, goals: 11, achievements: 10 },
      { month: "Dec 2023", score: 84, goals: 9, achievements: 8 },
    ],
  },
  {
    id: "7",
    name: "Grace Lee",
    email: "grace.lee@company.com",
    age: 27,
    department: "Finance",
    rating: 4.7,
    avatar: "https://randomuser.me/api/portraits/men/5.jpg",
    phone: "+1 (555) 789-0123",
    address: "147 Finance Row, Boston, MA 02101",
    bio: "Financial Analyst with expertise in budgeting, forecasting, and financial modeling. CPA certified.",
    joinDate: "2021-06-01",
    projects: [{ id: "10", name: "Budget Planning 2024", status: "completed", progress: 100 }],
    feedback: [
      {
        id: "8",
        from: "Robert Chen",
        message: "Excellent analytical skills and attention to detail.",
        date: "2024-01-08",
        rating: 5,
      },
    ],
    performance: [
      { month: "Jan 2024", score: 93, goals: 7, achievements: 7 },
      { month: "Dec 2023", score: 90, goals: 6, achievements: 6 },
    ],
  },
  {
    id: "8",
    name: "Henry Garcia",
    email: "henry.garcia@company.com",
    age: 33,
    department: "Operations",
    rating: 4.0,
    avatar: "https://randomuser.me/api/portraits/men/6.jpg",
    phone: "+1 (555) 890-1234",
    address: "258 Operations Blvd, Denver, CO 80201",
    bio: "Operations Manager with experience in process optimization and team leadership. Six Sigma certified.",
    joinDate: "2019-12-03",
    projects: [{ id: "11", name: "Process Improvement", status: "active", progress: 40 }],
    feedback: [
      {
        id: "9",
        from: "Linda Martinez",
        message: "Strong leadership and problem-solving skills.",
        date: "2024-01-07",
        rating: 4,
      },
    ],
    performance: [
      { month: "Jan 2024", score: 82, goals: 13, achievements: 11 },
      { month: "Dec 2023", score: 80, goals: 12, achievements: 10 },
    ],
  },
  {
    id: "9",
    name: "Ivy Chen",
    email: "ivy.chen@company.com",
    age: 25,
    department: "Design",
    rating: 4.4,
    avatar: "https://randomuser.me/api/portraits/women/3.jpg",
    phone: "+1 (555) 901-2345",
    address: "369 Creative Ave, Portland, OR 97201",
    bio: "Junior UX Designer with a fresh perspective on user experience. Skilled in prototyping and user testing.",
    joinDate: "2023-02-15",
    projects: [{ id: "12", name: "Mobile UX Research", status: "active", progress: 65 }],
    feedback: [
      {
        id: "10",
        from: "Carol Davis",
        message: "Shows great potential and eagerness to learn.",
        date: "2024-01-06",
        rating: 4,
      },
    ],
    performance: [
      { month: "Jan 2024", score: 85, goals: 6, achievements: 5 },
      { month: "Dec 2023", score: 83, goals: 5, achievements: 4 },
    ],
  },
  {
    id: "10",
    name: "Jack Thompson",
    email: "jack.thompson@company.com",
    age: 30,
    department: "Marketing",
    rating: 3.9,
    avatar: "https://randomuser.me/api/portraits/men/7.jpg",
    phone: "+1 (555) 012-3456",
    address: "741 Brand Street, Miami, FL 33101",
    bio: "Content Marketing Specialist with experience in copywriting and social media management.",
    joinDate: "2022-08-20",
    projects: [{ id: "13", name: "Content Strategy", status: "pending", progress: 25 }],
    feedback: [
      {
        id: "11",
        from: "Bob Smith",
        message: "Good creative ideas, needs to improve execution.",
        date: "2024-01-05",
        rating: 4,
      },
    ],
    performance: [
      { month: "Jan 2024", score: 78, goals: 10, achievements: 8 },
      { month: "Dec 2023", score: 76, goals: 9, achievements: 7 },
    ],
  },
  {
    id: "11",
    name: "Kelly Rodriguez",
    email: "kelly.rodriguez@company.com",
    age: 28,
    department: "Sales",
    rating: 4.5,
    avatar: "https://randomuser.me/api/portraits/women/4.jpg",
    phone: "+1 (555) 123-4567",
    address: "852 Revenue Road, Phoenix, AZ 85001",
    bio: "Account Executive with strong relationship-building skills and consistent performance.",
    joinDate: "2021-04-10",
    projects: [{ id: "14", name: "Client Retention", status: "active", progress: 85 }],
    feedback: [
      {
        id: "12",
        from: "David Wilson",
        message: "Excellent client management and communication.",
        date: "2024-01-04",
        rating: 5,
      },
    ],
    performance: [
      { month: "Jan 2024", score: 90, goals: 14, achievements: 13 },
      { month: "Dec 2023", score: 87, goals: 12, achievements: 11 },
    ],
  },
  {
    id: "12",
    name: "Liam Anderson",
    email: "liam.anderson@company.com",
    age: 34,
    department: "Engineering",
    rating: 4.6,
    avatar: "https://randomuser.me/api/portraits/men/8.jpg",
    phone: "+1 (555) 234-5678",
    address: "963 Tech Park, San Jose, CA 95101",
    bio: "DevOps Engineer with expertise in cloud infrastructure and automation. AWS certified.",
    joinDate: "2020-01-15",
    projects: [{ id: "15", name: "Cloud Migration", status: "active", progress: 70 }],
    feedback: [
      {
        id: "13",
        from: "Frank Miller",
        message: "Outstanding technical expertise and mentorship.",
        date: "2024-01-03",
        rating: 5,
      },
    ],
    performance: [
      { month: "Jan 2024", score: 92, goals: 8, achievements: 8 },
      { month: "Dec 2023", score: 89, goals: 7, achievements: 7 },
    ],
  },
  {
    id: "13",
    name: "Mia Taylor",
    email: "mia.taylor@company.com",
    age: 26,
    department: "HR",
    rating: 4.2,
    avatar: "https://randomuser.me/api/portraits/women/5.jpg",
    phone: "+1 (555) 345-6789",
    address: "174 People Place, Nashville, TN 37201",
    bio: "Talent Acquisition Specialist focused on recruiting top talent and improving hiring processes.",
    joinDate: "2022-11-05",
    projects: [{ id: "16", name: "Recruitment Drive", status: "active", progress: 50 }],
    feedback: [
      {
        id: "14",
        from: "Eva Brown",
        message: "Great at identifying and attracting talent.",
        date: "2024-01-02",
        rating: 4,
      },
    ],
    performance: [
      { month: "Jan 2024", score: 84, goals: 11, achievements: 9 },
      { month: "Dec 2023", score: 82, goals: 10, achievements: 8 },
    ],
  },
  {
    id: "14",
    name: "Noah White",
    email: "noah.white@company.com",
    age: 29,
    department: "Finance",
    rating: 4.1,
    avatar: "https://randomuser.me/api/portraits/men/9.jpg",
    phone: "+1 (555) 456-7890",
    address: "285 Money Lane, Atlanta, GA 30301",
    bio: "Senior Accountant with experience in financial reporting and compliance. Detail-oriented and reliable.",
    joinDate: "2021-09-12",
    projects: [{ id: "17", name: "Audit Preparation", status: "completed", progress: 100 }],
    feedback: [
      {
        id: "15",
        from: "Grace Lee",
        message: "Thorough and accurate work on financial reports.",
        date: "2024-01-01",
        rating: 4,
      },
    ],
    performance: [
      { month: "Jan 2024", score: 86, goals: 9, achievements: 8 },
      { month: "Dec 2023", score: 84, goals: 8, achievements: 7 },
    ],
  },
  {
    id: "15",
    name: "Olivia Martinez",
    email: "olivia.martinez@company.com",
    age: 31,
    department: "Operations",
    rating: 4.3,
    avatar: "https://randomuser.me/api/portraits/men/10.jpg",
    phone: "+1 (555) 567-8901",
    address: "396 Efficiency St, Las Vegas, NV 89101",
    bio: "Supply Chain Coordinator with expertise in logistics and vendor management.",
    joinDate: "2020-06-18",
    projects: [{ id: "18", name: "Vendor Optimization", status: "active", progress: 60 }],
    feedback: [
      {
        id: "16",
        from: "Henry Garcia",
        message: "Excellent coordination and problem-solving.",
        date: "2023-12-30",
        rating: 4,
      },
    ],
    performance: [
      { month: "Jan 2024", score: 87, goals: 12, achievements: 10 },
      { month: "Dec 2023", score: 85, goals: 11, achievements: 9 },
    ],
  },
  {
    id: "16",
    name: "Paul Johnson",
    email: "paul.johnson@company.com",
    age: 27,
    department: "Design",
    rating: 3.8,
    avatar: "https://randomuser.me/api/portraits/men/11.jpg",
    phone: "+1 (555) 678-9012",
    address: "507 Visual Ave, Minneapolis, MN 55401",
    bio: "Graphic Designer with skills in branding and visual communication. Adobe Creative Suite expert.",
    joinDate: "2023-03-22",
    projects: [{ id: "19", name: "Brand Guidelines", status: "pending", progress: 30 }],
    feedback: [
      {
        id: "17",
        from: "Ivy Chen",
        message: "Creative designs but could improve on deadlines.",
        date: "2023-12-29",
        rating: 4,
      },
    ],
    performance: [
      { month: "Jan 2024", score: 76, goals: 8, achievements: 6 },
      { month: "Dec 2023", score: 74, goals: 7, achievements: 5 },
    ],
  },
  {
    id: "17",
    name: "Quinn Davis",
    email: "quinn.davis@company.com",
    age: 32,
    department: "Marketing",
    rating: 4.4,
    avatar: "https://randomuser.me/api/portraits/women/6.jpg",
    phone: "+1 (555) 789-0123",
    address: "618 Campaign Blvd, Detroit, MI 48201",
    bio: "Digital Marketing Manager with expertise in PPC advertising and conversion optimization.",
    joinDate: "2019-10-07",
    projects: [{ id: "20", name: "PPC Campaign", status: "active", progress: 75 }],
    feedback: [
      {
        id: "18",
        from: "Jack Thompson",
        message: "Strong analytical approach to marketing.",
        date: "2023-12-28",
        rating: 4,
      },
    ],
    performance: [
      { month: "Jan 2024", score: 88, goals: 13, achievements: 11 },
      { month: "Dec 2023", score: 86, goals: 12, achievements: 10 },
    ],
  },
  {
    id: "18",
    name: "Rachel Wilson",
    email: "rachel.wilson@company.com",
    age: 30,
    department: "Sales",
    rating: 4.7,
    avatar: "https://randomuser.me/api/portraits/women/7.jpg",
    phone: "+1 (555) 890-1234",
    address: "729 Deal Drive, Salt Lake City, UT 84101",
    bio: "Senior Sales Manager with a proven track record in team leadership and revenue growth.",
    joinDate: "2018-12-11",
    projects: [{ id: "21", name: "Sales Training", status: "active", progress: 80 }],
    feedback: [
      {
        id: "19",
        from: "Kelly Rodriguez",
        message: "Inspiring leader with great coaching skills.",
        date: "2023-12-27",
        rating: 5,
      },
    ],
    performance: [
      { month: "Jan 2024", score: 94, goals: 16, achievements: 15 },
      { month: "Dec 2023", score: 91, goals: 15, achievements: 14 },
    ],
  },
  {
    id: "19",
    name: "Sam Brown",
    email: "sam.brown@company.com",
    age: 28,
    department: "Engineering",
    rating: 4.0,
    avatar: "https://randomuser.me/api/portraits/men/12.jpg",
    phone: "+1 (555) 901-2345",
    address: "840 Code Street, Raleigh, NC 27601",
    bio: "Full Stack Developer with experience in React, Node.js, and database management.",
    joinDate: "2022-05-16",
    projects: [{ id: "22", name: "Feature Development", status: "active", progress: 45 }],
    feedback: [
      {
        id: "20",
        from: "Liam Anderson",
        message: "Good technical skills, improving rapidly.",
        date: "2023-12-26",
        rating: 4,
      },
    ],
    performance: [
      { month: "Jan 2024", score: 81, goals: 10, achievements: 8 },
      { month: "Dec 2023", score: 79, goals: 9, achievements: 7 },
    ],
  },
  {
    id: "20",
    name: "Tina Green",
    email: "tina.green@company.com",
    age: 33,
    department: "Finance",
    rating: 4.8,
    avatar: "https://randomuser.me/api/portraits/women/8.jpg",
    phone: "+1 (555) 012-3456",
    address: "951 Budget Blvd, Richmond, VA 23201",
    bio: "Finance Director with extensive experience in strategic planning and financial analysis.",
    joinDate: "2017-08-14",
    projects: [{ id: "23", name: "Financial Strategy", status: "completed", progress: 100 }],
    feedback: [
      {
        id: "21",
        from: "Noah White",
        message: "Exceptional leadership and financial expertise.",
        date: "2023-12-25",
        rating: 5,
      },
    ],
    performance: [
      { month: "Jan 2024", score: 96, goals: 12, achievements: 12 },
      { month: "Dec 2023", score: 93, goals: 11, achievements: 11 },
    ],
  },
]

export const analyticsData = {
  departmentPerformance: [
    { department: "Engineering", averageRating: 4.34, employeeCount: 4 },
    { department: "Marketing", averageRating: 4.17, employeeCount: 3 },
    { department: "Sales", averageRating: 4.43, employeeCount: 3 },
    { department: "HR", averageRating: 4.4, employeeCount: 2 },
    { department: "Finance", averageRating: 4.53, employeeCount: 3 },
    { department: "Design", averageRating: 4.37, employeeCount: 3 },
    { department: "Operations", averageRating: 4.15, employeeCount: 2 },
  ],
  bookmarkTrends: [
    { month: "Jan", bookmarks: 12 },
    { month: "Feb", bookmarks: 19 },
    { month: "Mar", bookmarks: 15 },
    { month: "Apr", bookmarks: 22 },
    { month: "May", bookmarks: 18 },
    { month: "Jun", bookmarks: 25 },
  ],
  performanceOverTime: [
    { month: "Jul", score: 85 },
    { month: "Aug", score: 87 },
    { month: "Sep", score: 89 },
    { month: "Oct", score: 86 },
    { month: "Nov", score: 88 },
    { month: "Dec", score: 90 },
  ],
}
