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
    ]
         
	
})