import React from "react";
import { useReducer } from "react";
import { createContext } from "react";
import githubReducer from "../GithubReducer/GithubReducer";

const GithubContext = createContext();

export const GithubProvider = ({ children }) => {
  const intialState = {
    users: [],
    repos: [],
    user: {},
    loading: false,
  };

  const [state, dispatch] = useReducer(githubReducer, intialState);

  return (
    <GithubContext.Provider
      value={{
        ...state,
        dispatch,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
