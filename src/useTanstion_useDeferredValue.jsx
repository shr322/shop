import { useDeferredValue, useState, useTransition } from "react";

const a = new Array(10000).fill(1);

function App(){
  
  const [name, setName] = useState('');

  // useTransition를 사용하면 [변수, 함수]가 남습니다. 우측에 있는 함수로 state변경함수 같은걸 묶으면 그걸 다른 코드들보다 나중에 처리해줍니다.
  const [isPending, startTransition] = useTransition();

  let state1 = useDeferredValue(name);

  return (
    <>
      <div className="App">
        <input type="text" onChange={(e)=>{ 
          startTransition(()=>{
            setName(e.target.value)
          })
        }} />
        {
          isPending ? '로딩중' : 
          a.map((a, i)=>{
            return <div key={i}>{state1}</div>
          })
        }
      </div>
    </>
  )
}

export default App;