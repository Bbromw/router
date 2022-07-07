import { createContext } from "react";
import { useReducer } from "react";
import { reducer, initState } from "./reducer";

const LinkProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initState);

  const links = [
    {
      name: "age",
    },
    {
      name: "school",
    },
  ];

  return (
    <linkContext.Provider value={[links, state, dispatch]}>
      {children}
    </linkContext.Provider>
  );
};

export default LinkProvider;
export const linkContext = createContext();
