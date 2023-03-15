import html from "html-literal";

export default () => html`
<section id="Todo">
    <h1>To Do</h1>
    <h3>"Action is the foundational key to all success." -Pablo Picasso</h3>
    <p> Feeling productive? Let's add to our To Do list</p>
    <form action="https://formspree.io/f/mbjekqoe" method="POST">
        <div>
            <label> Title </label>
            <input name="title">
        </div>
        <div>
            <label> Summary </label>
            <input name="summary">
        </div>
        <div>
            <label> Date Created </label>
            <input name="date">
        </div>
        <div>
            <label> Date due </label>
            <input name="due">
        </div>
        <div>
            Priority
            <div>
                <label for="urgent"> Urgent </label>
                <input type="radio" name="urgent" id="urgent" value="urgent">
            </div>
            <div>
                <label for="medium"> medium </label>
                <input type="radio" name="medium" id="medium" value="medium">
            </div>
            <div>
                <label for="low"> low </label>
                <input type="radio" name="low" id="low" value="low">
            </div>
        </div>
        <button> Create</button>

    </form>
</section>
`//add form, How do I make it so it doesnt leave the URL when submitting form
//We need to export our template literals as a functional component.
//export function as default export ex. export default()=> html `html-literal`;
