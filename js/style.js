$(function () {
  $(window).on("scroll", function (e) {
    if (window.scrollY > 300) {
      $(".containerParent.forHeader").addClass("toFixed");
    } else {
      $(".containerParent.forHeader").removeClass("toFixed");
    }

    if (window.scrollY > 600) {
      $(".toTop").show();
    } else {
      $(".toTop").hide();
    }
  });

  // Form validation
  // (function () {
  //   "use strict";

  //   var forms = document.querySelectorAll(".needs-validation");

  //   Array.prototype.slice.call(forms).forEach(function (form) {
  //     form.addEventListener(
  //       "submit",
  //       function (event) {
  //         var name = $("#name").val();
  //         var email = $("#email").val();
  //         var phoneNum = $("#phoneNumber").val();

  //         if (!name.length && name.length > 50) {
  //           $("#name").addClass("is-invalid");
  //           $("#name").removeClass("is-valid");
  //           $("#name")[0].setCustomValidity("invalid name");
  //         } else {
  //           $("#name").removeClass("is-invalid");
  //           $("#name").addClass("is-valid");
  //           $("#name")[0].setCustomValidity("");
  //         }

  //         if (!email.includes("@gmail.com")) {
  //           $("#email").removeClass("is-valid");
  //           $("#email").addClass("is-invalid");
  //           $("#email")[0].setCustomValidity("invalid email");
  //         } else {
  //           $("#email").addClass("is-valid");
  //           $("#email").removeClass("is-invalid");
  //           $("#email")[0].setCustomValidity("");
  //         }
  //         var phoneReg = /^[0-9()+\-.\s]*$/;
  //         if (!phoneNum || !phoneReg.test(phoneNum)) {
  //           $("#phoneNumber").removeClass("is-valid");
  //           $("#phoneNumber").addClass("is-invalid");
  //           $("#phoneNumber")[0].setCustomValidity("invalid phone number");
  //         } else {
  //           $("#phoneNumber").addClass("is-valid");
  //           $("#phoneNumber").removeClass("is-invalid");
  //           $("#phoneNumber")[0].setCustomValidity("");
  //         }

  //         if (!form.checkValidity()) {
  //           event.preventDefault();
  //           event.stopPropagation();
  //           console.log("disqualified");
  //         } else {
  //           console.log("qualified");
  //           $("form").hide();
  //           $("#form").append(`<p class="userInfo p-5 fs-2">
  //             Xin chào ${name}.<br>
  //             Email của bạn là: ${email}.<br>
  //             Số điện thoại của bạn là: ${phoneNum}.<br>
  //             Giới tính: ${$(
  //               "input[name='flexRadioDefault']:checked"
  //             ).val()}.<br>
  //             Sở Thích của bạn là: ${$("[type=checkbox]")
  //               .map((index, element) => {
  //                 return element.value;
  //               })
  //               .get()
  //               .join(", ")}.<br>
  //               Bạn đã miêu tả bản thân như sau: <br>
  //               ${$("textarea").val()}
  //               </p>
  //           `);
  //           event.preventDefault();
  //           event.stopPropagation();
  //         }

  //         form.classList.add("was-validated");
  //       },
  //       false
  //     );
  //   });
  // })();

  // Simulate page loading

  window.addEventListener("load", function () {
    // Hide the spinner when the page has finished loading
    // document.querySelector("").style.display = "none";
    $(".curtain").fadeOut(1000);
    $(".loader").css("display", "none");
  });

  $(".owl-carousel").owlCarousel({
    navText: [
      `<span class='custom-prev-button'><i class="fa-solid fa-caret-left"></i></span>`,
      `<span class='custom-next-button'><i class="fa-solid fa-caret-right"></i></span>`,
    ],
    mouseDrag: false,
    touchDrag: false,
    // pullDrag:false,
    // freeDrag:false,
    rewind: false,

    // dotsData: true,
    autoWidth: true,
    // stagePadding: 50,
    dots: false,
    loop: false,
    nav: true,
    // items: 3,

    // responsiveClass:true,
    //   responsive : {
    //     // breakpoint from 0 up
    //     0 : {
    //       items: 2,

    //     },
    //     // // breakpoint from 480 up
    //     // 576 : {

    //     // },
    //     // // breakpoint from 768 up
    //     // 768 : {

    //     // }
    // }
  });
});
