import { useState } from "react";
import { useGetFeaturesDetailsQuery, useGetFeaturesQuery } from "../../api/apiSlice";
import {BiDotsHorizontalRounded} from "react-icons/bi";
import {RiUserSmileLine} from "react-icons/ri";
import {MdClose} from "react-icons/md";
import {BiArrowBack} from "react-icons/bi";

function HomeFeatures() {
  const [openModal, setOpenModal] = useState(false);  
  
  const handleOpen = () => {
    setOpenModal(!openModal);
    const modal = document.querySelector(".modal");
    const modalBg = document.querySelector(".modal-bg");
    if (!openModal) {
      modal.classList.add('hide');
      modalBg.classList.add('hide');
    }
  }
  
  const {data:features, isLoading, isError} = useGetFeaturesQuery();
  const {data:featuresDetails, isLoading:fdIsLoading , isError:fdIsError} = useGetFeaturesDetailsQuery();
    if (isLoading || isError || fdIsLoading || fdIsError) {
      return ;
    }
    console.log(featuresDetails);
    
  return (
      <div className="grid grid-cols-4 p-2 px-3 mt-6 gap-y-6 Laptop-L:flex Laptop-L:items-center Laptop-L:justify-around">
        {features.map(feature=> 
        <div className="flex flex-col items-center text-center hover:cursor-pointer" key={feature.id}>
            {feature.image && <img className="w-[52px] h-[52px]" src={feature.image} alt={feature.title} />}
            {!feature.image && <div onClick={handleOpen} className="w-[52px] h-[52px] text-[#9e9fb1] bg-[#f1f2f4] rounded-full flex items-center justify-center"><BiDotsHorizontalRounded className="w-8 h-8"/></div>}
            <p className="mt-2 text-[11px]">{feature.title}</p>
        </div>
        )}
      <div onClick={handleOpen} className={`modal-bg absolute z-30 w-full h-screen -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-30 top-1/2 left-1/2 ${!openModal && "hidden"} animate-fade`}></div>
        <div className={`modal absolute z-50 bg-white Laptop-L:rounded-2xl w-full h-screen Laptop-L:max-w-[80vw] Laptop-L:min-w-[460px] Laptop-L:max-h-[63vh] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 overflow-clip animate-fade ${!openModal && "hidden"}`}>
          <div className="flex items-center justify-between py-3 mx-5 border-b">
            <div className="flex items-center">
            <RiUserSmileLine className="w-6 h-6 text-[#ef4056] ml-2"/>
            <p className="text-[#080a38] font-Yekan-bold">خدمات دیجی‌کالا</p>
            </div>
            <MdClose onClick={handleOpen} className="w-6 h-6 text-[#3f4064] hover:cursor-pointer"/>
          </div>
          <div className="h-full px-5 py-4 overflow-y-scroll hell">
            <div className="mt-5">
              <div className="grid grid-cols-3 gap-10 Laptop-L:gap-0 Laptop-L:grid-cols-6">
                {featuresDetails[0].category.map(item=> 
                  <div key={item.id} className="flex flex-col items-center justify-center">
                    <img src={item.image} alt="icon" className="w-[52px] h-[52px]" />
                    <span className="text-[10px] Laptop-L:text-[11px] font-Yekan-bold text-[#3f4064] mt-1">{item.text}</span>
                  </div>
                )}
              </div>
             
             <h4 className="text-xs Laptop-L:text-sm font-Yekan-bold text-[#767790] mt-6">سرویس‌های گروه دیجی‌کالا</h4>

             <div className="grid grid-cols-1 gap-3 mt-2 Laptop-L:grid-cols-2">
              {featuresDetails[1].services.map((service,i) => 
                <div className="p-3 border-b Laptop-L:border border-[#e0e0e6] Laptop-L:rounded-2xl flex items-start" key={i}>
                  <div className="shrink-0">
                    <img src={service.image} alt="service icon" className="w-[52px] h-[52px]" />
                  </div>
                  <div className="flex flex-col justify-between gap-2 mr-3 grow">
                    <div className="flex items-center justify-between">
                      <p className="text-[15px] font-Yekan-bold text-[#3f4064]">{service.name}</p>
                      <BiArrowBack className="w-6 h-6 mr-4 text-[#9e9fb1]"/>
                    </div>
                    <div>
                      <p className="text-xs text-[#767790]">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>  
              )}
             </div>
            </div>
            
          </div>
        </div>
    </div>
  )
}

export default HomeFeatures