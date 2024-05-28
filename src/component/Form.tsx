import React, { useState } from "react";

const Form = () => {
  const [value, setValue] = useState<string | undefined>();
  const handleOnChangeEvent = (e: React.ChangeEvent<HTMLInputElement>) =>
    setValue(e.target.value);
  return (
    <div>
      <h4>{value}</h4>
      <input
        onChange={handleOnChangeEvent}
        type="text"
        placeholder="Enter the name"
      />
    </div>
  );
};

export default Form;
