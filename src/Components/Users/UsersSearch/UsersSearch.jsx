import React, { useState, useContext } from "react";
import GithubContext from "../../../Github/GithubContext/GithubContext";
import AlertContext from "../../../Github/Alert/AlertContext/AlertContext";
import { searchUsers } from "../../../Github/GithubActions/GithubActions";
const UsersSearch = () => {
  const [text, setText] = useState("");
  const { users, dispatch, clearUsers } = useContext(GithubContext);
  const { setAlert } = useContext(AlertContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (text === "") {
      setAlert("Please Enter Somthing in the search Field ", "error");
    } else {
      dispatch({
        type: "SET_LOADING",
      });
      const users = await searchUsers(text);
      dispatch({
        type: "SET_USERS",
        payload: users,
      });
    }
  };
  return (
    <div className="grid grid-cols-1 gap-8 mb-8 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2">
      <div>
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <div className="relative ">
              <input
                className="w-full pr-40 text-black bg-gray-200 input input-lg"
                type="text"
                placeholder="Search"
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
              <button
                className="absolute top-0 right-0 rounded-l-none w-36 btn btn-lg"
                type="submit"
              >
                Go
              </button>
            </div>
          </div>
        </form>
      </div>
      {users.length > 0 && (
        <div>
          <button className="btn btn-ghost btn-lg" onClick={clearUsers}>
            Clear
          </button>
        </div>
      )}
    </div>
  );
};

export default UsersSearch;
