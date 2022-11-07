var now = dayjs(); // real current time
var now0 = now; // time that starts at real

function logger() {
  for (let i = 1; i <= 9; i++) {
    console.log(localStorage.getItem(`input${i}`));
  }
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
  for (let i = 1; i <= 9; i++) {
    $(`#input${i}`).val(localStorage.getItem(`input${i}`));
  }
}
$("#currentDay").text("Today is " + now.format("dddd, MMMM D, YYYY"));
setColors();
logger();
placeholderSetter();
// JQuery event listener for the the button-addon1 to write the text in input1 to the label for input1
function eventListeners() {
  for (let i = 1; i <= 9; i++) {
    console.log(i);
    $(`#button-addon${i}`).click(function () {
      let input = $(`#input${i}`).val();
      console.log(input);
      $(`#label${i}`).text(input);
      localStorage.setItem(`input${i}`, input);
    });
  }
}
eventListeners();
