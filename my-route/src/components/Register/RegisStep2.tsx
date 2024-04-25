import React from "react";
import { Button, Checkbox, Form, Input } from "antd";

export type FieldType = {
  email?: string;
  phone?: RegExp;
};

const RegisStep1: React.FC = () => {
  return (
    <>
    <div>
        <h1 className="mt-2 mb-2 text-left text-[18px] font-semibold  ">Contact :</h1>
      <Form.Item<FieldType>
        label="Email" 
        name="email"
        rules={[
          { required: true, message: "Please input your email!" },
          {
            type: "email",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item<FieldType>
        label="Phone"
        name="phone"
        rules={[
          { required: true, message: "Please input your phone number!" },
          {
            pattern: /^[0-9]{10}$/,
            message: "Please input valid phone number!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      {/* <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <div className="flex flex-row">
          <Button type="primary" htmlType="submit">
            Next
          </Button>
          <Button onClick={onPrev} type="primary">
            Previous
          </Button>
        </div>
      </Form.Item> */}
      {/* // </Form> */}
      </div>
    </>
  );
};

export default RegisStep1;
