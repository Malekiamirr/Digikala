import { useState } from "react"

function Test() {
  const [translate, setTranslate] = useState(0)
  
  const handleTranslate = (where) => {
    if (where === "next") {
        setTranslate(prevTranslate => prevTranslate + 100);
    }
    else {
        setTranslate(prevTranslate => prevTranslate - 100);
    }
    console.log(translate); 
  }

    return (
    <div className="flex items-center justify-center w-full h-screen">
        <div className="flex gap-2 p-4 overflow-hidden bg-black w-96 max-w-96">
            <div className={`relative flex w-full min-w-full translate-x-[]`}>
                <button onClick={()=> handleTranslate("next")} className="absolute left-0">Next</button>
                
                <div className={`w-20 min-w-[100px] h-20 bg-red-500`}></div>
                <div className={`w-20 min-w-[100px] h-20 bg-blue-500`}></div>
                <div className={`w-20 min-w-[100px] h-20 bg-green-500`}></div>
                <div className={`w-20 min-w-[100px] h-20 bg-yellow-500`}></div>
                <div className={`w-20 min-w-[100px] h-20 bg-pink-500`}></div>
                <div className={`w-20 min-w-[100px] h-20 bg-orange-500`}></div>
                <div className={`w-20 min-w-[100px] h-20 bg-slate-500`}></div>
                
                <button onClick={()=> handleTranslate("prev")} className="absolute right-0">Prev</button>
            </div>
        </div>
    </div>
  )
}

export default Test