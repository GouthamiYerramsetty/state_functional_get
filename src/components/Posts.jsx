import React, { Component } from "react";
import axios from "axios";
import Post from "./Post";

class Posts extends Component {
  constructor() {
    super();
    this.state = {
      allData: [],
    };
  }

  /* getData = () => {
    console.log("Inside getData now...........")
    axios.get("https://jsonplaceholder.typicode.com/posts")
         .then ((response) => {
            console.log(response)
            })
          .catch( (error) => {
                console.log(error)
            });
  }; */

  getData = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        console.log(response.data);
        this.setState({
          posts: response.data,
        });
      })
      .catch((error) => console.log(error));
  };

  

//   componentDidMount(){
//     this.getData();
//   }

 onClickHandler = () => {
        console.log("I clicked button....");
        this.getData();
  };
 
  render() {
    console.log('came inside render')
    return (
      <div>
         <button onClick={this.onClickHandler} className="btn btn-primary">
          Get Data
        </button> 
       {/*  <h1 className="text-center">All Posts</h1>
        <table className="table table-bordered">
          <thead className="thead-dark">
            <tr>
              <th>Title</th>
              <th>Body</th>
            </tr>
          </thead>
          <tbody>
            {this.state.allData.map((post) => <Post data = {post}/>)}
          </tbody>
        </table> */}
      </div>
    );
  };
}
export default Posts;