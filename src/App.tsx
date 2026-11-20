import { useEffect, useState } from "react";
import "./styles/globals.css";
import Notes from "./components/Notes";

export type Note = {
  name : string;
  index : number;
}

function App() {
  const notes : string[] = (["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"]);
  const [selectedNote, setSelectedNote] = useState<Note>({name : "", index: 0});

  return (
    <main>
      <Notes 
        notes = {notes}
        selectedNote = {selectedNote}
        setSelectedNote = {setSelectedNote}
      />
    </main>
  );
}

export default App;
