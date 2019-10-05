import React from "react";
import FriendList from "./Component/friendsList";
import Form from "./Component/form";
import styled from 'styled-components';
import { Route , Switch, Redirect} from "react-router-dom";
import axios from "axios";

const AppContainer = styled.div`
position:fixed;
width:100%;
background-image:url('https://images.unsplash.com/photo-1519750783826-e2420f4d687f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2734&q=80');
background-size:cover;

`;

class App extends React.Component {
  state = {
    projects: [],
    project:{},
    actions:[],
    action:{},
    errorMessage: "",
    name: "",
    description: "",
    added:false
  };
  getProjects = async () => {
    try {
      const axoisData = await axios.get("http://localhost:2020/api/projects");
      this.setState({ projects: axoisData.data });
    } catch (err) {
      this.setState({
        errorMessage: err.message
      });
    }
  };


  getProject = async (id) => {
    try {
      const axoisData = await axios.get(`http://localhost:2020/api/projects/${id}`);
      this.setState({ project: axoisData.data });
    } catch (err) {
      this.setState({
        errorMessage: err.message
      });
    }
  };
  postProjects = async (e,b) => {
    try {
      e.preventDefault();
      console.log(this.state.newName ,this.state.newBio)
      await axios.post("http://localhost:2020/api/projects", {
        name : this.state.name,
        description : this.state.description,
      });
      // eslint-disable-next-line no-restricted-globals
      location.pathname=(`/`)
      return this.getProjects();
    } catch (err) {
      this.setState({
        errorMessage: err.message
      });
    }
  };
  updateProject = async(e, id) => {
    e.preventDefault()
    try {
      await axios.put(
        `http://localhost:2020/api/projects/${id}`,
        {
          name: this.state.name,
          description: this.state.description,
        }
      );
        // eslint-disable-next-line no-restricted-globals
      location.pathname=(`/`)
      return this.getProject();
    } catch (err) {
      this.setState({
        errorMessage: err.message
      });
    }
  };
  deleteProject= async id => {
    try {
      await axios.delete(`http://localhost:2020/api/projects/${id}`);
      return this.getProjects();
    } catch (err) {
      this.setState({
        errorMessage: err.message
      });
    }
  };
  onChangeHandler = (e, text) => {
    console.log(e, text)
    text === "name"  && this.setState({ name: e });
    text === "description" && this.setState({ description: e });
  };

  componentDidMount() {
    this.getProjects();
    
  }
  render() {
    return (
      <AppContainer>
      <Switch>
      <Route
      exact
      path="/"
      render={props => (

        <FriendList
          data={this.state.projects}
          delete={this.deleteFriend}
          {...props}
        />
      )}
    />
    <Route
    path="/add"
    render={props => (
      this.state.added ? <Redirect to='/' /> :
      <Form
        inputValue={this.onChangeHandler}
        submit={this.postProjects}
        {...props}
      />
    )}
  /> 
        <Route
          path="/:id/update"
          render={props => (
            <Form
               data={this.state.projects}
               get={this.getProjects}
              inputValue={this.onChangeHandler}
              submit={this.updateProject}
              {...props}
            />
          )}
        />
       
        </Switch>
      </AppContainer>
    );
  }
}

export default App;
