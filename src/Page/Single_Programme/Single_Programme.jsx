import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Heading } from "../../components/ComponentsIndex"; 
import { getSingleProgramme, resetProgramme } from "../../ReduxToolkit/Slice/Single_Programme";
import { useParams } from "react-router-dom";
import Img from "../../components/Img/Img";

const ProgrammeApi = () => {
  const dispatch = useDispatch();
  const { id } = useParams();  // Programme ID from route parameters

  // Get the state from the Redux store
  const { singleProgramme = {}, status } = useSelector(
    (state) => state.singleProgrammeSlice || {}
  );

  const { description = "", Image = "", Name = "" } = singleProgramme; // Destructure with default values

  useEffect(() => {
    // Reset programme data when navigating to a new programme
    dispatch(resetProgramme());

    // Fetch new programme data
    dispatch(getSingleProgramme(id));
  }, [dispatch, id]);

  return (
    <div className="py-10 px-4 md:px-20">
      {status === "loading" ? (
        <div>Loading...</div>
      ) : singleProgramme && Name ? (
        <div className="">
          <Heading children={Name} className={"text-4xl text-center capitalize"} />
          <div className="flex justify-center">
            <Img src={Image} alt={Name} className="w-96 h-96 object-cover my-5 rounded-md" />
          </div>
          <p className="text-center" dangerouslySetInnerHTML={{ __html: description }} />
        </div>
      ) : (
        <div>No Programme available</div>
      )}
    </div>
  );
};

export default ProgrammeApi;
