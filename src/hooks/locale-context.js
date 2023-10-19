import React from "react";

const LocaleContext = React.createContext({
  location: "",
  setLocation: () => {},
});

export default LocaleContext;
