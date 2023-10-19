import React from "react";

const dataContext = React.createContext({
  data: [],
  setData: () => {},
});

export default dataContext;
