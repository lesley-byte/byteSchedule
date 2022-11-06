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

var now = dayjs(); // real current time
var now0 = now; // time that starts at real but is modified
var today = now.date(); // real current day
var today0 = now0.date(); // day that starts at real but is modified
var thisDay = now.day(); // real current day of week
var thisDay0 = now0.day(); // day of week that starts at real but is modified
var thisHour = now.hour(); // real current hour
var thisHour0 = now0.hour(); // hour that starts at real but is modified
// add event listener to the button0 that will increase now by 1 day
$("#increment-btn").click(function () {
  now0 = now0.add(1, "day");
  today0 = now0.date();
  thisDay0 = now0.day();
  thisHour0 = now0.hour();
  // update the date on the page
  $("#currentDay").text(now0.format("dddd, MMMM D, YYYY"));
  // update the day of the week
  console.log(now);
  console.log(thisHour0 + "is thisHour0");
  console.log(thisHour + "is thisHour");
  console.log(today + "is today");
  console.log(today0 + "is today0");
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
});

$("#decrement-btn").click(function () {
  now0 = now0.subtract(1, "day");
  today0 = now0.date();
  thisDay0 = now0.day();
  thisHour0 = now0.hour();
  // update the date on the page
  $("#currentDay").text(now0.format("dddd, MMMM D, YYYY"));
  // update the day of the week
  console.log(now);
  console.log(thisHour0 + "is thisHour0");
  console.log(thisHour + "is thisHour");
  console.log(today + "is today");
  console.log(today0 + "is today0");
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
});

console.log(now);
console.log(thisHour0 + "is thisHour0");
console.log(thisHour + "is thisHour");

$("#currentDay").css({ "background-color": "#d9e9e8", color: "#1a1a1a" });
$("#currentDay").text("Today is " + now.format("dddd, MMMM D, YYYY"));
if (thisDay0 < thisDay) {
  $("#input9").css({ "background-color": "green" });
  $("#input8").css({ "background-color": "green" });
  $("#input7").css({ "background-color": "green" });
  $("#input6").css({ "background-color": "green" });
  $("#input5").css({ "background-color": "green" });
  $("#input4").css({ "background-color": "green" });
  $("#input3").css({ "background-color": "green" });
  $("#input2").css({ "background-color": "green" });
  $("#input1").css({ "background-color": "green" });
} else if (thisDay0 > thisDay) {
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
