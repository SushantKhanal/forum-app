import React, { Component } from 'react'
import './App.css'
import categories from './api-server/categories.js'
import posts from './api-server/posts.js'

class App extends Component {

  state = {
    cats: [],            
    title: [],
    body: [],
  }

  componentDidMount() {

    categories.getAll().then((cats)=>{
      if (cats.error) {
        console.log('error')
      }
      //console.log(cats.categories)
      this.setState({cats:cats.categories.map((obj)=>(obj.name))})
    })

    posts.getAll().then((postss)=>{
      if (postss.error) {
        console.log('error')
      }
      console.log(postss)
      this.setState({title:postss.map((obj)=>(obj.title))})
      this.setState({body:postss.map((obj)=>(obj.body))})      
    })

  }

  render() {    
    return (
      <div className="App">
        <div className='listOfCategories'>
          <h2>Categories</h2>
          <ul>
            {this.state.cats.map((category)=>(<li key={category}>{category}</li>))}
          </ul>
        </div>  

        <div className='allPosts'>
          <h3>Posts</h3>
          <ul>
            {
              this.state.title.map((title)=>(<li key={title}>{title}<button>See more</button></li>))
            }
          </ul>

        </div>
      </div>
    );
  }
}

export default App;
