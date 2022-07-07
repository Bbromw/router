import React from "react";
import { linkContext } from "../store/context";
import { useContext } from "react";
import { action } from "../store";

export const Another = () => {
  const [, state, dispatch] = useContext(linkContext);
  return (
    <>
      <input
        value={state.todo}
        onChange={(e) => {
          dispatch(action.setTodo(e.target.value));
        }}
      />
      <button
        onClick={() => {
          dispatch(action.addTodo(state.todo));
        }}
      >
        Add
      </button>
      <div>
        {state.todos.map((todo, index) => {
          return (
            <div key={index}>
              {todo}
              <span
                style={{ marginLeft: "10px", color: "red" }}
                onClick={() => {
                  dispatch(action.deleteTodo(index));
                }}
              >
                X
              </span>
            </div>
          );
        })}
      </div>
    </>
  );
};
