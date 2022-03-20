import React, { Fragment } from "react";
import UsersResults from "../../Components/Users/UsersResults/UsersResults";
import UsersSearch from "../../Components/Users/UsersSearch/UsersSearch";

const Home = () => {
  return (
    <>
      <UsersSearch />
      <UsersResults />
    </>
  );
};

export default Home;
