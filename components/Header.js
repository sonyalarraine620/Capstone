import html from "html-literal";

export default (state) => html`
<header id="header">
    <h1>${state.header}</h1>
    <h3>Time to Plan</h3>
    <p>About/Contact</p>
</header>
`;