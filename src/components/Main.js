import React, { useState } from 'react';
import Header from './Header';
import CardContainer from './CardContainer';
import AddWord from './AddWord';
import WordList from './WordList';
import { getKey } from "../lib/util";
import useStorage from "../hooks/storage";

function Main() {
    const [words, setWords] = useStorage([
        {
            word: "Jazz",
            meaning:
                "A type of music of black American origin characterized by improvisation, syncopation, and usually a regular or forceful rhythm, emerging at the beginning of the 20th century.",
            done: false,
            key: getKey()
        },
        {
            word: "Reggae",
            meaning: "Music like Bob Marley, man.",
            done: false,
            key: getKey()
        },
        {
            word: "Folk",
            meaning: "Music like Bob Dylan, man.",
            done: false,
            key: getKey(),
        }]);
    const handleAdd = word => {
        setWords([...words, { word }]);
    };
    
    return (
        <div className="panel">
            <Header />
            
            <CardContainer />
       
            <AddWord onAdd={handleAdd}/>
       
            {words.map(item => (
                 <WordList 
                     key = {item.key}
                     item = {item}
                 />
            ))}
        </div>
    );
}

export default Main;