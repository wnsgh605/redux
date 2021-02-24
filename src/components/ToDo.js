import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { del } from "../store";

const ToDo = ({ text, delToDo, id }) => (
  <li>
    <Link to={`/${id}`}>{text}</Link>
    <button onClick={delToDo}>DEL</button>
  </li>
);

function mapDispatchToProps(dispatch, ownProps) {
  return {
    delToDo: () => dispatch(del(ownProps.id)),
  };
}

export default connect(null, mapDispatchToProps)(ToDo);
