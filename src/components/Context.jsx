import React, { useContext } from "react";

// Create Context Hook
const AppContext = React.createContext();

// Context Provider
const AppProvider = ({ children }) => {
  const data = "Shivam Dubey";

  return <AppContext.Provider value={data}>{children}</AppContext.Provider>;
};

//Custom Hooks

const useGlobalContext = () => {
  return useContext(AppContext);
};

// Export the Hooks
export { AppContext, AppProvider, useGlobalContext };
