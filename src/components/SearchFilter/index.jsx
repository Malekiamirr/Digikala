import { useState } from "react";
import {BiSearch} from "react-icons/bi";
import {RiCloseCircleFill} from "react-icons/ri";
function SearchFilter({placeholder}) {
    
    const [inputValue, setInputValue] = useState("");
    const handleInputValue = (e) => {
        e.preventDefault();
        setInputValue(e.target.value)
    }

    const hindleClearInput = () => {
      setInputValue("");
    }

    return (
    <form className="mb-5" onSubmit={(e)=> e.preventDefault()}>
      <div className="border border-[#e0e0e6] flex items-center justify-between rounded-lg px-2 py-2">
        <BiSearch className={`${inputValue && "hidden"} w-6 h-6`}/>
        <div>
          <input className="px-2 text-[15px] outline-none placeholder:text-base caret-[#ef4056] text-[#3f4064] max-w-[170px]" type="text" value={inputValue} placeholder={placeholder} onChange={handleInputValue}/>
        </div>
        <RiCloseCircleFill onClick={hindleClearInput} className={`${!inputValue && "hidden"} w-6 h-6`}/>
      </div>
    </form>
  )
}

export default SearchFilter;