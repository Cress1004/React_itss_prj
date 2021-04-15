import React, { useState } from 'react';

function WordList({ items, click, active }) {
  console.log(active);
    //hiển thị danh sách những từ chưa checkbox ()chưa thuộc
  return (
    <div className="list-group list-group-flush">
      {items.map((item, i) => (
        <div className={`list-group-item ${active === i ? 'active' : ''} ${item.get('done') ? '' : 'font-weight-bold'}`} onClick={() => click(i)}>
          {item.get("word")}
        </div>
      ))}
    </div>
  );
}

export default WordList;