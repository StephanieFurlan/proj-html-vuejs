

var app = new Vue({
   el: "#app",
   data: {
      languages: ["English", "Italian", "Deutsch"],
      courseTypes: [],
      recentCoursesList: [
         {
            imgUrl: "photo-1461749280684-dccba630e2f6-272x161.jpeg",
            type: "Apache",
            title: "Web coding and Apache Basics",
            stars: false,
            hours: 6,
            discount: false,
            price: "Free",
            faetured: false,
            release: false
         },
         {
            imgUrl: "cat_2-272x161.jpg",
            type: "Art",
            title: "Real Things Art Printing by Jason Ni",
            stars: false,
            hours: 6,
            discount: "$60",
            price: "$45",
            faetured: true,
            release: "new"
         },
         {
            imgUrl: "course-preview-272x161.jpg",
            type: "Software Development",
            title: "Basics of Masterstudy",
            stars: 3,
            hours: false,
            discount: false,
            price: "Free",
            faetured: false,
            release: "hot"
         },
         {
            imgUrl: "photo-1496307042754-b4aa456c4a2d-272x161.jpeg",
            type: "Electronic",
            title: "How to be a DJ? Make Electronic Music",
            stars: 5,
            hours: false,
            discount: "$59",
            price: "$49",
            faetured: false,
            release: "special"
         },
         {
            imgUrl: "photo-1416339134316-0e91dc9ded92-scaled-272x161.jpeg",
            type: "Comunication",
            title: "Design Instruments for Communication",
            stars: false,
            hours: 6,
            discount: false,
            price: false,
            faetured: false,
            release: false
         },
         {
            imgUrl: "cathryn-lavery-67852-unsplash-272x161.jpg",
            type: "Art",
            title: "Make Your Concept Right and Beautiful",
            stars: false,
            hours: 6,
            discount: false,
            price: "$70",
            faetured: false,
            release: false
         },
         {
            imgUrl: "photo-1475452779376-caebfb988090-272x161.jpeg",
            type: "Bycycling",
            title: "Road Bike Manual or How to Be a Champion.",
            stars: false,
            hours: 6,
            discount: false,
            price: "$20",
            faetured: false,
            release: false
         },
         {
            imgUrl: "cristian-grecu-762012-unsplash-min-scaled-272x161.jpg",
            type: "Documentary",
            title: "How to Make Beautiful Landscape photos?",
            stars: false,
            hours: 6,
            discount: false,
            price: "$60",
            faetured: false,
            release: false
         },
         {
            imgUrl: "landscape-272x161.jpg",
            type: "Art",
            title: "Let's paint Van Gogh's Starry Night",
            stars: false,
            hours: 6,
            discount: false,
            price: "$79",
            faetured: false,
            release: false
         },
         {
            imgUrl: "12345-1-272x161.png",
            type: "Nvidia",
            title: "Nvidia and UE4 Technologies Practice",
            stars: 5,
            hours: false,
            discount: false,
            price: "Free",
            faetured: false,
            release: "special"
         },
         {
            imgUrl: "jakob-owens-198234-unsplash-min-1-272x161.png",
            type: "Art",
            title: "How to Work with Legendary RED camera?",
            stars: false,
            hours: 6,
            discount: false,
            price: "Free",
            faetured: false,
            release: "special"
         },
         {
            imgUrl: "promo_tf-272x161.jpg",
            type: "Software Development",
            title: "MasterStudy Mobile LMS App",
            stars: false,
            hours: 2,
            discount: false,
            price: "Free",
            faetured: false,
            release: false
         }
      ],
      popularCoursesList: [
         {
            imgUrl: "photo-1461749280684-dccba630e2f6-272x161.jpeg",
            type: "Apache",
            title: "Web coding and Apache Basics",
            stars: false,
            hours: 6,
            discount: false,
            price: "Free",
            faetured: false,
            release: false
         },
         {
            imgUrl: "cat_2-272x161.jpg",
            type: "Art",
            title: "Real Things Art Printing by Jason Ni",
            stars: false,
            hours: 6,
            discount: "$60",
            price: "$45",
            faetured: true,
            release: "new"
         },
         {
            imgUrl: "course-preview-272x161.jpg",
            type: "Software Development",
            title: "Basics of Masterstudy",
            stars: 3,
            hours: false,
            discount: false,
            price: "Free",
            faetured: false,
            release: "hot"
         },
         {
            imgUrl: "photo-1496307042754-b4aa456c4a2d-272x161.jpeg",
            type: "Electronic",
            title: "How to be a DJ? Make Electronic Music",
            stars: 5,
            hours: false,
            discount: "$59",
            price: "$49",
            faetured: false,
            release: "special"
         },
         {
            imgUrl: "photo-1416339134316-0e91dc9ded92-scaled-272x161.jpeg",
            type: "Comunication",
            title: "Design Instruments for Communication",
            stars: false,
            hours: 6,
            discount: false,
            price: false,
            faetured: false,
            release: false
         },
         {
            imgUrl: "cathryn-lavery-67852-unsplash-272x161.jpg",
            type: "Art",
            title: "Make Your Concept Right and Beautiful",
            stars: false,
            hours: 6,
            discount: false,
            price: "$70",
            faetured: false,
            release: false
         }
      ]
   },
   mounted() {
      this.recentCoursesList.forEach(item => {
         if (!this.courseTypes.includes(item.type)) {
            this.courseTypes.push(item.type);
         }
      })
   }
})
