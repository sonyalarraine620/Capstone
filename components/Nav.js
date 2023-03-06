import html from "html-literal"

export default links => html`
<nav id="nav">
    <i class="fas fa-bars"></i>
    <ul class="hidden--mobile nav-links">
        ${links
        .map(
            link =>`
          <button id="navButton">
          <a href="/${link.title}" title="${link.title}" data-navigo>${link.text}</a></button>  `
        )
        .join("")}
    </ul>
</nav>
`;

//We need to export our template literals as a functional component.

//Nav.js in the components folder will use the links file we will create in the store folder. 