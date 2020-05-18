import React from "react";

const UserContext = React.createContext();

function UserProvider({ childeren }) {
  return <UserContext.Provider value="user">{childeren}</UserContext.Provider>;
}

export { UserProvider, UserContext };
