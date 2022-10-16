import axios from "axios";
import React, { FC, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { IUser } from "../types/types";

// interface UserItemPageParams {
//   id: number;
// }

type UserItemPageParams = {
  id: number;
};

const UserItemPage: FC = () => {
  const [user, setUser] = useState<IUser | null>(null);

  const navigate = useNavigate<UserItemPageParams>();

  useEffect(() => {
    fetchUser();
  }, []);

  async function fetchUser() {
    try {
      const response = await axios.get<IUser>(
        "https://jsonplaceholder.typicode.com/users/" +
          navigate(`/users/${navigate.id}`)
      );
      setUser(response.data);
    } catch (error) {
      alert(error);
    }
  }
  return (
    <div>
      <button>Back</button>
      <h1>Page of {user?.name}</h1>
      <div>{user?.email}</div>
    </div>
  );
};

export default UserItemPage;
