
function ProductColors() {
  return (
    <div>
        {/* Color text */}
        <div className="py-3">
            <p className="font-Yekan-bold text-[#080a38]">رنگ: {"سبز"}</p>
        </div>
        {/* Color case */}
        <div className="flex items-center">
            <div className="w-10 h-10 p-1 mb-2 ml-2 border rounded-full hover:cursor-pointer">
                <div className="bg-[#C99212] w-full h-full rounded-full"></div>
            </div>
            <div className="w-10 h-10 p-1 mb-2 ml-2 border rounded-full hover:cursor-pointer">
                <div className="bg-[#00E676] w-full h-full rounded-full"></div>
            </div>
        </div>
    </div>
  )
}

export default ProductColors