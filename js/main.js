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
      }

    ],


  },
  mounted:function () {

  }
});
