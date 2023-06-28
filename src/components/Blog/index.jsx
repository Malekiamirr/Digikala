import { useGetBlogQuery } from "../../api/apiSlice";

function Blog() {
    const {data:blogs, isLoading, isError} = useGetBlogQuery();

    if (isLoading || isError) {
      return;
    }
    
  return (
    <div className="flex flex-col gap-3 Laptop-L:flex-row">
      {blogs.map(blog=> (
        <div key={blog.id} className="border border-[#e0e0e0] rounded-2xl overflow-hidden">
          <div>
          <img src={blog.image} alt={blog.title} className="w-full"/>
          </div>
          <p className="text-xs text-[#080a38] mt-2 mb-3 px-4 text-start leading-8">{blog.title}</p>
        </div>
      ))}
    </div>
  )
}

export default Blog