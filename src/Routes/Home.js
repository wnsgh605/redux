import React, { useState } from "react";
import { connect } from "react-redux";
import ToDo from "../components/ToDo";
import { add } from "../store";

function Home({ state, addToDo, delToDo }) {
  const [text, setText] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    addToDo(text);
    setText("");
  };

  const onChange = (e) => {
    const text = e.target.value;
    setText(text);
  };

  return (
    <>
      <h1>TO DO</h1>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="To Dos"
          onChange={onChange}
          value={text}
        />
      </form>
      <ul>
        {state.map((toDo) => (
          <ToDo text={toDo.text} id={toDo.id} key={toDo.id}></ToDo>
        ))}
      </ul>
    </>
  );
}

function mapStateToProps(state) {
  return { state };
}

function mapDispatchToProps(dispatch) {
  return {
    addToDo: (text) => dispatch(add(text)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
