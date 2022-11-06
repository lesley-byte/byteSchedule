// This will all be JQuery
class julianDay {
  constructor(dayOfYear) {
    this.dayOfYear = dayOfYear;
    for (let i = 9; i < 18; i++) {
      let timeOfDay = i;
      this[timeOfDay] = "";
    }
  }
}

var now = dayjs();
var today = now.date();
var thisMonth = now.month();
var thisYear = now.year();
var thisDay = now.day();
var thisHour = now.hour();

console.log(now);

$("#currentDay").css({ "background-color": "#d9e9e8", color: "#1a1a1a" });
$("#currentDay").text("Today is " + now.format("dddd, MMMM D, YYYY"));

//if hour is greater than 5pm, then set background color of .input-group to grey
if (thisHour > 17) {
  $(".input-group").css("background-color", "#d9e9e8");
} else if (thisHour <= 16 && thisHour > 15) {
  $(".input-group").css("background-color", "#d9e9e8");
  $("#input9").css({ "background-color": "green" });
  $("#input8").css({ "background-color": "red" });
} else if (thisHour <= 15 && thisHour > 14) {
  $(".input-group").css("background-color", "#d9e9e8");
  $("#input9").css({ "background-color": "green" });
  $("#input8").css({ "background-color": "green" });
  $("#input7").css({ "background-color": "red" });
} else if (thisHour <= 14 && thisHour > 13) {
  $(".input-group").css("background-color", "#d9e9e8");
  $("#input9").css({ "background-color": "green" });
  $("#input8").css({ "background-color": "green" });
  $("#input7").css({ "background-color": "green" });
  $("#input6").css({ "background-color": "red" });
} else if (thisHour <= 13 && thisHour > 12) {
  $(".input-group").css("background-color", "#d9e9e8");
  $("#input9").css({ "background-color": "green" });
  $("#input8").css({ "background-color": "green" });
  $("#input7").css({ "background-color": "green" });
  $("#input6").css({ "background-color": "green" });
  $("#input5").css({ "background-color": "red" });
} else if (thisHour <= 12 && thisHour > 11) {
  $(".input-group").css("background-color", "#d9e9e8");
  $("#input9").css({ "background-color": "green" });
  $("#input8").css({ "background-color": "green" });
  $("#input7").css({ "background-color": "green" });
  $("#input6").css({ "background-color": "green" });
  $("#input5").css({ "background-color": "green" });
  $("#input4").css({ "background-color": "red" });
} else if (thisHour <= 11 && thisHour > 10) {
  $(".input-group").css("background-color", "#d9e9e8");
  $("#input9").css({ "background-color": "green" });
  $("#input8").css({ "background-color": "green" });
  $("#input7").css({ "background-color": "green" });
  $("#input6").css({ "background-color": "green" });
  $("#input5").css({ "background-color": "green" });
  $("#input4").css({ "background-color": "green" });
  $("#input3").css({ "background-color": "red" });
} else if (thisHour <= 10 && thisHour > 9) {
  $(".input-group").css("background-color", "#d9e9e8");
  $("#input9").css({ "background-color": "green" });
  $("#input8").css({ "background-color": "green" });
  $("#input7").css({ "background-color": "green" });
  $("#input6").css({ "background-color": "green" });
  $("#input5").css({ "background-color": "green" });
  $("#input4").css({ "background-color": "green" });
  $("#input3").css({ "background-color": "green" });
  $("#input2").css({ "background-color": "red" });
} else if (thisHour <= 9 && thisHour > 8) {
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
} else if (thisHour < 8 && thisHour > 7) {
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
