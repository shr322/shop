import { useState } from "react";

export function useLike(){
  let [like, setLike] = useState(0);

  function addLike(){
    setLike((prev) => prev+1)
  };

  return [like, setLike];
}