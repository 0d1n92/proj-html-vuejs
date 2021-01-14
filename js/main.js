var app = new Vue({
  el: '#app',
  data: {
    itemsMainMenu: ["Home","Apple","Microsoft","Android","Forums", "Contact us"],
    descriptionFotter:  {
        title: "avada tech forum",
        text: "Sed semper, nisl id feugiat eleifend, erat est digssim felis, quis auctor elit enim nec ante. Cras et nibh risus. Pellentesque non mi sit amet mi intermentum.",
      },

    itemsLinkFooter:[
      {
        id:"popolar_topics",
        title:"popolar topics",
        linkText:[
        "Nam a dolor volutpat massa auctor semper",
        "Curabitur a scelerisque ligula",
        "Nam a dolor volutpat massa auctor semper",
        "Sed euismod nunc urna fermentum arcu dapibus fringilla."
        ],
      },
      {
        id:"recent_topics",
        title:"recent topics",
        linkText:[
          "Cras lacinia tellus id mauris finibus lacus molestie",
          "Proin at ligula sagittis vestibulum nisi vitae",
          "Sed nec metus at est tincidunt elementum",
          "Nulla egestas nulla eu nulla suscipit molestie"
        ],
      },
      {
        id:"latest_replies",
        title:"latest replies",
        linkText:[
          "Cras lacinia tellus id mauris finibus lacus molestie",
          "Cras lacinia tellus id mauris finibus lacus molestie",
          "Nulla egestas nulla eu nulla suscipit molestie",
          "Mauris ac nibh quis eros sagittis lacinia a et dui"
        ],
      },
    ],


    articlesNews: [
      {
        img:"img/post_feat_img_25-700x441.jpg",
        title:"Fusce sollicitudin nunc sed placerat varius",
        text:"Donec finibus sit amet orci eget ultricies. Praesent posuere ante ut erat fringilla, vestibulum placerat metus mattis. Aenean dictum vitae nisl",
        date:"October 11th, 2015",
        comments:"comments 2",
      },
      {
        img:"img/post_feat_img_24-700x441.jpg",
        title:"Donec facilis sodales leo sit amet laoreet",
        text:"Donec finibus sit amet orci eget ultricies. Praesent posuere ante ut erat fringilla, vestibulum placerat metus mattis. Aenean dictum vitae nisl",
        date:"October 11th, 2015",
        comments:"comments 2",

      },
      {
        img:"img/post_feat_img_23-700x441.jpg",
        title:"Proin eu purus sed aru aliquet curabir vens",
        text:"Donec finibus sit amet orci eget ultricies. Praesent posuere ante ut erat fringilla, vestibulum placerat metus mattis. Aenean dictum vitae nisl",
        date:"October 11th, 2015",
        comments:"Comments Off",
      }
  ],


    articlesFeatured: [
      {
        img:"img/post_feat_img_22-700x441.jpg",
        title:"Morbi vitae dui euismod vulputate sollicitudin",
        text:"Donec finibus sit amet orci eget ultricies. Praesent posuere ante ut erat fringilla, vestibulum placerat metus mattis. Aenean dictum vitae nisl",
        date:"October 11th, 2015",
        comments:"Comments Off",
      },
      {
        img:"img/post_feat_img_21-700x441.jpg",
        title:"Vivamus pellenteque, felis quis varius",
        text:"Donec finibus sit amet orci eget ultricies. Praesent posuere ante ut erat fringilla, vestibulum placerat metus mattis. Aenean dictum vitae nisl",
        date:"October 11th, 2015",
        comments:"Comments Off",

      },
      {
        img:"img/post_feat_img_20-700x441.jpg",
        title:"Donec ornare pretium eget scelisque justo",
        text:"Donec finibus sit amet orci eget ultricies. Praesent posuere ante ut erat fringilla, vestibulum placerat metus mattis. Aenean dictum vitae nisl",
        date:"October 11th, 2015",
        comments:"Comments Off",
      }
    ],

    tutorialData:[
      {
        img:"img/post_feat_img_23-147x118.jpg",
        title:"Donec ornare pretium eget scelisque justo",
        date:"October 11th, 2015",
        comments:"Comments Off",
      },
      {
        img:"img/post_feat_img_22-147x118.jpg",
        title:"Fusce sollicitudin nunc sed placerat varius",
        date:"October 11th, 2015",
        comments:"Comments Off",
      },
      {
        img:"img/post_feat_img_20-147x118.jpg",
        title:"Proin eu purus sed aru aliquet curabir vens",
        date:"October 11th, 2015",
        comments:"Comments Off",
      }
    ],
    sectionsForum: [
      {
        title: "Nws & Comunity",
        icon:"fas fa-file-alt",
      },
      {
        title: "Apple Forum",
        icon:"fab fa-apple",
      },
      {
        title: "Microsoft Forum",
        icon:" fab fa-windows",
      },
      {
        title:"Android Forum",
        icon:"fab fa-android",
      },
      {
        title:"General Discussion",
        icon:"fas fa-coffee",
      },
      {
        title:"App & Software",
        icon:"fas fa-cubes",
      },
      {
        title:"Gadget & Stuff",
        icon:" fas fa-laptop",
      },
      {
        title:"Tutorials & Guides",
        icon:"fas fa-wrench",
      },

    ],

  },
  methods: {

  },
  mounted:function () {

  }
});
