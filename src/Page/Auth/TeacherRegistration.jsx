import React, { useState } from "react";
import {
  Button,
  Column,
  Heading,
  Input,
  Row,
  Span,
  Wraper,
} from "../../components/ComponentsIndex";
import { sinupimage, logo } from "../../components/Img/ImportedImage";
import Img from "../../components/Img/Img";
import { createteacher } from "../../ReduxToolkit/Slice/Teacher";
import { useSelector, useDispatch } from "react-redux";
import ClipLoader from "react-spinners/ClipLoader";
import Select from "react-select";
import "./Auth.css";

// Define the time slot options
const timeOptions = Array.from({ length: 16 }, (_, index) => {
  const hour = 5 + Math.floor(index / 2);
  const minute = (index % 2) * 30;
  const nextHour = hour + (minute === 30 ? 1 : 0);
  const nextMinute = minute === 30 ? 0 : 30;
  return {
    value: `${hour}:${minute === 0 ? "00" : minute} - ${nextHour}:${
      nextMinute === 0 ? "00" : nextMinute
    }`,
    label: `${hour}:${minute === 0 ? "00" : minute} - ${nextHour}:${
      nextMinute === 0 ? "00" : nextMinute
    }`,
  };
});

function TeacherRegistration() {
  const dispatch = useDispatch();
  const { status } = useSelector((state) => state.teacher);

  // Local state for form fields
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [specialization, setSpecialization] = useState("");
  const [age, setAge] = useState("");
  const [experience, setExperience] = useState("");
  const [address, setAddress] = useState("");
  const [aadharImg, setAadharImg] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [slots, setSlots] = useState([]);

  // Form submission handler
  const registerhandle = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("phone", phone);
    formData.append("specialization", specialization);
    formData.append("age", age);
    formData.append("experience", experience);
    formData.append("address", address);
    formData.append("aadharImg", aadharImg);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("slots", JSON.stringify(slots.map((slot) => slot.value)));

    dispatch(createteacher(formData)).then(() => {
      // Reset form fields after successful submission
      setName("amit");
      setPhone("");
      setSpecialization("");
      setAge("18");
      setExperience("");
      setAddress("Baprola");
      setAadharImg(null);
      setEmail("");
      setPassword("");
      setSlots([]);
    });
  };

  return (
    <Row className="bg-custom-peach flex justify-end">
      <Column className="md:w-3/6 w-full lg:w-3/6 flex items-center justify-center min-h-screen">
        <Wraper className="shadow-md bg-white rounded-md px-4 py-3 w-5/6">
          <Heading
            children={"Sign Up"}
            className={"text-4xl font-bold text-center text-orange-400 my-2"}
          />
          <form onSubmit={registerhandle} encType="multipart/form-data">
            <Wraper className="grid grid-cols-2 gap-x-5">
              <Input
                type="text"
                required
                placeholder={"Full Name"}
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <Input
                type="tel"
                required
                placeholder={"Mobile"}
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              <Input
                type="text"
                required
                placeholder={"Specialization"}
                value={specialization}
                onChange={(e) => setSpecialization(e.target.value)}
              />
              <Input
                type="number"
                required
                placeholder={"Age"}
                value={age}
                onChange={(e) => setAge(e.target.value)}
              />
              <Input
                type="text"
                required
                placeholder={"Experience"}
                value={experience}
                onChange={(e) => setExperience(e.target.value)}
              />

              <Input
                type="file"
                required
                onChange={(e) => setAadharImg(e.target.files[0])}
              />
              <Input
                type="email"
                required
                placeholder={"Email"}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Input
                type="password"
                required
                placeholder={"Password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Wraper>
            <Input
              type="text"
              required
              placeholder={"Location"}
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />

            <Select
              styles={{
                control: (baseStyles, state) => ({
                  ...baseStyles,
                  borderColor:
                    state.isFocused || slots.length > 0 ? "orange" : "orange",
                  borderRadius: state.isFocused ? "10px" : "10px",
                  padding: state.isFocused ? "4px" : "4px",
                  boxShadow: state.isFocused ? "0 0 0 1px orange" : "none",
                  "&:hover": {
                    borderColor: "orange",
                  },
                }),
              }}
              isMulti
              name="slots"
              required
              options={timeOptions}
              className="custom-select"
              classNamePrefix="custom"
              value={slots}
              onChange={(selectedOptions) => setSlots(selectedOptions)}
            />
            <Wraper className="grid">
              <Button type="submit">
                {status === "loading" ? (
                  <div className="flex justify-center items-center">
                    <ClipLoader color="white" size={25} />
                  </div>
                ) : (
                  "SUBMIT"
                )}
              </Button>
            </Wraper>
          </form>
        </Wraper>
      </Column>

      <Column
        className="w-full md:w-3/6 lg:w-3/6 bg-cover bg-center items-center justify-center h-screen hidden md:block"
        style={{ backgroundImage: `url(${sinupimage})` }}
      >
        <Wraper className="flex items-center justify-center text-center">
          <Wraper className="">
            <Img children={logo} className="mx-auto" />
            <Heading className={"text-6xl font-bold"}>
              Your <Span className={"text-orange-400"}>Yoga</Span> Your
              <Span className={"text-orange-400"}> Way</Span>
            </Heading>
          </Wraper>
        </Wraper>
      </Column>
    </Row>
  );
}

export default TeacherRegistration;
