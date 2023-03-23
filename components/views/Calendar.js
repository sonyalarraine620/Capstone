import html from "html-literal";


export default (state) => html`
<body id="calendarBody">
<div class="calendar">
    <h1> March 2023</h1>
<table>
    <thead>
    <tr>
        <th> Sun</th>
        <th> Mon</th>
        <th> Tues</th>
        <th> Wed</th>
        <th> Thu</th>
        <th> Fri </th>
        <th> Sat </th>
    </tr>
    </thead>

    <tbody>
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td>4</td>
        </tr>
        <tr>
            <td>5</td>
            <td>6</td>
            <td>7</td>
            <td>8</td>
            <td>9</td>
            <td>10</td>
            <td>11</td>
        </tr>
        <tr>
            <td>12</td>
            <td>13</td>
            <td>14</td>
            <td>15</td>
            <td>16</td>
            <td>17</td>
            <td>18</td>
        </tr>
        <tr>
            <td>19</td>
            <td>20</td>
            <td>21</td>
            <td>22</td>
            <td>23</td>
            <td>24</td>
            <td>25</td>
        </tr>
        <tr>
            <td>26</td>
            <td>27</td>
            <td>28</td>
            <td>29</td>
            <td>30</td>
            <td>31</td>
            <td>1</td>
        </tr>

    </tbody>
</table>
</div>
<div class="eventform">
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
            <label> Start </label>
            <input name="start">
        </div>
        <div> 
            <label> End </label>
            <input name="end">
        </div>
        <button name="create"> Create</button>
</form>
</div>
<div class="container">
${state.appointments
    .map(appointments => {
        return `<table id="eachAppt" class="item"><tr><td><b>Title</b></td></tr><tr><td> ${appointments.title}</td></tr><tr><td><b>Summary</b></td></tr><tr><td>${appointments.summary}</td></tr><tr><td><b>Start</b></td></tr><tr><td>
        ${appointments.start}</td></tr><tr><td><b>End</b></td></tr><tr><td>${appointments.end}</td></tr><td><a data-id="${
          appointments._id
        }" class="delete-action" href="#">Delete</a></td>
        </tr>
        </tr></table>`;
    })
    //Add update function & save after update
    .join("")}
</div>
</body>
`
//We need to export our template literals as a functional component.
//export function as default export ex. export default()=> html `html-literal`;
