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
      side1: "人間？？",
      side2: "人間？研究",
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
$(document).ready(function () {
  $("#sidebarCollapse,.sidebar-header,#side1,#side2,#side3,#side4").on(
    "click",
    function () {
      $("#sidebar, #content").toggleClass("active");
    }
  );
});

/**************************************************** */

// my detail

$(".myDetail-item").click(function () {
  $(".collapse").collapse("hide");
});

$(".pj1-pic")
  .mouseenter(function () {
    $("#pj1").collapse("show");
  })
  .mouseleave(function () {
    $("#pj1").collapse("hide");
  });

$(".pj2-pic")
  .mouseenter(function () {
    $("#pj2").collapse("show");
  })
  .mouseleave(function () {
    $("#pj2").collapse("hide");
  });

$(".pj3-pic")
  .mouseenter(function () {
    $("#pj3").collapse("show");
  })
  .mouseleave(function () {
    $("#pj3").collapse("hide");
  });

$(".myDetail-myProject").mouseenter(function () {
  $(".fa-project-diagram").addClass("animate__bounce");
});
$(".myDetail-myProject").bind(
  "webkitAnimationEnd oAnimationEnd MSAnimationEnd",
  function () {
    $(".fa-project-diagram").removeClass("animate__bounce");
  }
);

$(".myDetail-coding-skill").mouseenter(function () {
  $(".fa-tools").addClass("animate__bounce");
});
$(".myDetail-coding-skill").bind(
  "webkitAnimationEnd oAnimationEnd MSAnimationEnd",
  function () {
    $(".fa-tools").removeClass("animate__bounce");
  }
);

$(".myDetail-other-skill").mouseenter(function () {
  $(".fa-toolbox").addClass("animate__bounce");
});
$(".myDetail-other-skill").bind(
  "webkitAnimationEnd oAnimationEnd MSAnimationEnd",
  function () {
    $(".fa-toolbox").removeClass("animate__bounce");
  }
);

$(".myDetail-resume").mouseenter(function () {
  $(".fa-file").addClass("animate__bounce");
});
$(".myDetail-resume").bind(
  "webkitAnimationEnd oAnimationEnd MSAnimationEnd",
  function () {
    $(".fa-file").removeClass("animate__bounce");
  }
);
// coding skills
$(".myDetail-coding-skill").on("click", function () {
  $("#bar-html,#bar-css,#bar-js,#bar-bs,#bar-jq").animate(
    {
      width: "10%",
    },
    500
  );
});

$(".myDetail-other-skill,.myDetail-resume,.myDetail-myProject").on(
  "click",
  function () {
    $("#bar-html,#bar-css,#bar-js,#bar-bs,#bar-jq").animate(
      {
        width: "0%",
      },
      100
    );
  }
);

// other skills

$(".myDetail-other-skill").on("click", function () {
  $("#bar-ch").animate(
    {
      width: "100%",
    },
    500
  );
});

$(".myDetail-other-skill").on("click", function () {
  $("#bar-eng").animate(
    {
      width: "80%",
    },
    500
  );
});

$(".myDetail-other-skill").on("click", function () {
  $("#bar-jap").animate(
    {
      width: "90%",
    },
    500
  );
});

$(".myDetail-other-skill").on("click", function () {
  $("#bar-mand").animate(
    {
      width: "50%",
    },
    500
  );
});

$(".myDetail-coding-skill,.myDetail-resume,.myDetail-myProject").on(
  "click",
  function () {
    $("#bar-ch,#bar-eng,#bar-jap,#bar-mand").animate(
      {
        width: "0%",
      },
      100
    );
  }
);

/**************************************************** */

// slideshow

var swiper = new Swiper(".swiper-container", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  loop: true,
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
