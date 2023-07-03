import { useState } from "react";

//unique index 생성 훅
function useUniqueIndex() {
  let [index, setIndex] = useState(0);
  
  const generateIndex = () => {
    setIndex(prevIndex => prevIndex + 1);
    return index;
  }
  
  return generateIndex;
}

export default useUniqueIndex;