import React, { Component } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
  state={
    progress:0
  }
  setProgress=async(progress)=>{
    this.setState({
      progress:progress
    })
  }
  render() {
    return (
      <Router>
        <div>
          <LoadingBar
            color='#f11946'
            progress={this.state.progress}
          />
          <Navbar />
          <Routes>
            <Route path="/"
              element={<News setProgress={this.setProgress} key="genral" catagory="general" />} />
            <Route path="/business"
              element={<News setProgress={this.setProgress} key="business" catagory="business" />} />
            <Route path="/entertainment"
              element={<News setProgress={this.setProgress} key="entertainment" catagory="entertainment" />} />
            <Route path="/general"
              element={<News setProgress={this.setProgress} key="general" catagory="general" />} />
            <Route path="/health"
              element={<News setProgress={this.setProgress} key="health" catagory="health" />} />
            <Route path="/science"
              element={<News setProgress={this.setProgress} key="science" catagory="science" />} />
            <Route path="/sports"
              element={<News setProgress={this.setProgress} key="sports" catagory="sports" />} />
            <Route path="/technology"
              element={<News setProgress={this.setProgress} key="technology" catagory="technology" />} />
          </Routes>
        </div>
      </Router>
    )
  }
}



