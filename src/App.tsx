import { useEffect, useState } from "react";
import "./styles/globals.css";
import Notes from "./components/Notes";
import Chords from "./components/Chords";
import Screen from "./components/Screen";

export type Note = {
  name : string;
  index : number;
}
export type Chord = {
    fullname : string,
    symbol : string,
    chord_type : string,
    annotation : number[],
    small_annotation : number[],
    index : number[],
    small_index : number[],
}

function App() {
  const notes : string[] = (["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"]);
  const [selectedNote, setSelectedNote] = useState<Note>({name : "", index: 0});
  const [selectedChord, setSelectedChord] = useState<Chord | null>(null);
  const [selectedNotes, setSelectedNotes] = useState<String[] | null>(null);

  return (
    <main>
      <Notes 
        notes = {notes}
        selectedNote = {selectedNote}
        setSelectedNote = {setSelectedNote}
      />
      <Chords
        selectedChord = {selectedChord}
        setSelectedChord = {setSelectedChord}
      />
      <Screen
        notes = {notes}
        selectedNote = {selectedNote}
        selectedChord = {selectedChord}
        selectedNotes = {selectedNotes}
        setSelectedNotes = {setSelectedNotes}
      />
    </main>
  );
}

export default App;
