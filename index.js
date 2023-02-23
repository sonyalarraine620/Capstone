import { Header, Nav, Main, Footer} from "./components";
import * as store from "./store";
import Navigo from "navigo";
import{ capitalize } from "lodash";
import axios from "axios";

const router = new Navigo("/");


function render(state = store.Home) {
    document.querySelector("#root").innerHTML = `
    ${Header(state)}
    ${Nav(store.Links)}
    ${Main(state)}
    ${Footer()}
    `;
    router.updatePageLinks();
}
render();

router
  .on({
    "/": (params) => {
        let view = capitalize(params.data.view);
        render(store[view]);
    },
  })
  .resolve();
