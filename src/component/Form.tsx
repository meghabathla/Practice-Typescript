import React, { useState } from "react";

const Form = () => {
  const [value, setValue] = useState<string | undefined>();
  const handleOnChangeEvent = (e: React.ChangeEvent<HTMLInputElement>) =>
    setValue(e.target.value);

  const hangleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(e);
  };

  return (
    <div>
      <form onSubmit={hangleSubmit}>
        <h4>{value}</h4>
        <input
          onChange={handleOnChangeEvent}
          type="text"
          placeholder="Enter the name"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
