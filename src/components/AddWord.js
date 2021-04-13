import React, { useState } from 'react';

function AddWord( { onAdd } ) {
    const [word, setWord] = React.useState('');
    const [mean, setMean] = React.useState('');
    // const [done, setDone] = React.useState(false);
    
    const handleChangeWord = e => setWord(e.target.value);
    const handleChangeMean = e => setMean(e.target.value);
    
    const onSubmit = () => {
        if(!word || !mean) return ;
        setWord('');
        setMean('');
        onAdd({word, mean})
    }
    
    return (
        <div>
            <div className="panel-block">
                <input
                    class="input"
                    type="text"
                    placeholder="新しい言葉を入力してください"
                    value={word}
                    onChange={handleChangeWord}
                />
            </div>
    
            <div className="panel-block">
                <input
                    class="input"
                    type="text"
                    placeholder="意味を入力してください"
                    value={mean}
                    onChange={handleChangeMean}
                />
            </div>
            <input className="input" type="submit" value="Submit" onClick={onSubmit} />
        </div> 
    );
}

export default AddWord;