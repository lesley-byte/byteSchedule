// This will all be JQuery
class julianDay {
  constructor(dayOfYear) {
    this.dayOfYear = dayOfYear;
    for (let i = 0; i < 24; i++) {
      let timeOfDay = i;
      this[timeOfDay] = "";
    }
  }
}

class nonLeapYear {
  constructor(specYear) {
    for (let i = 1; i < 366; i++) {
      let dayOfSpecYear = i;
      this[dayOfSpecYear] = new julianDay(i);
    }
  }
}
class leapYear {
  constructor(otherYear) {
    for (let i = 1; i < 367; i++) {
      let dayOfOtherYear = i;
      this[dayOfOtherYear] = new julianDay(i);
    }
  }
}
var thursJan10 = new nonLeapYear("2022")[10];
thursJan10[10] = "doctor's Appointment";
console.log(thursJan10);
var now = dayjs();

$("#currentDay").css({ "background-color": "#d9e9e8", color: "#1a1a1a" });
$("#currentDay").text("Today is " + now.format("dddd, MMMM D, YYYY"));
