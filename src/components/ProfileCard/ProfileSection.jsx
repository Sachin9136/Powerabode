import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "../../components/ComponentsIndex";
import { getallTeam } from "../../ReduxToolkit/Slice/Team";

const TeamApi = () => {
  const dispatch = useDispatch();
  const { teams, status } = useSelector((state) => state.team);

  const [expandedIndex, setExpandedIndex] = useState(null);

  useEffect(() => {
    if (status === "idle") {
      dispatch(getallTeam());
    }
  }, [dispatch, status]);

  const toggleDescription = (index) => {
    setExpandedIndex((prevState) => (prevState === index ? null : index));
  };

  const getShortDescription = (description) => {
    return description.split(" ").slice(0, 25).join(" ") + "...";
  };

  return (
    <div className="bg-white px-4 md:px-20 py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {teams?.data && teams.data.length > 0 ? (
        teams.data.map((team, index) => {
          const isExpanded = expandedIndex === index;

          return (
            <div
              className={`text-center p-6 rounded-lg transition-all duration-500 ease-in-out ${
                isExpanded ? "shadow-sm" : ""
              }`}
              key={index}
            >
              {/* Circular image */}
              <div className="flex justify-center mb-4">
                <img
                  src={team.Image}
                  alt={team.Name}
                  className="w-40 h-40 rounded-full object-cover"
                />
              </div>

              {/* Name */}
              <h2 className="font-bold text-2xl">{team.Name}</h2>

              {/* Title */}
              <h3 className="font-bold text-xl text-[#06B13D] pt-2 pb-3">
                {team.position}
              </h3>

              {/* Description */}
              <p className="text-lg px-3 transition-all duration-500 ease-in-out">
                {isExpanded
                  ? team.description
                  : getShortDescription(team.description)}
              </p>

              {/* Read More Button */}
              <div className="flex justify-center mt-5">
                <Button
                  className="px-5 py-2 bg-[#FFED05] rounded-md"
                  onClick={() => toggleDescription(index)}
                >
                  {isExpanded ? "Show Less" : "Read More"}
                </Button>
              </div>
            </div>
          );
        })
      ) : (
        <div>No Team available</div>
      )}
    </div>
  );
};

export default TeamApi;
