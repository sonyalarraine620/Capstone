import html from "html-literal";

export default () => html`
  <section id="jumbotron">
    <h2> My Capstone Project </h2>
    <button oneclick="./Todo.js">To Do List</button>
    <button id="CalendarButton">Calendar</button>
    <button id="DailyPlannerButton">Daily Planner</button>
  </section>
`;

