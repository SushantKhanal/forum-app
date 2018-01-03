import React, { Component } from 'react';
import './App.css';

class App extends Component {

  state = {
    ram: "Root(default), contains categories",
    categories: {
                  category1:['post1a', 'post1b', 'post1c'],
                  category2:['post2a', 'post2b', 'post2c'], 
                  category3:['post3a', 'post3b', 'post3c']
                },
  }


  render() {
    return (
      <div className="App">
        <div className='listOfCategories'>
          <h2>{this.state.ram}</h2>
          <ul>
            {Object.keys(this.state.categories).map((category)=>(<li key={category}>{category}</li>))}
          </ul>
        </div>  

        <div className='allPosts'>
          <h3>Here are all posts</h3>
          <ul>
            {
              Object.values(this.state.categories).reduce((allPosts,category)=>{
                  allPosts = allPosts.concat(category)
                  return allPosts
              },[]).map((post)=>(<li key={post}>{post}</li>))
            }
          </ul>

        </div>
      </div>
    );
  }
}

export default App;
