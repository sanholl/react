import { useState } from "react";

//unique index 생성 훅
function useUniqueIndex() {
  console.log('useUniqueIndex')
  let [index, setIndex] = useState(0);
  
  const generateIndex = () => {
    console.log('generateIndex');
    setIndex(prevIndex => prevIndex + 1);
    return index;
  }
  
  console.log(index);
  return generateIndex;
}

export default useUniqueIndex;