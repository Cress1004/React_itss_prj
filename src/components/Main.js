import React, { useState } from 'react';
import Header from './Header';
import CardContainer from './CardContainer';
import AddWord from './AddWord';
import WordList from './WordList';

function Main() {
    const [items, putItem] = React.useState([]);
    
    const handleAdd = word => {
        putItem([...items, { word, done: false }]);
    };
    
    return (
        <div className="panel">
            
            <CardContainer />
        
            {items.map(item => (
                <AddWord
                    key={item.key}
                    item={item}
                    onAdd={handleAdd}
                />
            ))}
            {items.map(item => (
                <WordList 
                    key = {item.key}
                    item = {item}
                />
            ))}
        </div>
    );
}

export default Main;