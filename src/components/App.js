import React from "react";
import blogData from "../data/blog";
import Article from "./Article";
import Header from "./Header";
import About from "./About";

console.log(blogData);

function App() {
  return (
    <div className="App">
      <Header name={blogData.name} />
      You're on your own from here! Follow the deliverables; test things out in
      the browser as you write your code; and good luck!
      <About />
      <Article />
    </div>
  );
}

export default App;