import html from "html-literal";

export default (state) => html`
<header id="header">
    <h1>${state.header}</h1>
    <h3>Time to Plan</h3>
    <p>About/Contact</p>
</header>
`;

//We need to export our template literals as a functional component.
//export function as default export ex. export default()=> html `html-literal`;