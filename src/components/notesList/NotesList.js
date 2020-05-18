import React, { useState ,useEffect } from "react";
import { firestore } from "../../firebase/config";
import {Link} from 'react-router-dom'

const NotesList = () => {
  const [notes, setNotes] = useState([])
  
  useEffect(() => {
    getAllNotes();
  }, []);

  const getAllNotes = async () => {
    const allNotes = await firestore.collection("notes").get();

    const data = allNotes.docs.map((note) => ({ ...note.data(), id: note.id }));
    console.log(data);
    setNotes(data)
  };

  return <ul>{notes.map(({note, id}) => <li key={id}>
    <h2>{note}</h2>
    <Link to={{
      pathname: `/${id}`
    }}>
    <button onClick={() => console.log(id)}>generate link</button>
    </Link>
  </li>)}</ul>
  ;
};

export default NotesList;
