import {IoClose} from "react-icons/io5";
import {BiPlay} from "react-icons/bi";

function OfficialImages({product, onClose}) {
  return (
    <div  onClick={onClose} className="fixed top-0 left-0 w-full h-screen bg-black bg-opacity-10 z-[50] flex items-center justify-center">
            <div className="bg-white h-[70vh] w-[956px] rounded-lg">
                {/* Header */}
                <div className="px-5 py-4">
                    <div className="flex items-center justify-between border-b border-b-[#e0e0e6]">
                        <p className="flex flex-col items-center justify-between gap-3 px-4">
                            <p className="text-[#ef4056] font-Yekan-bold">تصاویر رسمی</p>
                            <span className="w-full h-1 rounded-t-lg bg-[#ef4056]"></span>
                        </p>
                        <div className="flex items-center justify-end px-4">
                            <IoClose onClick={onClose} className="w-6 h-6 mb-1 text-[#3f4064] hover:cursor-pointer"/>
                        </div>
                    </div>
                </div>

                {/* Main Part */}
                <div className="flex">
                    {/* Swiper */}
                    <div className="w-3/5 pr-5">
                        {/* {product.productVideo[0] && 
                            <div className="w-full h-[550px]">
                                <video className="w-full h-full bg-black rounded-lg" controls src={product.productVideo[0].video}></video>
                            </div>} */}

                        <div className="flex items-center justify-center w-full h-full">
                            <img className="mix-blend-multiply" src={product.thumbnail} alt="" />
                        </div>
                    </div>

                    {/* Sub Images */}
                    <div className="flex flex-col w-2/5 mx-7">
                        {/* Intro */}
                        <div className="py-3 break-words">
                            <div className="flex items-center grow">
                                <p className="grow font-Yekan-bold text-[#080a38] leading-9">{product.name}</p>
                            </div>
                        </div>

                        {/* Small Images */}
                        <div className="flex flex-wrap">
                            {product.productVideo[0] && 
                                <div className="w-[62px] h-[62px] relative rounded-lg ml-2 mb-3 overflow-hidden flex items-center bg-black">
                                    <video className="border-t-2 border-b-2 h-[80%]" src={product.productVideo[0].video}></video>
                                    <BiPlay className="w-10 h-10 text-white absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]"/>
                                </div>}
                            {product.productImage.map((image, i) => 
                                <div key={i} className="">
                                    <div className="w-[62px] h-[62px] border-2 rounded-lg ml-2 mb-3 overflow-hidden">
                                        <img src={image.image} alt="photo" />
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

export default OfficialImages;