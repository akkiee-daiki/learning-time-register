export const Form = () => {
  const onclickForm = () => {

  };
  return (
    <div>
      <h1>Form</h1>
        <label for="content">学習内容</label>
        <input name="content" type="text"/>
        <label for="time">学習時間</label>
        <input name="time" type="text" />
        <button onClick={onclickForm}>登録</button>
    </div>
  );
};