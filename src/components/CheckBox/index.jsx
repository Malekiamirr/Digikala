import { useState } from "react"

function CheckBox({text}) {
  const [isChecked, setIsChecked] = useState(false);
  const handleChange = ()=> {
    setIsChecked(!isChecked);
  }

  return (
    <div className="flex items-center">
        <div className="py-1 ml-4">
            <input id="default-checkbox" type="checkbox" onChange={handleChange} checked={isChecked} className="text-2xl w-[18px] h-[18px] text-blue-600 accent-[#008eb2]"/>
        </div>
        <div className="flex items-center justify-between grow border-b border-b-[#f1f2f4] p-3 pr-0">
            <p className="text-[15px] font-Yekan-bold text-[#3f4064]">{text.main}</p>
            {text.sub && <p className="text-xs text-[#767790]">{text.sub}</p>}
        </div>    
    </div>
  )
}

export default CheckBox