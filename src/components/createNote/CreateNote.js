import React, { useState } from "react";
import {firestore} from '../../firebase/config'

const initialState = {
  note: "",
};

const CreateNote = () => {
  const [state, setState] = useState(initialState);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(state);
    firestore.collection('notes').add(state)
  };

  const handleChange = ({ target: { name, value } }) => {
    setState((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="note"
        placeholder="note context"
        onChange={handleChange}
      ></input>
    </form>
  );
};

export default CreateNote;
