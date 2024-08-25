export const Form = () => {
  return (
    <div>
      <h1>Form</h1>
      <form>
        <label for="content">学習内容</label>
        <input name="content" type="text"/>
        <label for="time">学習時間</label>
        <input name="time" type="text" />
      </form>
      
    </div>
  );
};