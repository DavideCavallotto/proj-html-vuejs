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
    ]
         
	
})