import React, { Component } from "react";
import AddTodo from "../containers/GetLevelTest";
import VisibleTodoList from "../containers/VisibleTheLevelTest";
import Footer from "./Footer";
export default class extends Component {
  render() {
    return (
      <div className="container">
        <AddTodo />
        <VisibleTodoList />
        <Footer />
      </div>
    );
  }
}
