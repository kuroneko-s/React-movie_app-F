import { useState } from "react";

export const useInput = (initValue, validator) => {
    const [value, setValue] = useState(initValue);
    const onChange = (e) => {
      const {
        target: { value }
      } = e;
      let willUpdate = true;
      if (typeof validator === "function") {
        willUpdate = validator(value);
      }
      if (willUpdate) {
        setValue(value);
      }
    };
    return { value, onChange };
  };