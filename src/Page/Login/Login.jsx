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

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { status, error } = useSelector((state) => state.auth);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
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
            <main className="form-signin bg-white rounded-lg shadow-lg py-10 px-20 w-full max-w-lg mx-3">
              <form onSubmit={handleSubmit}>
                <Heading
                  children={"Login"}
                  className={"text-3xl font-bold py-2 mb-14 text-center text-[#06B13D]"}
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
                <div className="flex justify-end text-[#06B13D] text-lg font-semibold -mt-3">
                  Forget Password
                </div>
                <Column className="grid mt-8  ">
                  <Button children="Login" type="submit">
                    {status === "loading" ? (
                      <div className="flex justify-center items-center">
                        <ClipLoader color="white" size={25} />
                      </div>
                    ) : (
                      "Login"
                    )}
                  </Button>
                </Column>
                <div className="font-semibold text-xl text-center my-10">
                  Didn’t have an account? <span className="text-[#06B13D]"><a href="/sign-up">Sign Up</a></span>
                </div>
              </form>
            </main>
          </Column>
        </Row>
      </Container>
    </div>
  );
}

export default Login;
