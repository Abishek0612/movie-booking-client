import React from "react";
import { Form } from "antd";
import Button from "../../components/Button";
import { Link } from "react-router-dom";

function Login() {
  
  const onFinish = (values) => {
    console.log("success", values);
  };

  return (
    <div className="flex justify-center h-screen items-center bg-primary">
      <div className="card p-3 w-400">
        <h1 className="text-xl mb-1">~ABISHEK MOVIES-REGISTER </h1>
<hr/>
        <Form layout="vertical" className="mt-1" onFinish={onFinish}>

          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: "Please input your email!" }]}
          >
            <input type="email" />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <input type="password" />
          </Form.Item>

          <div className="flex flex-col mt-2 gap-1">
            <Button fullWidth title="LOGIN" type="submit" />
            <p className="text-md">
              Don't have an account? <Link to="/register">Register</Link>{" "}
            </p>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default Login;
