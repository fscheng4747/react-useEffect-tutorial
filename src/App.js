import React, { useState, useEffect } from "react";
import { useForm } from "./useForm";

const App = () => {
  const [values, handleChange] = useForm({ email: "", password: "" });
  // const [values2, handleChange2] = useForm({ firstName: "", lastName: "" });

  // Everytime, this component re-renders or is rendered, 
  // this function will get called
  // the second parameter (dependency array) -> value your effect depends on
  useEffect(()=> {
    console.log("render!");
  }, [values.password]); // effect depends on password

  return (
    <div>
      <>
        <input name="email" value={values.email} onChange={handleChange} />
        <input
          type="password"
          name="password"
          value={values.password}
          onChange={handleChange}
        />
      </>
    </div>
  );
};

export default App;
