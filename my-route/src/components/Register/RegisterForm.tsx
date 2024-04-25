import React, { useState } from "react";
import {
  Button,
  Flex,
  Form,
  FormProps,
  message,
  Space,
  Steps,
  theme,
} from "antd";
import RegisStep1 from "@components/Register/RegisStep1";
import RegisStep2 from "@components/Register/RegisStep2";
import RegisStep3 from "@components/Register/RegisStep3";
type FieldType = {
  username?: string;
  password?: string;
};

const RegisterForm: React.FC = () => {
  const { token } = theme.useToken();
  const [current, setCurrent] = useState(0);

  //   const next = (e: FieldType) => {
  //     setCurrent(current + 1);
  //     console.log(e);
  //   };

  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    if (current !== steps.length - 1) {
      setCurrent(current + 1);
    } else {
      console.log("Success:", values);
      message.success("Success");
    }
  };

  const prev = () => {
    setCurrent(current - 1);
  };
  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
    errorInfo
  ) => {
    console.log("Failed:", errorInfo);
    // message.success("Fail");
  };

  const steps = [
    {
      title: "",
      content: <RegisStep1 />,
    },
    {
      title: "",
      content: <RegisStep2 />,
    },
    {
      title: "",
      content: <RegisStep3 />,
    },
  ];

  const items = steps.map((item) => ({ key: item.title, title: item.title }));

  const contentStyle: React.CSSProperties = {
    // lineHeight: "260px",
    // textAlign: "center",
    // color: token.colorTextTertiary,
    // backgroundColor: token.colorFillAlter,
    // borderRadius: token.borderRadiusLG,
    // border: `1px dashed ${token.colorBorder}`,
    // marginTop: 24,
  };

  return (
    <>
      <div className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500  flex justify-center content-center items-center h-screen ">
        <div className="border-2 rounded-[20px] p-[30px] bg-white ">
          <h1 className="font-bold text-[1.5rem] mb-6">Sign up Form</h1>
          <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 24 }}
            style={{ width:300 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            layout="vertical"
          >
            <Steps current={current} items={items} />
            <div style={contentStyle}>{steps[current]?.content}</div>
            <div className="flex  justify-between items-center ">
              {current > 0 && (
                <Button
                  className=" w-[140px] mr-3 p-5 text-[1rem] text-center flex justify-center items-center bg-amber-600 text-white"
                  onClick={() => prev()}
                >
                  PREVIOUS
                </Button>
              )}
              <Button
                type="primary"
                htmlType="submit"
                className="w-[140px] p-5 text-[1rem] text-center flex justify-center items-center bg-indigo-600"
              >
                {current === steps.length - 1 ? "DONE" : "NEXT"}
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
};

export default RegisterForm;
