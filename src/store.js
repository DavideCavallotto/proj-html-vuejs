import { reactive } from 'vue'


export const store = reactive({	    
    languages: [
        {
            language: "English",
            value: "en"
        },
        {
            language: "Italian",
            value: "it"
        },
        {
            language: "French",
            value: "fr"
        },
        {
            language: "German",
            value: "de"
        }
    ],
    
    typeCourses: [
        {
            text:'Courses',
            news: false
        },
        {
            text:'Zoom',
            news: true
        },
        {
            text:'Pages',
            news: false
        },
        {
            text:'Bundles',
            news: false
        },
        {
            text:'Course Formats',
            news: false
        },
        {
            text:'Add Course',
            news: true
        },
        {
            text:'Demos',
            news: false
        }
    ],

    icons: [        
        'fab fa-twitter',
        'fab fa-instagram',
        'fab fa-behance',
        'fab fa-dribbble',
        'fab fa-flickr',
        'fab fa-git',
        'fab fa-linkedin',
        'fab fa-pinterest'
    ],

    advantages: [
        {
            icon: 'fa-solid fa-earth-africa',
            title: 'Worldwide Recognize',
            text: 'Our online course certificates can be used around the world and also in most popular universities and companies.'
        },
        {
            icon: 'fa-solid fa-display',
            title: 'Mostly Online Learning (sd)',
            text: 'Masterstudy online certificates can be obtained in a range of specialized areas and tipically take about a year to complete.'
        },
        {
            icon: 'fa-solid fa-calendar-check',
            title: 'Graduate in as little as 1 Year',
            text: 'Online post-graduate certificates are a popular way to develop your professional qualifications of Masterstudy'
        },
    ],   

    numberCourses: [        
        {
            img: 'public/images/cat_5-370x155.jpg',
            course: 'Music',
            counter: '5'
        },
        {
            img: 'public/images/cat_4-370x155.jpg',
            course: 'Exercise',
            counter: '7'
        },
        {
            img: 'public/images/cat_6-370x155.jpg',
            course: 'Photography',
            counter: '4'
        }
    ],   
    
    categories: 
    [
        'All Categories',
        'Art',
        'Exercise',
        'Material Design',
        'Music',
        'Photography',
        'Software Development'
    ],

    cards: [
        {
            img: 'public/images/photo-1461749280684-dccba630e2f6-272x161.jpeg',
            type: 'Apache',
            text: 'Web Coding and Apache Basics',
            icon: 'fa-regular fa-clock',
            hour: '6 hours',
            price: 'Free',
            discount: 0,
            vote: 0,
            badge: '',
            featured: '',
        },
        {
            img: 'public/images/cat_2-272x161.jpg',
            type: 'Art',
            text: 'Real Thinghs Art Painting by Jason Ni',
            icon: 'fa-regular fa-clock',
            hour: '6 hours',
            price: 45,
            discount: 60,
            vote: 0,
            badge: 'New',
            featured: 'FEATURED'
        },
        {
            img: 'public/images/course-preview-272x161.jpg',
            type: 'Software Development',
            text: 'Basics of Masterstudy',
            icon: '',
            hour: '',
            price: 'Free',
            discount: 0,
            vote: 5,
            badge: 'Hot',
            featured: '',
        },
        {
            img: 'public/images/photo-1496307042754-b4aa456c4a2d-272x161.jpeg',
            type: 'Electronic',
            text: 'How to be a DJ? Make Electronic Music',
            icon: '',
            hour: '',
            price: 49,
            discount: 59,
            vote: 5,
            badge: 'Special',
            featured: '',
        },
        {
            img: 'public/images/photo-1416339134316-0e91dc9ded92-scaled-272x161.jpeg',
            type: 'Comunication',
            text: 'Design Instruments for Comunication',
            icon: 'fa-regular fa-clock',
            hour: '6 hours',
            price: 'Free',
            discount: 0,
            vote: 0,
            badge: '',
            featured: '',
        },
        {
            img: 'public/images/cathryn-lavery-67852-unsplash-272x161.jpg',
            type: 'Art',
            text: 'Make your Concept Right and Beautiful',
            icon: 'fa-regular fa-clock',
            hour: '6 hours',
            price: 70,
            discount: 0,
            vote: 0,
            badge: '',
            featured: '',
        },
        {
            img:'public/images/photo-1475452779376-caebfb988090-272x161.jpeg',
            type: 'Bicycling',
            text: 'Road Bike Manual or How to Be a Champion',
            icon: 'fa-regular fa-clock',
            hour: '6 hours',
            price: 20,
            discount: 0,
            vote: 0,
            badge: '',
            featured: '',
        },
        {
            img:'public/images/cristian-grecu-762012-unsplash-min-scaled-272x161.jpg',
            type: 'Documentary',
            text: 'How to Make Beautiful Landscape photos',
            icon: 'fa-regular fa-clock',
            hour: '6 hours',
            price: 60,
            discount: 0,
            vote: 0,
            badge: '',
            featured: '',
        },
        {
            img: 'public/images/landscape-272x161.jpg',
            type: 'Art',
            text: 'Let\'s paint Van Gogh\'s Starry Night',
            icon: 'fa-regular fa-clock',
            hour: '6 hours',
            price: 79,
            discount: 0,
            vote: 0,
            badge: '',
            featured: '',
        },
        {
            img: 'public/images/12345-1-272x161.png',
            type: 'Nvidia',
            text: 'Nvidia and UE4 Technologies Practice',
            icon: '',
            hour: '',
            price: 'Free',
            discount: 0,
            vote: 5,
            badge: 'Special',
            featured: '',
        },
        {
            img: 'public/images/jakob-owens-198234-unsplash-min-1-272x161.png',
            type: 'Art',
            text: 'How to Work with Legendary RED camera?',
            icon: 'fa-regular fa-clock',
            hour: '6 hours',
            price: 'Free',
            discount: 0,
            vote: 0,
            badge: 'Special',
            featured: '',
        },
        {
            img:'public/images/promo_tf-272x161.jpg',
            type: 'Software Development',
            text: 'Masterstudy Mobile LMS App',
            icon: 'fa-regular fa-clock',
            hour: '2 hours',
            price: 'Free',
            discount: 0,
            vote: 0,
            badge: '',
            featured: '',
        },
    ],

    dates: [
        {
            value: '2000',
            type: 'Students'
        },
        {
            value: '950',
            type: 'Courses'
        },
        {
            value: '1600',
            type: 'Hours Video'
        },
        {
            value: '150',
            type: 'Countries Reached'
        },
    ],

	
})