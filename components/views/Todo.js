import html from "html-literal";

export default (state) => html`
<section id="Todo">
    <h1>To Do</h1>
    <h3>"Action is the foundational key to all success." -Pablo Picasso</h3>
    <p> Feeling productive? Let's add to our To Do list</p>
    <form method="POST">
        <div>
            <label> Title </label>
            <input name="title">
        </div>
        <div>
            <label> Summary </label>
            <input name="summary">
        </div>
        <div>
            Priority
            <div>
                <label for="urgent"> Urgent </label>
                <input type="radio" name="priority" id="urgent" value="urgent">
            </div>
            <div>
                <label for="medium"> medium </label>
                <input type="radio" name="priority" id="medium" value="medium">
            </div>
            <div>
                <label for="low"> low </label>
                <input type="radio" name="priority" id="low" value="low">
            </div>
        </div>
        <button> Create</button>

    </form>
    <table id="todos">
    <tr>
  <th>Title</th>
  <th>Summary</th>
  <th>Priority</th>
  <th>Id</th>
  <th>Actions</th>
</tr>
${state.todos
    .map(todos => {
        return `<tr><td> ${todos.title}</td><td>${todos.summary}</td><td>
        ${todos.priority}</td><td><a data-id="${todos._id} class="delete-action" href="#"> Delete</a></td>
        </tr>`;
    })
    .join("")}
    </table>
</section>
`//add form, How do I make it so it doesnt leave the URL when submitting form
//We need to export our template literals as a functional component.
//export function as default export ex. export default()=> html `html-literal`;
