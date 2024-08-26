// Loading the page
document.addEventListener("DOMContentLoaded", function () {
  // Hour, minute and second hand elements
  const hourHand = document.querySelector(".hour-hand");
  const minuteHand = document.querySelector(".minute-hand");
  const secondHand = document.querySelector(".second-hand");

  // Defining a function that is called repeatedly to update the hands of the clock
  function setDate() {
    // Get the current time as a Date object
    const now = new Date();

    // Calculates the angle in degrees for the second hand based on the current seconds
    const seconds = now.getSeconds();
    const secondsDegrees = (seconds / 60) * 360 + 90;

    // Set the transformation style of the second arrow element to return it to the correct angle
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

    // Calculate the angle in degrees for the minute hand based on the current minutes and seconds
    const minutes = now.getMinutes();
    const minutesDegrees = (minutes / 60) * 360 + (seconds / 60) * 6 + 90;

    // Set the transform style of the minute hand element to rotate it to the correct angle
    minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;

    // Calculate the angle in degrees for the hour hand based on the current hours, minutes, and seconds
    const hours = now.getHours();
    const hoursDegrees = (hours / 12) * 360 + (minutes / 60) * 30 + 90;

    // Set the transform style of the hour hand element to rotate it to the correct angle
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
  }

  // Call the setDate function every 1000 milliseconds (1 second) to update the clock hands
  setInterval(setDate, 1000);
});
