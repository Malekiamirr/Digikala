function Story({story, isOpen, onClick}) {
        return (
            <>
                <div className="hidden flex-col items-center px-[30px] py-[10px] my-2 mx-2">
                    <div onClick={onClick} className="w-[80px] h-[80px] overflow-hidden border-2 rounded-full cursor-pointer"> 
                        <img className="p-1 rounded-full opacity-70" src={story.logo} alt={story.title} />
                    </div>
                    <span className="text-[13px] mt-[7.5px] font-Yekan-bold text-[#333333]">{story.title}</span>
                </div>
    </>
  )
}

export default Story