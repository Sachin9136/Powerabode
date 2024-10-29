import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../../ReduxToolkit/Slice/LoginSlice";
import { useDispatch, useSelector } from "react-redux";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import { Column, Container, Heading, Row, Span } from "../../components/ComponentsIndex";
import { toast } from "react-toastify";
import { ClipLoader } from "react-spinners";
import { logo } from "../../components/Img/ImportedImage";
import { Link } from "react-router-dom";

function Sign_up() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { status, error } = useSelector((state) => state.auth);

  const [name, setName] = useState("");
  const [p_number, setP_number] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [C_password, setC_password] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleP_numberChange = (event) => {
    setP_number(event.target.value);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleC_passwordChange = (event) => {
    setC_password(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    dispatch(login({ email, password }));
  };

  const handleCheckboxChange = (event) => {
    setShowPassword(event.target.checked);
  };

  useEffect(() => {
    if (status === "failed") {
      toast.error(error);
    }
    if (status === "succeeded") {
      navigate("/");
    }
  }, [status]);

  return (
    <div className="">
      <Container className="">
        <Row className="">
          <Column className="flex justify-evenly items-center pt-10">
            <main>
              <img src={logo} alt="" width="300px"/>
            </main>
            <main className="form-signin bg-white rounded-lg shadow-lg px-20 w-full max-w-lg mx-3">
              <form onSubmit={handleSubmit}>
                <Heading
                  children={"Sign Up"}
                  className={"text-3xl font-bold py-2 text-center text-[#06B13D]"}
                />
                <Input
                  className="border-solid border-2 border-[#06B13D] py-4 text-black text-xl font-semibold placeholder-black"
                  placeholder="Name"
                  required
                  type="text"
                  value={name}
                  onChange={handleNameChange}
                />

                <Input
                  className="border-solid border-2 border-[#06B13D] py-4 text-black text-xl font-semibold placeholder-black"
                  placeholder="Phone No."
                  required
                  type="number"
                  value={p_number}
                  onChange={handleP_numberChange}
                />

                <Input
                  className="border-solid border-2 border-[#06B13D] py-4 text-black text-xl font-semibold placeholder-black"
                  placeholder="Email ID"
                  required
                  type="email"
                  value={email}
                  onChange={handleEmailChange}
                />
                <div className="relative">
                  <Input
                  className="border-solid border-2 border-[#06B13D] py-4 text-black text-xl font-semibold placeholder-black"
                    required
                    placeholder="Password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={handlePasswordChange}
                  />
                </div>

                <div className="relative">

                <Input
                  className="border-solid border-2 border-[#06B13D] py-4 text-black text-xl font-semibold placeholder-black"
                    required
                    placeholder="Confirm Password"
                    type={showPassword ? "text" : "password"}
                    value={C_password}
                    onChange={handleC_passwordChange}
                  />
                </div>
                <Column className="grid mt-8 ">
                  <Button children="Sign Up" type="submit">
                    {status === "loading" ? (
                      <div className="flex justify-center items-center">
                        <ClipLoader color="white" size={25} />
                      </div>
                    ) : (
                      "Sign Up"
                    )}
                  </Button>
                </Column>
                <div className="font-semibold text-xl text-center mt-5 mb-10">
                  Already have an account? <span className="text-[#06B13D]"><Link to="/login">Sign In</Link></span>
                </div>
              </form>
            </main>
          </Column>
        </Row>
      </Container>
    </div>
  );
}

export default Sign_up;
