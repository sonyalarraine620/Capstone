import { Header, Nav, Main, Footer} from "./components";
import * as store from "./store";
import Navigo from "navigo";
import{ capitalize } from "lodash";
import axios from "axios";
import dotenv from "dotenv";



dotenv.config();
const router = new Navigo("/");


function render(state = store.Home) {
    document.querySelector("#root").innerHTML = `
    ${Header(state)}
    ${Nav(store.Links)}
    ${Main(state)}
    ${Footer()}
    `;
    afterRender(state);
    router.updatePageLinks();
}


function afterRender(state) {
  // add menu toggle to bars icon in nav bar
  document.querySelector(".fa-bars").addEventListener("click", () => {
    document.querySelector("nav > ul").classList.toggle("hidden--mobile");
  });
console.log(state.view);

//event handler for to do list create & delete
  if (state.view === "Todo") {
    document.querySelector("form").addEventListener("submit", event => {
      event.preventDefault();

      const inputList = event.target.elements;
      console.log("Input Element List", inputList);

      const requestData = {
        title: inputList.title.value,
        summary: inputList.summary.value,
        priority: inputList.priority.value,
      };
      console.log("request Body", requestData);

      axios
        .post(`${process.env.TO_DO_API}/todos`, requestData)
        .then(response => {
          store.Todo.todos.push(response.data);
          router.navigate("/todos");//added s
        })
        .catch(error => {
          console.log("It puked", error);
        });

    });
  // event handlet for
    document.querySelectorAll(".delete-action").forEach(element => {
      element.addEventListener("click", event => {
        const id = event.target.dataset.id;
        const doit = confirm(`Are your sure you want to delete ${id}`);
        if (doit) {
          axios
            .delete(`${process.env.TO_DO_API}/todos/${id}`)
            .then(response => {

              store.Todo.todos = state.todos.filter(todo => todo._id !== id )
              console.log("response", response);
              router.navigate("/todo");
            });
        }
      });
    });
  };  

//Event handler for calendar create & delete
if (state.view === "Calendar") {
  document.querySelector("form").addEventListener("submit", event => {
    event.preventDefault();

    const inputList = event.target.elements;
    console.log("Input Element List", inputList);

    const requestData = {
      title: inputList.title.value,
      summary: inputList.summary.value,
      start: inputList.start.value,
      end: inputList.end.value,
    };
    console.log("request Body", requestData);

    axios
      .post(`${process.env.TO_DO_API}/appointments`, requestData)
      .then(response => {
        store.Calendar.appointments.push(response.data);
        router.navigate("/calendar");
      })
      .catch(error => {
        console.log("It puked", error);
      });

  });
// event handlet for
  document.querySelectorAll(".delete-action").forEach(element => {
    element.addEventListener("click", event => {
      const id = event.target.dataset.id;
      const doit = confirm(`Are your sure you want to delete ${id}`);
      if (doit) {
        axios
          .delete(`${process.env.TO_DO_API}/appointments/${id}`)
          .then(response => {

            store.Calendar.appointments = state.appointments.filter(appointment => appointment._id !== id )
            console.log("response", response);
            router.navigate("/calendar");
          });
      }
    });
  });
};  
// CALENDAR FUNCTION? // THIS NEEDS TO BE DELETED IF IT IS NOT USED

if (state.view === "calendar") {

  //Add functions here for calendar

    axios
      .post(`${process.env.TO_DO_API}/todos`, requestData)
      .then(response => {
        store.Todo.todos.push(response.data);
        router.navigate("/calendar");
      })
      .catch(error => {
        console.log("It puked", error);
      });

  };

}

router.hooks({
  before: (done, params) => {
    const view =
      params && params.data && params.data.view
        ? capitalize(params.data.view)
        : "Home"; // Add a switch case statement to handle multiple routes
    // Add a switch case statement to handle multiple routes
    switch (view) {
      case "Home":
        axios
          .get(
            // Replace the key provided here with your own key from openweathermap
            `https://api.openweathermap.org/data/2.5/weather?q=st%20louis&appid=${process.env.OPEN_WEATHER_MAP_API_KEY}`
          )
          .then(response => {
            console.log(response.data);
            const kelvinToFahrenheit = kelvinTemp =>
              Math.round((kelvinTemp - 273.15) * (9 / 5) + 32);

            // Save Data into state
            store.Home.weather = {};
            store.Home.weather.city = response.data.name;
            store.Home.weather.temp = kelvinToFahrenheit(
              response.data.main.temp
            );
            store.Home.weather.feelsLike = kelvinToFahrenheit(
              response.data.main.feels_like
            );
            store.Home.weather.description =
              response.data.weather[0].description;
            console.log(store.Home.weather);

            done();
          });
          break;
      case "Todo":
          console.log("getting todos");
            // New Axios get request utilizing already made environment variable
            axios
              .get(`${process.env.TO_DO_API}/Todo`)
              .then(response => {
                // Storing retrieved data in state
                store.Todo.todos = response.data;
                console.log(response.data);
                done();
              })
              .catch(error => {
                console.log("It puked ", error);
                done();
              });
            break;
      case "Calendar":
              console.log("getting appointments");
                // New Axios get request utilizing already made environment variable
                axios
                  .get(`${process.env.TO_DO_API}/appointments`)
                  .then(response => {
                    // Storing retrieved data in state
                    store.Calendar.appointments = response.data;
                    console.log(response.data);
                    done();
                  })
                  .catch(error => {
                    console.log("It puked", error);
                    done();
                  });
                break;

              // New Axios get request utilizing already made environment variable
              axios
                .get(`${process.env.TO_DO_API}/appointments/${id}`)
                .then(response => {
                  // Storing retrieved data in state
                store.Appointments.appointments = null;
                store.Appointments.event = {
                  id: response.data._id,
                  title: response.data.customer,
                  start: new Date(response.data.start),
                  end: new Date(response.data.end)
                }
                  
                  console.log(response.data);
                  done();
                })
                .catch(error => {
                  console.log("It puked", error);
                  done();
                });
              break;
       default:
              done();
    
    }
  },
  already: params => {
    const view =
      params && params.data && params.data.view
        ? capitalize(params.data.view)
        : "Home";

    render(store[view]);
  }
});

router
  .on({
    "/": () => render(),
    ":view": params => {
      let view = capitalize(params.data.view);
      render(store[view]);
    }
  })
  .resolve();