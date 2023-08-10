import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import "./App.css";
import React, {Component} from "react";
const baseUrl ="https://jsonplaceholder.typicode.com/users";


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      loading: false,
    };
  }
  componentDidMount() {
    this.getUsers();

  }
  getUsers =() => {
    this.setState({loading:true});
    axios.get(baseUrl).then((res)=> {
      setInterval(() =>{
        this.setState({ loading:false,users: res.data});
      },1000);
    });
};
render() {
  const text = this.state.loading
  ? "loading..."
  : this.state.users.map((user)=>(
    <li key={user.id}>
      {user.username}:{user.name}
    </li>
  ));
  return (
    <div>
      <ul>
        {text}
      </ul>
    </div>
  );
}
}
