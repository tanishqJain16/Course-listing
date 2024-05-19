const courses = [
    {
        id: 1,
        name: "React Basics",
        instructor: "John Doe",
        description: "React is a powerful JavaScript library that you can use to build user interfaces for web and mobile applications (apps). In this course, you will explore the fundamental concepts that underpin the React library and learn the basic skills required to build a simple, fast, and scalable app.",
        enrollmentStatus: 'Open', // Can be 'Open', 'Closed', or 'InProgress'
        thumbnail: 'https://st2.depositphotos.com/2769299/7314/i/450/depositphotos_73146775-stock-photo-a-stack-of-books-on.jpg',
        starts: "March 1, 2024", // Start date of the course, e.g. "March 1, 2022"
        duration: '8 weeks', // Duration of the course
        schedule: 'Tuesdays and Thursdays, 6:00 PM - 8:00 PM',
        location: 'Online',
        rating: 4, // Average review rating
        reviews: 4, // Number of reviews
        prerequisites: ['Basic JavaScript knowledge', 'Familiarity with React'],
        syllabus: [
            {
                week: 1,
                topic: 'Introduction to React Components',
                content: 'Learn about React components and how to build them.'
            },
            {
                week: 2,
                topic: 'Building React Components',
                content: 'Creating and styling React components.'
            },
            {
                week: 3,
                topic: 'State and Props',
                content: 'Learn about state and props in React.'
            },
            {
                week: 4,
                topic: 'React Router',
                content: 'Learn how to use React Router for routing in React.'
            },
        ],
        students: []
    },
    {
        id: 2,
        name: "Node.js",
        instructor: "Jane Doe",
        description: "Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine.",
        enrollmentStatus: 'Closed',
        thumbnail: 'https://st2.depositphotos.com/2769299/7314/i/450/depositphotos_73146775-stock-photo-a-stack-of-books-on.jpg',
        starts: "March 1, 2024", // Start date of the course, e.g. "March 1, 2022"
        duration: '6 weeks',
        schedule: 'Mondays and Wednesdays, 6:00 PM - 8:00 PM',
        location: 'Online',
        rating: 3, // Average review rating
        reviews: 14, // Number of reviews
        prerequisites: ['Basic JavaScript knowledge'],
        progress: 50, // Progress of the course in percentage
        syllabus: [
            {
                week: 1,
                topic: 'Introduction to Node.js',
                content: 'Learn about Node.js and its uses.'
            },
            {
                week: 2,
                topic: 'Building a Web Server',
                content: 'Learn how to build a web server using Node.js.'
            },
            {
                week: 3,
                topic: 'Express.js',
                content: 'Learn how to use Express.js for building web applications.'
            },
            {
                week: 4,
                topic: 'Database Integration',
                content: 'Integrate a database with your Node.js application.'
            },
        ],
        students: []
    },
    {
        id: 3,
        name: "MongoDB",
        instructor: "John Smith",
        description: "MongoDB is a source-available cross-platform document-oriented database program.",
        enrollmentStatus: 'In Progress',
        thumbnail: 'https://st2.depositphotos.com/2769299/7314/i/450/depositphotos_73146775-stock-photo-a-stack-of-books-on.jpg',
        starts: "March 1, 2024", // Start date of the course, e.g. "March 1, 2022"
        duration: '4 weeks',
        schedule: 'Fridays, 6:00 PM - 8:00 PM',
        location: 'Online',
        rating: 5, // Average review rating
        reviews: 1, // Number of reviews
        prerequisites: ['Basic JavaScript knowledge'],
        syllabus: [
            {
                week: 1,
                topic: 'Introduction to MongoDB',
                content: 'Learn about MongoDB and its uses.'
            },
            {
                week: 2,
                topic: 'CRUD Operations',
                content: 'Perform CRUD operations in MongoDB.'
            },
            {
                week: 3,
                topic: 'Data Modeling',
                content: 'Learn how to model data in MongoDB.'
            },
            {
                week: 4,
                topic: 'Aggregation',
                content: 'Perform aggregation operations in MongoDB.'
            },
        ],
        students: []
    },
    {
        id: 4,
        name: "Python",
        instructor: "Jane Smith",
        description: "Python is an interpreted high-level general-purpose programming language.",
        enrollmentStatus: 'Open',
        thumbnail: 'https://st2.depositphotos.com/2769299/7314/i/450/depositphotos_73146775-stock-photo-a-stack-of-books-on.jpg',
        starts: "March 1, 2024", // Start date of the course, e.g. "March 1, 2022"
        duration: '10 weeks',
        schedule: 'Saturdays, 10:00 AM - 12:00 PM',
        location: 'Online',
        rating: 4, // Average review rating
        reviews: 43, // Number of reviews
        prerequisites: ['None'],
        syllabus: [
            {
                week: 1,
                topic: 'Introduction to Python',
                content: 'Learn about Python and its uses.'
            },
            {
                week: 2,
                topic: 'Data Types',
                content: 'Learn about data types in Python.'
            },
            {
                week: 3,
                topic: 'Control Structures',
                content: 'Learn about control structures in Python.'
            },
            {
                week: 4,
                topic: 'Functions',
                content: 'Learn about functions in Python.'
            },
        ],
        students: []
    },
    {
        id: 5,
        name: "JavaScript",
        instructor: "John Doe",
        description: "JavaScript is a programming language that conforms to the ECMAScript specification.",
        enrollmentStatus: 'Open',
        thumbnail: 'https://st2.depositphotos.com/2769299/7314/i/450/depositphotos_73146775-stock-photo-a-stack-of-books-on.jpg',
        starts: "March 1, 2024", // Start date of the course, e.g. "March 1, 2022"
        duration: '8 weeks',
        schedule: 'Tuesdays and Thursdays, 6:00 PM - 8:00 PM',
        location: 'Online',
        rating: 1, // Average review rating
        reviews: 3, // Number of reviews
        prerequisites: ['None'],
        syllabus: [
            {
                week: 1,
                topic: 'Introduction to JavaScript',
                content: 'Learn about JavaScript and its uses.'
            },
            {
                week: 2,
                topic: 'Data Types',
                content: 'Learn about data types in JavaScript.'
            },
            {
                week: 3,
                topic: 'Control Structures',
                content: 'Learn about control structures in JavaScript.'
            },
            {
                week: 4,
                topic: 'Functions',
                content: 'Learn about functions in JavaScript.'
            },
        ],
        students: []
    },
    {
        id: 6,
        name: "Java",
        instructor: "Jane Smith",
        description: "Java is a class-based, object-oriented programming language.",
        enrollmentStatus: 'Closed',
        thumbnail: 'https://st2.depositphotos.com/2769299/7314/i/450/depositphotos_73146775-stock-photo-a-stack-of-books-on.jpg',
        starts: "March 1, 2024", // Start date of the course, e.g. "March 1, 2022"
        duration: '12 weeks',
        schedule: 'Mondays and Wednesdays, 6:00 PM - 8:00 PM',
        location: 'Online',
        rating: 2, // Average review rating
        reviews: 23, // Number of reviews
        prerequisites: ['None'],
        syllabus: [
            {
                week: 1,
                topic: 'Introduction to Java',
                content: 'Learn about Java and its uses.'
            },
            {
                week: 2,
                topic: 'Data Types',
                content: 'Learn about data types in Java.'
            },
            {
                week: 3,
                topic: 'Control Structures',
                content: 'Learn about control structures in Java.'
            },
            {
                week: 4,
                topic: 'Object-Oriented Programming',
                content: 'Learn about object-oriented programming in Java.'
            },
        ],
        students: []
    }
];

export default courses;