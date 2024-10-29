import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, Heading, Span } from "../../components/ComponentsIndex";
import { getallNews } from "../../ReduxToolkit/Slice/News";

const NewsApi = () => {
  const dispatch = useDispatch();
  const { all_news, status } = useSelector((state) => state.news);

  const [expandedIndex, setExpandedIndex] = useState(null);

  useEffect(() => {
    if (status === "idle") {
      dispatch(getallNews());
    }
  }, [dispatch, status]);

  const formatDate = (dateString) => {
    const options = { day: "2-digit", month: "short", year: "numeric" };
    return new Date(dateString).toLocaleDateString("en-US", options);
  };

  return (
    <div className="py-10 px-4 md:px-20">
      {all_news?.data && all_news.data.length > 0 ? (
        all_news.data.map((news, index) => {
          const isExpanded = expandedIndex === index;

          return (
            <>
                <div className="container mx-auto flex flex-col lg:flex-row justify-center space-y-8 lg:space-y-0 md:space-x-10 py-10">
                    {/* Image Section */}
                    <div className="lg:w-2/5 w-full">
                        <img className="rounded-2xl" src={news.Image} alt="" width="100%" />
                    </div>
                    {/* Text Section */}
                    <div className="lg:w-3/5 w-full">
                        <Heading className="text-4xl font-semibold pb-2 mb-6 capitalize">
                            {news.Name}
                        </Heading>
                        <p className="text-2xl font-medium pb-2 mb-6">
                        {news.description}
                        </p>
                        <div>
                            <Span className='text-2xl font-medium text-[#878784]'>{formatDate(news.createdAt)}</Span>  
                        </div>
                    </div>
                </div>
            </>
          );
        })
      ) : (
        <div>No Team available</div>
      )}
    </div>
  );
};

export default NewsApi;
