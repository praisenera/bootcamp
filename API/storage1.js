let f_name;
let l_name;

$(document).ready(function () {
  if (localStorage.getItem("first_name") != null) {
    f_name = localStorage.getItem("first_name");
    $("#first_name").val(first_name);
  }
  if (localStorage.getItem("last_name") != null) {
    l_name = localStorage.getItem("last_name");
    $("#last_name").val(l_name);
  }
  //   let username;
  //   let password;

  //   if (localStorage.getItem("username") != null) {
  //     username = localStorage.getItem("username");
  //     $("#username").val(username);
  //   }
  //   if (localStorage.getItem("password") != null) {
  //     password = localStorage.getItem("pass");
  //     $("#pass").val(password);
  //   }

  //   $("#sign_in").submit(function () {
  //     let username = $("#username").val();
  //     let password = $("#pass").val();
  //     $("#username").val(username);
  //     $("#pass").val(password);
  //     localStorage.setItem("username", username);
  //     localStorage.setItem("pass", password);
  //   });
});
