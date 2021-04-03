import { useState } from "react";
import FormLogin from "./FormLogin";
import "./Login.css";

function Login() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }

  return (
    <>
      <div className="form-container">
        <div className="form-content-left">
          <img src="img/pugDab.png" alt="pugDab" className="form-img" />
        </div>
        <FormLogin />
      </div>
    </>
  );
}

export default Login;
