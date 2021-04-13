import React, { useState } from 'react';
import Header from './Header';
import CardContainer from './CardContainer';
import AddWord from './AddWord';
import WordList from './WordList';

function Main() {
    //Mỗi một từ mới thì có 3 props: word, mean, done((default: flase)
    const [items, putItem] = React.useState([]);
    
    const handleAdd = word => {
        putItem([...items, { word, done: false }]);
    };
    
    return (
        <div className="panel">
            <Header />
            {/*<AddWord onAdd={handleAdd} />*/}
            
            <CardContainer />
        </div>
    );
}

export default Main;