import React from "react";
import type { FormProps } from "antd";
import { Button, Checkbox, Form, Input } from "antd";

export type FieldType = {
  username?: string;
  password?: string;
};

const RegisStep1: React.FC = () => {
  return (
    <>
      <div className=" ">
        <h1 className=" mt-2 mb-2  text-left text-[18px] font-semibold  ">
          General:
        </h1>

        <Form.Item<FieldType> 
          label="Username"
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
          className=" "
        >
            
          <Input />
        </Form.Item>

        <Form.Item<FieldType>
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
          className=" "
        >
          <Input.Password style={{ marginBottom:10 }} />
        </Form.Item>
      </div>
    </>
  );
};

export default RegisStep1;
