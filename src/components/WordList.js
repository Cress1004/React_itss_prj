import React, { useState } from 'react';

function WordList({ item }) {
    //hiển thị danh sách những từ chưa checkbox ()chưa thuộc
  return (
    <div>
      {item.done? (<label className="panel-block">
        <p>{item.word} - {item.mean}</p>
    </label>)
    : ("")

      }
      
    </div>
    
  );
}

export default WordList;