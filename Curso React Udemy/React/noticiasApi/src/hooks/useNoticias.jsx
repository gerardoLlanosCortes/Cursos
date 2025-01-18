import { useContext } from "react";
import NoticiasContext from "../context/NoticiasProvider";

const useNoticas = () => {
  return useContext(NoticiasContext);
};

export default useNoticas;
