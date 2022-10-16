import axios from "axios";
import React, { useEffect, useState } from "react";
import Card, { CardVariant } from "./components/Card";
import EventsExample from "./components/EventsExample";
import List from "./components/List";
import TodoItem from "./components/TodoItem";
import UserItem from "./components/UserItem";
import { ITodo, IUser } from "./types/types";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import UserPage from "./components/UserPage";
import TodosPage from "./components/TodosPage";
import UserItemPage from "./components/UserItemPage";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Link to="/users">Users</Link>
        <Link to="/todos">Todos</Link>
      </div>
      {/* <EventsExample />
        <Card
          width="200px"
          height="200px"
          variant={CardVariant.primary}
          onClick={(num) => console.log("Hello", num)}
        >
          <button>Button</button>
        </Card> */}
      <Routes>
        <Route path="/users" element={<UserPage />}>
          <Route path="/users/:id" element={<UserItemPage />} />
        </Route>
        <Route path="/todos" element={<TodosPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
