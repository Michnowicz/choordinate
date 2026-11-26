import "../styles/Screen.css"
import {Note, Chord} from "../App"
import { useEffect, useState } from "react";
import type { Dispatch, SetStateAction } from "react";

type Props = {
    notes : string[];
    selectedNote : Note | null;
    selectedChord : Chord | null;
    selectedNotes : String[] | null;
    setSelectedNotes : Dispatch<SetStateAction<String[] | null>>;
}

export default function Screen({notes, selectedNote, selectedChord, selectedNotes, setSelectedNotes} : Props) {

    useEffect(()=>{
        if (selectedNote !== null && selectedChord !== null ) {
            let noteInChord : String[] = []

            selectedChord.small_index.forEach(i => {
                if (selectedNote.index+i <= 11) {
                    noteInChord.push(notes[selectedNote.index+i])
                } else if (selectedNote.index+i <= 23) {
                    noteInChord.push(notes[selectedNote.index+i-12])
                }
            });
            setSelectedNotes(noteInChord)
        }
    },[selectedChord, selectedNote])

    return(
        <section className="selector">
            { selectedChord && selectedNote !== null ?
                <div className="screen">
                    <p>{selectedNote.name} {selectedChord.fullname}</p>
                    <div className="screenNotes">
                        {  selectedNotes ?
                            selectedNotes.map((n, i)=>(
                                <p key={i}>{n}</p>
                            ))
                        :
                        ""
                        }
                    </div>
                </div>
            :
            ""
            }
        </section>
    )
}