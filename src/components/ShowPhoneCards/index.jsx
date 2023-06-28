import {PhoneCard} from "../index";

function ShowPhoneCards({phones}) {
    
    return (
    <div className="grid gird-cols-1 min-[640px]:grid-cols-2 min-[1280px]:grid-cols-3 min-[1440px]:grid-cols-4 min-[1676px]:grid-cols-5">
        {phones.map((phone , i)=> 
            <PhoneCard key={phone.id} index={i + 1} product={phone}/>
        )}
    </div>
  )
}

export default ShowPhoneCards