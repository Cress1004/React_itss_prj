import React, { useState } from 'react';
import AddWord from './AddWord';
import WordList from './WordList';

function Main() {
    //Mỗi một từ mới thì có 3 props: word, mean, done((default: flase)
    const [items, putItem] = React.useState('');
    
    const handleAdd = word => {
        putItem([...items, { word, done: false }]);
    }; 
  
    return (
        <div className="panel">
            // add new word
            <AddWord onAdd={handleAdd} />

            
            //Flash card
            
            // List những từ chưa thuộc
            {items.map(item => (
                <AddWord 
                    key={item.key}
                    item={item}
                />
            ))}
            {
                items.map(item => (
                    <WordList 
                    key = {item.key}
                    item = {item}
                    />
                ))}
        </div>
    );
}

export default Main;