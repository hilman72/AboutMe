// translate switch

var isJp = false;

function click_fun() {
  const translations = {
    en: {
      lan1: "English",
      lan2: "Japanese",
      side1: "About Me",
      side2: "Information",
      side3: "Album",
      side4: "Contact Me",
    },
    jp: {
      lan1: "英語",
      lan2: "日本語",
      side1: "私について",
      side2: "私の資料",
      side3: "写真",
      side4: "連絡先",
    },
  };

  document.getElementById("btn").checked = !isJp;
  isJp = !isJp;
  const translation = translations[isJp ? "jp" : "en"];
  for (const [key, value] of Object.entries(translation)) {
    document.getElementById(key).innerHTML = value;
  }
}

/**************************************************** */

// sidebar
$(document).ready(function(){
  $("#sidebarCollapse").on('click',function(){
    $("#sidebar, #content").toggleClass('active');
  })

})

/**************************************************** */

// my detail


$('.myDetail-item').click(function () {
  $('.collapse').collapse('hide');
});


