import { useState } from "react";
import style from "../pages/register.module.css";
import axios from "axios";
import toast from "react-hot-toast";

const Register = () => {
  let [registerUser, setRegisterUser] = useState({
    username: "",
    useremail: "",
    userpassword: "",
    phone: "",
  });

  let RegisterHandle = (e) => {
    let { name, value } = e.target;
    setRegisterUser({ ...registerUser, [name]: value });
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    console.log(registerUser);

    const { username, useremail, userpassword, phone, gender } = registerUser;
    if (!username || !useremail || !userpassword || !phone || !gender) {
      toast.error("Please fill all fields");
      return;
    }

    try {
      axios.post("http://localhost:8282/saveUser", registerUser);
      toast.success("Register seccessful");
    } catch (error) {}
    toast.error("Registerd faild");
  };


return (
  <>
    <div className={style.formController}>
      <h1>Register User</h1>
      <form action="">
        <input
          type="text"
          required
          placeholder="Enter Name"
          name="username"
          value={registerUser.username}
          onChange={RegisterHandle}
        />
        <br />

        <input
          type="text"
          required
          placeholder="Enter Email"
          name="useremail"
          value={registerUser.useremail}
          onChange={RegisterHandle}
        />
        <br />

        <input
          type="password"
          required
          placeholder="Enter Password"
          name="userpassword"
          value={registerUser.userpassword}
          onChange={RegisterHandle}
        />
        <br />

        <input
          type="text"
          required
          placeholder="+91 xxxxxxxxxx"
          name="phone"
          value={registerUser.phone}
          onChange={RegisterHandle}
        />
        <br />

        <div>
          <input
            id="male"
            type="radio"
            required
            name="gender"
            value="male"
            onChange={RegisterHandle}
          />
          <label htmlFor="male">Male</label>

          <input
            id="female"
            type="radio"
            required
            name="gender"
            value="female"
            onChange={registerUser}
          />
          <label htmlFor="female">Female</label>
        </div>
        <br />

        <button
          type="submit"
          onClick={handleSubmit}
          className={style.submitbtn}
        >
          Submit
        </button>
      </form>
    </div>
  </>
);
};
export default Register;
