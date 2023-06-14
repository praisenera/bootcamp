$(document).ready(function () {
  let l_email;
  let l_date;
  //checkef if nasa storage
  if (sessionStorage.getItem("last_email") != null) {
    l_email = sessionStorage.getItem("last_email");
    $("#last_email").text(l_email);
  }

  //   sessionStorage.removeItem("last_email");
  //   sessionStorage.clear("last_email");

  if (sessionStorage.getItem("last_time") != null) {
    l_time = sessionStorage.getItem("last_date");
    $("#last_date").text(l_date);
  }
  //trigger when the submit is click
  $("#email_register").submit(function (x) {
    let l_email = $("#email").val();
    let l_date = new Date();
    $("#last_email").text(l_email);
    $("#last_date").text(l_date);
    sessionStorage.setItem("last_email", l_email);
    sessionStorage.setItem("last_date", l_date);

    x.preventDefault();
  });
});
