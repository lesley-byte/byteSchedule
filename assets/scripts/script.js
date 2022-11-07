var now = dayjs(); // real current time
var now0 = now; // time that starts at real but is modified
var today = now.date(); // real current day
var today0 = now0.date(); // day that starts at real but is modified
var thisDay = now.day(); // real current day of week
var thisDay0 = now0.day(); // day of week that starts at real but is modified
var thisHour = now.hour(); // real current hour
var thisHour0 = now0.hour(); // hour that starts at real but is modified

function logger() {
  console.log(localStorage.getItem("input1"));
  console.log(localStorage.getItem("input2"));
  console.log(localStorage.getItem("input3"));
  console.log(localStorage.getItem("input4"));
  console.log(localStorage.getItem("input5"));
  console.log(localStorage.getItem("input6"));
  console.log(localStorage.getItem("input7"));
  console.log(localStorage.getItem("input8"));
  console.log(localStorage.getItem("input9"));
}

function setColors() {
  var thisHour0 = now0.hour();
  for (let i = 9; i <= 17; i++) {
    if (i > thisHour0) {
      $(`#input${i - 8}`).addClass("future");
    } else if (i < thisHour0) {
      $(`#input${i - 8}`).addClass("past");
    } else {
      $(`#input${i - 8}`).addClass("present");
    }
  }
}
function placeholderSetter() {
  $("#input1").val(localStorage.getItem("input1"));
  $("#input2").val(localStorage.getItem("input2"));
  $("#input3").val(localStorage.getItem("input3"));
  $("#input4").val(localStorage.getItem("input4"));
  $("#input5").val(localStorage.getItem("input5"));
  $("#input6").val(localStorage.getItem("input6"));
  $("#input7").val(localStorage.getItem("input7"));
  $("#input8").val(localStorage.getItem("input8"));
  $("#input9").val(localStorage.getItem("input9"));
}
$("#currentDay").text("Today is " + now.format("dddd, MMMM D, YYYY"));
setColors();
logger();
placeholderSetter();
// JQuery event listener for the the button-addon1 to write the text in input1 to the label for input1
$("#button-addon1").click(function () {
  let input1 = $("#input1").val();
  $("#label1").text(input1);
  localStorage.setItem("input1", input1);
});

// JQuery event listener for the the button-addon2 to write the text in input2 to the label for input2
$("#button-addon2").click(function () {
  let input2 = $("#input2").val();
  $("#label2").text(input2);
  localStorage.setItem("input2", input2);
});

// JQuery event listener for the the button-addon3 to write the text in input3 to the label for input3
$("#button-addon3").click(function () {
  let input3 = $("#input3").val();
  $("#label3").text(input3);
  localStorage.setItem("input3", input3);
});

// JQuery event listener for the the button-addon4 to write the text in input4 to the label for input4
$("#button-addon4").click(function () {
  let input4 = $("#input4").val();
  $("#label4").text(input4);
  localStorage.setItem("input4", input4);
});

// JQuery event listener for the the button-addon5 to write the text in input5 to the label for input5
$("#button-addon5").click(function () {
  let input5 = $("#input5").val();
  $("#label5").text(input5);
  localStorage.setItem("input5", input5);
});

// JQuery event listener for the the button-addon6 to write the text in input6 to the label for input6
$("#button-addon6").click(function () {
  let input6 = $("#input6").val();
  $("#label6").text(input6);
  localStorage.setItem("input6", input6);
});

// JQuery event listener for the the button-addon7 to write the text in input7 to the label for input7
$("#button-addon7").click(function () {
  let input7 = $("#input7").val();
  $("#label7").text(input7);
  localStorage.setItem("input7", input7);
});

// JQuery event listener for the the button-addon8 to write the text in input8 to the label for input8
$("#button-addon8").click(function () {
  let input8 = $("#input8").val();
  $("#label8").text(input8);
  localStorage.setItem("input8", input8);
});

// JQuery event listener for the the button-addon9 to write the text in input9 to the label for input9
$("#button-addon9").click(function () {
  let input9 = $("#input9").val();
  $("#label9").text(input9);
  localStorage.setItem("input9", input9);
});
