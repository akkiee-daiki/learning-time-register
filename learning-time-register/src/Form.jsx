import React from 'react';
import { useState } from 'react';

export const Form = () => {
  const [content, setContent] = useState('');
  const [time, setTime] = useState('');
  const onChangeContent = (e) => setContent(e.target.content);
  const onChangeTime = (e) => setTime(e.target.time);
  const onClickRegister = () => {
    console.log(content);
    console.log(time);
  }

  return (
    <div>
      <h1>Form</h1>
        <label htmlFor="content">学習内容</label>
        <input name="content" type="text" value={content} onChange={onChangeContent}/>
        <label hhtmlFor="time">学習時間</label>
        <input name="time" type="text" value={time} onChange={onChangeTime}/>
        <button onClick={onClickRegister}>登録</button>
    </div>
  );
};