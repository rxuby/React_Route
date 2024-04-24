import React, { useState } from "react";
import { Button, FormProps, message, Steps, theme } from "antd";
import RegisStep1 from "@components/Register/RegisStep1";
import RegisStep2 from "@components/Register/RegisStep2";
import RegisStep3 from "@components/Register/RegisStep3";
type FieldType = {
  username?: string;
  password?: string;
  remember?: string;
};

const RegisterForm: React.FC = () => {
  const { token } = theme.useToken();
  const [current, setCurrent] = useState(0);

  const next = (e:FieldType) => {
    setCurrent(current + 1);
    console.log(e);
  };
  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    console.log("Success:", values);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const steps = [
    {
      title: "",
      content: <RegisStep1 onSubmit={next} />,
    },
    {
      title: "",
      content: <RegisStep2 onSubmit={next}/>,
    },
    {
      title: "",
      content: <RegisStep3 onSubmit={onFinish}/>,
    },
  ];

  //   const onFinish = () => {
  //     if (current < steps.length - 1) {
  //       next();
  //     } else {
  //       message.success('Processing complete!');
  //     }
  //   };

  const items = steps.map((item) => ({ key: item.title, title: item.title }));

  const contentStyle: React.CSSProperties = {
    lineHeight: "260px",
    textAlign: "center",
    color: token.colorTextTertiary,
    backgroundColor: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    border: `1px dashed ${token.colorBorder}`,
    marginTop: 16,
  };

  return (
    <>
      <Steps current={current} items={items} />
      <div style={contentStyle}>{steps[current].content}</div>
      {/* <div style={{ marginTop: 24 }}>
        <Button type="primary" onClick={onFinish}>
          {current === steps.length - 1 ? 'Done' : 'Next'}
        </Button>
        {current > 0 && (
          <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
            Previous
          </Button>
        )}
      </div> */}
    </>
  );
};

export default RegisterForm;
