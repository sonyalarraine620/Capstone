import html from "html-literal";
import plan from "../../assets/plan.jpg";

export default (state) => html`
  <section id="jumbotron">
    <div class="homecontainer">
    <div class="fontcontainer">
   <h2> Let us help you carry the weight of your load</h2>
  <p> MommaBrain is here to help you plan your days</p>
    <h4>Weather forecast today is ${state.weather.temp}</h4>
    </div>
    <div>
  <img class="plan" src="${plan}" />
    </div>
    </div>

  </section>
`;

//We need to export our template literals as a functional component.
//export function as default export ex. export default()=> html `html-literal`;
