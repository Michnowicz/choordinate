import { useEffect, useState } from "react";
import "../styles/Chords.css";
import {Chord} from "../App";
import { invoke } from '@tauri-apps/api/core';
import type { Dispatch, SetStateAction } from "react";

type Props = {
    selectedChord : Chord | null;
    setSelectedChord: Dispatch<SetStateAction<Chord | null>>;
}
async function getChords(): Promise<Chord[]> {
    return await invoke<Chord[]>('get_chords');
}

export default function Chords({selectedChord, setSelectedChord}:Props) {
    const [chords, setchords] = useState<Chord[]>([]);

    useEffect(() => {
    async function loadChords() {
        try {
            setchords(await getChords()) 
        } catch (error) {
            console.error("Erreur lors du chargement des accords :", error);
        }
        }
        loadChords();
    }, []);
    
    useEffect(()=>{
        console.log(selectedChord)
    },[selectedChord])

    return(
        <section className="selector">
            <div className="selectorTitle">
                Chords
            </div>
            <div className="chords">
                { chords ?
                    chords.map((c, i)=>(
                        <button
                        className={`chordButton ${selectedChord?.symbol === c.symbol ? "selected" : ""}`}
                        key={i}
                        onClick={()=>setSelectedChord(c)}
                        >
                            {c.symbol}
                        </button>
                    ))
                :
                    <></>
                }
            </div>
        </section>
    )
}