import { v4 as uuidv4} from "uuid"

export const projects = [
  {
     id: uuidv4(),
     title: "whatever",
     desc : "Team-built project implemented inthe last 2 weeks of Le wagon. Theintent of the app was to addressthe paralysis of finding movies towatch by recommending filmsaccording to moods paired withfood recommendations. Based onuser input survey provided, the apprecommended the best movie andfood combination. The app wasbuilt with Ruby on Rails, HTML,SCSS, and Javascript",
     github: "https://github.com/MohamedAbdillahi",
     demo: "https://www.whatever.watch",
     image:  "./images/whatever-screenshot.jpeg"
  },
  {
     id: uuidv4(),
     title: "Scare BnB",
     desc : "A clone of AirBnB was built as a group project during the 9 weeks in Le wagon using Ruby on Rails, HTML, SCSS and Javascript. figma was the interface design tool used to build the wireframes before working on the front-end",
     github: "https://github.com/MohamedAbdillahi",
     demo: "https://airbnb- scoomey.herokuapp.com/",
     image:  "./images/scareBnb.jpeg"
  },

]
