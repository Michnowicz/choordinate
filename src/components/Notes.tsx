import { useEffect, useState } from "react";
import {Note} from "../App";
import "../styles/Notes.css";

type Props = {
    notes : string[];
    selectedNote : Note;
    setSelectedNote : React.Dispatch<React.SetStateAction<Note>>;
}

export default function Notes({notes, selectedNote, setSelectedNote}: Props) {
    useEffect(()=>{
        console.log(selectedNote)
    },[selectedNote])

    return(
        <section className="selector">
            <div className="selectorTitle">
                NOTES
            </div>
            <div className="notes">
                { notes ?
                    notes.map((n,i)=>(
                        <button 
                        className="noteButton"
                        key={i} 
                        onClick={()=>setSelectedNote({name : n, index : i})}>
                            {n}
                        </button>
                    ))
                    :
                    ""
                }
            </div>
        </section>
    )
}