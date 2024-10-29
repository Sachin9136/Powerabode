import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, Heading, Span } from "../../components/ComponentsIndex";
import { getallCourse } from "../../ReduxToolkit/Slice/Course";
import { Link } from "react-router-dom";

const CourseApi = () => {
  const dispatch = useDispatch();

  // Safely get the state from the Redux store with fallback for `course`
  const { courses = {}, status } = useSelector((state) => state.course || {});

  const [expandedIndex, setExpandedIndex] = useState(null);

  useEffect(() => {
    if (status === "idle") {
      dispatch(getallCourse()); 
    }
  }, [dispatch, status]);

  // Format date function
  const formatDate = (dateString) => {
    const options = { day: "2-digit", month: "short", year: "numeric" };
    return new Date(dateString).toLocaleDateString("en-US", options);
  };

  return (
    <div className="py-10 px-4 md:px-20">
      {status === "loading" ? (
        <div>Loading courses...</div>  
      ) : courses?.data?.courses && courses.data.courses.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.data.courses.map((course, index) => {
            const isExpanded = expandedIndex === index;
            return (
              <Link to={`/${course.slugUrl}`} key={course._id}>
                <div className="card-slider py-5 md:py-10">
                  <div className="h-56 overflow-hidden rounded-t-xl">
                    <img  
                      className="h-56 w-full object-cover"
                      src={course.image}
                      alt={course.Name}
                    />
                  </div>
                  <div className="card-text-area rounded-b-2xl px-3 pt-3 pb-7 content-center">
                    <p className="text-white text-xl font-medium py-2">
                      Updated on <Span>{formatDate(course.createdAt)}</Span>
                    </p>
                    <h3 className="text-3xl font-semibold text-[#FFED05]">
                      {course.Name}
                    </h3>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      ) : (
        <div>No Courses available</div>
      )}
    </div>
  );
};

export default CourseApi;
