import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getSingleBlog, resetBlog } from "../../ReduxToolkit/Slice/Single_Blog";
import { useParams } from "react-router-dom";
import Img from "../../components/Img/Img";
import { Heading } from "../../components/ComponentsIndex"; // Removed unused imports

const BlogApi = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { singleBlogs, status } = useSelector((state) => state.singleBlogSlice);
  const { description, image, blogTitle } = singleBlogs;

  useEffect(() => {
    // Reset blog data when navigating to a new blog
    dispatch(resetBlog());

    // Fetch new blog data
    dispatch(getSingleBlog(id));
  }, [dispatch, id]);

  return (
    <div className="py-10 px-4 md:px-20">
      {status === "loading" ? (
        <div>Loading...</div>
      ) : singleBlogs && blogTitle ? (
        <div>
          <Heading children={blogTitle} className={"text-4xl text-center capitalize"} />
          <Img src={image} alt={blogTitle} className="w-full h-96 object-cover my-5 rounded-md" />
          <p dangerouslySetInnerHTML={{ __html: description }} />
        </div>
      ) : (
        <div>No Blogs available</div>
      )}
    </div>
  );
};

export default BlogApi;
