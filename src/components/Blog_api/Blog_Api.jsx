import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, Heading, Span } from "../../components/ComponentsIndex";
import { getallBlog } from "../../ReduxToolkit/Slice/Blog";
import { Link } from "react-router-dom";

const BlogApi = () => {
  const dispatch = useDispatch();
  const { blogs, status } = useSelector((state) => state.blog);

  const [expandedIndex, setExpandedIndex] = useState(null);

  useEffect(() => {
    if (status === "idle") {
      dispatch(getallBlog()); 
    }
  }, [dispatch, status]);

  // Format date function
  const formatDate = (dateString) => {
    const options = { day: "2-digit", month: "short", year: "numeric" };
    return new Date(dateString).toLocaleDateString("en-US", options);
  };

  return (
    <div className="py-10 px-4 md:px-20">
      {blogs?.data?.blogs && blogs.data.blogs.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.data.blogs.map((blog, index) => {
            const isExpanded = expandedIndex === index;  // Moved outside the return
            return (
              <Link to={`/${blog.slugUrl}`} key={blog._id}>
                <div className="card-slider py-5 md:py-10">
                  <div className="h-56 overflow-hidden rounded-t-xl">
                    <img  
                      className="h-56 w-full object-cover"
                      src={blog.image}
                      alt={blog.blogTitle}
                    />
                  </div>
                  <div className="card-text-area rounded-b-2xl px-3 pt-3 pb-7 content-center">
                    <p className="text-white text-xl font-medium py-2">
                      Updated on <Span>{formatDate(blog.createdAt)}</Span>
                    </p>
                    <h3 className="text-3xl font-semibold text-[#FFED05]">
                      {blog.blogTitle}
                    </h3>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      ) : (
        <div>No Blogs available</div>
      )}
    </div>
  );
};

export default BlogApi;
