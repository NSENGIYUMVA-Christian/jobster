import React from "react";
import { useState, useEffect } from "react";
import { Logo, FormRow } from "../components";
import Wrapper from "../assets/wrappers/RegisterPage";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, registerUser } from "../features/user/userSlice";
import { useNavigate } from "react-router-dom";

// initial state
const initialState = {
  name: "",
  email: "",
  password: "",
  isMember: "true",
};

const Register = () => {
  const [values, setValues] = useState(initialState);

  // getting user state
  const { user, isLoading } = useSelector((store) => store.user);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  // handle form change
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setValues({ ...values, [name]: value });
  };

  //// handle submit
  const onSubmit = (e) => {
    e.preventDefault();
    const { name, email, password, isMember } = values;
    // verify fields values
    if (!email || !password || (!isMember && !name)) {
      toast.error("please fill out all fields");
      return;
    }
    // handle login
    if (isMember) {
      dispatch(loginUser({ email: email, password: password }));
      return;
    }
    //handle register
    dispatch(registerUser({ name, email, password }));
  };

  // toggle Member
  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember });
  };

  //programmatically navigate to dashboard
  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate("/");
      }, 2000);
    }
  }, [user]);

  return (
    <Wrapper className="full-page">
      <form className="form" onSubmit={onSubmit}>
        <Logo />
        <h3>{values.isMember ? "Login" : "Register"}</h3>

        {/* name field */}
        {!values.isMember && (
          <FormRow
            type="text"
            name="name"
            value={values.name}
            handleChange={handleChange}
          />
        )}

        {/* email field */}
        <FormRow
          type="email"
          name="email"
          value={values.email}
          handleChange={handleChange}
        />

        {/* password field */}
        <FormRow
          type="password"
          name="password"
          value={values.password}
          handleChange={handleChange}
        />

        <button type="submit" className="btn btn-block">
          {isLoading ? "loading..." : "Submit"}
        </button>
        <p>
          {values.isMember ? "Not a member yet?" : "Already a member?"}
          <button
            type="button"
            onClick={toggleMember}
            className="member-btn"
            disabled={isLoading}
          >
            {values.isMember ? "Register" : "Login"}
          </button>
        </p>
      </form>
    </Wrapper>
  );
};

export default Register;
