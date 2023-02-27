import html from "html-literal";

export default (state) => html`
  <section id="jumbotron">
    <h2> My Capstone Project </h2>
    <!-- <h4>The time is ${state.time}</h4> -->
    <h4>Weather forecast today is ${state.weather.temp}</h4>
    <button oneclick="./Todo.js">To Do List</button>
    <button id="CalendarButton">Calendar</button>
    <button id="DailyPlannerButton">Daily Planner</button>

  </section>
`;

//We need to export our template literals as a functional component.
//export function as default export ex. export default()=> html `html-literal`;
