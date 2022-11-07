export function setColors() {
  if (today0 > today) {
    $("#input9").css({ "background-color": "green" });
    $("#input8").css({ "background-color": "green" });
    $("#input7").css({ "background-color": "green" });
    $("#input6").css({ "background-color": "green" });
    $("#input5").css({ "background-color": "green" });
    $("#input4").css({ "background-color": "green" });
    $("#input3").css({ "background-color": "green" });
    $("#input2").css({ "background-color": "green" });
    $("#input1").css({ "background-color": "green" });
  } else if (today0 < today) {
    $("#input9").css({ "background-color": "dimgrey" });
    $("#input8").css({ "background-color": "dimgrey" });
    $("#input7").css({ "background-color": "dimgrey" });
    $("#input6").css({ "background-color": "dimgrey" });
    $("#input5").css({ "background-color": "dimgrey" });
    $("#input4").css({ "background-color": "dimgrey" });
    $("#input3").css({ "background-color": "dimgrey" });
    $("#input2").css({ "background-color": "dimgrey" });
    $("#input1").css({ "background-color": "dimgrey" });
    //if hour is greater than 5pm, then set background color of .input-group to grey
  } else if (thisHour0 > 17) {
    // id input1 through input9 have background color of dark grey
    $(".input-group").css("background-color", "#d9e9e8");
  } else if (thisHour0 <= 16 && thisHour0 > 15) {
    $(".input-group").css("background-color", "#d9e9e8");
    $("#input9").css({ "background-color": "green" });
    $("#input8").css({ "background-color": "red" });
  } else if (thisHour0 <= 15 && thisHour0 > 14) {
    $(".input-group").css("background-color", "#d9e9e8");
    $("#input9").css({ "background-color": "green" });
    $("#input8").css({ "background-color": "green" });
    $("#input7").css({ "background-color": "red" });
  } else if (thisHour0 <= 14 && thisHour0 > 13) {
    $(".input-group").css("background-color", "#d9e9e8");
    $("#input9").css({ "background-color": "green" });
    $("#input8").css({ "background-color": "green" });
    $("#input7").css({ "background-color": "green" });
    $("#input6").css({ "background-color": "red" });
  } else if (thisHour0 <= 13 && thisHour0 > 12) {
    $(".input-group").css("background-color", "#d9e9e8");
    $("#input9").css({ "background-color": "green" });
    $("#input8").css({ "background-color": "green" });
    $("#input7").css({ "background-color": "green" });
    $("#input6").css({ "background-color": "green" });
    $("#input5").css({ "background-color": "red" });
  } else if (thisHour0 <= 12 && thisHour0 > 11) {
    $(".input-group").css("background-color", "#d9e9e8");
    $("#input9").css({ "background-color": "green" });
    $("#input8").css({ "background-color": "green" });
    $("#input7").css({ "background-color": "green" });
    $("#input6").css({ "background-color": "green" });
    $("#input5").css({ "background-color": "green" });
    $("#input4").css({ "background-color": "red" });
  } else if (thisHour0 <= 11 && thisHour0 > 10) {
    $(".input-group").css("background-color", "#d9e9e8");
    $("#input9").css({ "background-color": "green" });
    $("#input8").css({ "background-color": "green" });
    $("#input7").css({ "background-color": "green" });
    $("#input6").css({ "background-color": "green" });
    $("#input5").css({ "background-color": "green" });
    $("#input4").css({ "background-color": "green" });
    $("#input3").css({ "background-color": "red" });
  } else if (thisHour0 <= 10 && thisHour0 > 9) {
    $(".input-group").css("background-color", "#d9e9e8");
    $("#input9").css({ "background-color": "green" });
    $("#input8").css({ "background-color": "green" });
    $("#input7").css({ "background-color": "green" });
    $("#input6").css({ "background-color": "green" });
    $("#input5").css({ "background-color": "green" });
    $("#input4").css({ "background-color": "green" });
    $("#input3").css({ "background-color": "green" });
    $("#input2").css({ "background-color": "red" });
  } else if (thisHour0 <= 9 && thisHour0 > 8) {
    $(".input-group").css("background-color", "#d9e9e8");
    $("#input9").css({ "background-color": "green" });
    $("#input8").css({ "background-color": "green" });
    $("#input7").css({ "background-color": "green" });
    $("#input6").css({ "background-color": "green" });
    $("#input5").css({ "background-color": "green" });
    $("#input4").css({ "background-color": "green" });
    $("#input3").css({ "background-color": "green" });
    $("#input2").css({ "background-color": "green" });
    $("#input1").css({ "background-color": "red" });
  } else if (thisHour0 < 8 && thisHour0 > 7) {
    $("#input9").css({ "background-color": "green" });
    $("#input8").css({ "background-color": "green" });
    $("#input7").css({ "background-color": "green" });
    $("#input6").css({ "background-color": "green" });
    $("#input5").css({ "background-color": "green" });
    $("#input4").css({ "background-color": "green" });
    $("#input3").css({ "background-color": "green" });
    $("#input2").css({ "background-color": "green" });
    $("#input1").css({ "background-color": "green" });
  }
}
