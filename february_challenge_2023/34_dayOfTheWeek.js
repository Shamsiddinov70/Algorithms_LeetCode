var dayOfTheWeek = function (day, month, year) {
    var weekDays = {
        0: "Sunday",
        1: "Monday",
        2: "Tuesday",
        3: "Wednesday",
        4: "Thursday",
        5: "Friday",
        6: "Saturday"
    };

    let now = new Date(year, month - 1, day);

    let weekDay = now.getDay();
    return weekDays[weekDay];
};