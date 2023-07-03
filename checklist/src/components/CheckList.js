import { useState } from "react";

function CheckList({ item }) {
  let [checked, setChecked] = useState(false);

  return (
    <div className='checkList'>
      <input type='checkbox' />
      <span className={checked ? "checked" : null}>{item.key}{item.content}</span>
    </div>
  )
}

export default CheckList;