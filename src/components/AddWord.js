import React, { useState } from 'react';
import { getKey } from "../lib/util";

function AddWord( { onAdd } ) {
    const [word, setWord] = React.useState('');
    const [mean, setMean] = React.useState('');
    
    const handleChangeWord = e => setWord(e.target.value);
    const handleChangeMean = e => setMean(e.target.value);
    
    const onSubmit = (event) => {
        event.preventDefault();
        if(!word || !mean) return ;
        setWord('');
        setMean('');
        onAdd({word, mean, done: false, key: getKey()});
        alert("Save word success");
    }
    
    return (
        <div className="row justify-content-center">
            <div className=" col col-sm-5">
                <div className="row justify-content-center my-2">
                    <input
                        className="col-sm-10"
                        type="text"
                        placeholder="新しい言葉を入力してください"
                        value={word}
                        onChange={handleChangeWord}
                    />
                </div>
                
                <div className="row justify-content-center my-2">
                    <input
                        className="col-sm-10"
                        type="text"
                        placeholder="意味を入力してください"
                        value={mean}
                        onChange={handleChangeMean}
                    />
                </div>

                <div className="row justify-content-center my-2">
                    <input className="col-sm-10" type="submit" value="Submit" onClick={onSubmit} />
                </div>
                
            </div>
        </div>
    );
}

export default AddWord;