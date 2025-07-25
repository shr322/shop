import axios from "axios";
import { useState } from "react";

export function useName(){
  const [name, setName] = useState('');

  axios.get('/username.json').then((result)=> setName(result.data[0].name))

  return [name, setName];
}