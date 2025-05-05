function timeConvert(minutes) {
  // first issue

  //  how do i retrieve the time from a string that represents minuets in js
  // 60 = minuets
  // 1000 = millieseconds

  const time = parseInt(minutes) * 60 * 1000;
  const totalTime = minutes / 60;
  const is24HoursMark = totalTime % 24 === 0 && totalTime !== 0;

  const date = new Date(time);
  let hour =
    date.getUTCHours() < 10 ? `0${date.getUTCHours()}` : date.getUTCHours();
  const min =
    date.getUTCMinutes() < 10
      ? `0${date.getUTCSeconds()}`
      : date.getUTCMinutes();

  if (is24HoursMark) {
    hour = 24;
  }

  //   return hour + "" + min;
  console.log(hour + ":" + min);
}

timeConvert(1000);
timeConvert(59);
timeConvert(1440);
