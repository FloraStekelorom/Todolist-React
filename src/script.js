const checkStatus = (response) => {
  if (response.ok) {
    // .ok returns true if response status is 200-299
    return response;
  }
  throw new Error('Request was either a 404 or 500');
}

const json = (response) => response.json()

class Todolist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newTask: '',
      tasks: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({ newTask: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
  }
  render () {
    const { newTask, tasks } = this.state;
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2 className="mb-3">To Do List</h2>
            {tasks.length > 0 ? tasks.map((task) => {
              return null;
            }) : <p>no tasks here</p>}
            <form onSubmit={this.handleSubmit} className="form-inline my-4">
              <input type="text" className="form-control mr-sm-2" placeholder="New task" value={newTask} onChange={this.handleChange}/>
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}
ReactDOM.render(
  <Todolist />,
  document.getElementById('root')
);
