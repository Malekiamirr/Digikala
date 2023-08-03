function Story({ story }) {
  return (
    <>
      <div className="hidden min-[1280px]:block flex-col items-center px-[30px] py-[10px] my-2 mx-2">
        <div className="w-[80px] h-[80px] overflow-hidden border-2 border-[#f55353] rounded-full cursor-pointer">
          <img
            className="p-1 rounded-full opacity-70"
            src={story.logo}
            alt={story.title}
          />
        </div>
        <span className="text-[13px] mt-[7.5px] font-Yekan-bold text-[#333333]">
          {story.title}
        </span>
      </div>
    </>
  );
}

export default Story;
