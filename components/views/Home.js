import html from "html-literal";

export default (state) => html`
  <section id="jumbotron">
    <h2> Momma Plans </h2>
    <h4 id="timebox" >The time is ${state.time.la}</h4>
    <h4>Weather forecast today is ${state.weather.temp}</h4>
 

  </section>
`;

//We need to export our template literals as a functional component.
//export function as default export ex. export default()=> html `html-literal`;
