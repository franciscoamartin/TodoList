import React from "react";
import { Todo } from "../models/Todo";

const TodoList = () => {
  const todos: Todo[] = [
    {
      id: 1,
      title: "Ir no supermercado",
      done: false,
    },
    { id: 2, title: "Ir no escritório", done: false },
  ];
  return (
    <table className="uk-table">
      <caption>Lista de tarefas</caption>
      <thead>
        <tr>
          <th>#</th>
          <th>Tarefa</th>
          <th></th>
        </tr>
      </thead>
      <tbody></tbody>
    </table>
  );
};

export default TodoList;
