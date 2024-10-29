import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getallteacher, deleteteacher } from "../../ReduxToolkit/Slice/Teacher";
import Table from "../../components/Table/Table";
import { Heading, Row } from "../../components/ComponentsIndex";

function teacher() {
  // api
  const dispatch = useDispatch();
  const { teachers, status } = useSelector((state) => state.teacher);

  //  call api
  useEffect(() => {
    if (status === "idle") {
      dispatch(getallteacher());
    }
  }, [dispatch, status]);

  // delete
  const handleDelete = (teacherId) => {
    const isConfirmed = window.confirm(
      "Are you sure you want to delete this teacher?"
    );
    if (isConfirmed) {
      dispatch(deleteteacher(teacherId));
    }
  };

  const columns = [
    {
      label: "Teacher Name",
      accessor: "name",
      formatter: (value) => value || "N/A",
    },
    { label: "Phone", accessor: "phone", formatter: (value) => value || "N/A" },
    { label: "Age", accessor: "age", formatter: (value) => value || "N/A" },
    {
      label: "Experience",
      accessor: "experience",
      formatter: (value) => value || "N/A",
    },
    {
      label: "Address",
      accessor: "address",
      formatter: (value) => value || "N/A",
    },
    {
      label: "Aadhar Image",
      accessor: "aadharImg",
      formatter: (image) => {
        if (image) {
          return (
            <img
              src={image}
              alt="Aadhar image"
              className="w-12 h-12 object-cover rounded-2xl"
            />
          );
        } else {
          return "N/A";
        }
      },
    },
    {
      label: "Slot",
      accessor: "slot",
      formatter: (value) => (value.length ? value.join(", ") : "N/A"),
    },
    { label: "Email", accessor: "email", formatter: (value) => value || "N/A" },
    {
      label: "Description",
      accessor: "description",
      formatter: (value) => value || "N/A",
    },
    {
      label: "Social Handle",
      accessor: "socialHandle",
      formatter: (value) => value || "N/A",
    },
  ];

  return (
    <>
      <Row className="m-3">
        <Heading
          children={"Teachers"}
          className={"text-2xl font-medium my-2"}
        />
        <Row className="flex justify-end"></Row>
        <Table
          columns={columns}
          data={teachers || []}
          status={status}
          //   onEdit={handleEdit}
          onDelete={handleDelete}
        />
      </Row>
    </>
  );
}

export default teacher;
