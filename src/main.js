import { createApp } from 'vue'
import App from './App.vue'
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faBars, faBriefcase, faBullhorn, faCalendarCheck, faDisplay, faEarthAfrica, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faBehance, faDribbble, faFlickr, faGit, faInstagram, faLinkedin, faPinterest, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faBookmark, faClock, faUser } from '@fortawesome/free-regular-svg-icons'

/* add icons to the library */
library.add(faTwitter, faInstagram, faBehance,
     faDribbble, faFlickr, faGit, faLinkedin,
      faPinterest, faBars, faMagnifyingGlass,
       faBullhorn, faBriefcase, faUser, faBookmark,
        faEarthAfrica, faDisplay, faCalendarCheck, faClock ,)


createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
