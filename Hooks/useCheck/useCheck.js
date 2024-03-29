import { useState } from "react";
// custom hook se encarga de validar varios checkbox
export const useCheck = (initialState = {}) => {
  const [values, setvalues] = useState(initialState);

  const reset = () => {
    setvalues(initialState);
  };

  const handleInputChange = ({ target }) => {
    setvalues({
      ...initialState,
      [target.name]: target.checked,
    });
  };

  return [values, handleInputChange, reset];
};
