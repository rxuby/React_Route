import React, { useState } from "react";
import { Button, Checkbox, Flex, Form, Input } from "antd";
import type { DatePickerProps } from "antd";
import { DatePicker, Radio, Space } from "antd";
import type { RadioChangeEvent } from "antd";
import { Divider } from "antd"; // ลบการนำเข้าที่ซ้ำกันที่นี่ออก
import type { CheckboxProps, GetProp } from "antd";
import { Switch } from "antd";

export type FieldType = {
  bday?: Date;
  gender?: Boolean;
  hobbies?: string[];
};

const onChange: DatePickerProps["onChange"] = (date, dateString) => {
  console.log(date, dateString);
};

type CheckboxValueType = GetProp<typeof Checkbox.Group, "value">[number];

const CheckboxGroup = Checkbox.Group;

const plainOptions = ["ดูหนัง", "ฟังเพลง", "เล่นเกม", "อื่นๆ"];
const defaultCheckedList: CheckboxValueType[] = [];

const RegisStep3: React.FC = () => {
  const [value, setValue] = useState<number>(1);
  const [checkedList, setCheckedList] =
    useState<CheckboxValueType[]>(defaultCheckedList);
  const [isOtherChecked, setIsOtherChecked] = useState<boolean>(false);
  const [otherHobby, setOtherHobby] = useState<string>("");

  const checkAll = plainOptions.length === checkedList.length;

  const onChangeRadio = (e: RadioChangeEvent) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };

  const onCheckboxChange = (list: CheckboxValueType[]) => {
    setCheckedList(list);
    setIsOtherChecked(list.includes("อื่นๆ"));
    if (!list.includes("อื่นๆ")) {
      setOtherHobby("");
    }
  };

  const onCheckAllChange: CheckboxProps["onChange"] = (e) => {
    setCheckedList(e.target.checked ? plainOptions : []);
    setIsOtherChecked(
      e.target.checked
        ? false
        : e.target.checked === false
        ? false
        : checkedList.includes("อื่นๆ")
    );
    if (e.target.checked) {
      setOtherHobby("");
    }
  };

  const onOtherHobbyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOtherHobby(e.target.value);
  };

  const onChangeSwitch = (checked: boolean) => {
    console.log(`switch to ${checked}`);
  };

  return (
    <>
      <div>
        <h1 className="mt-2 mb-2 text-left text-[18px] font-semibold ">
          Confirm :
        </h1>
        <Form.Item<FieldType>
          label="birth date"
          name="bday"
          rules={[
            { required: true, message: "Please input select birth date!" },
          ]}
        >
          <DatePicker onChange={onChange} style={{ width: "100%" }} />
        </Form.Item>
        <br />
        <div className="flex ">
          <p>Gender :</p>
          <Form.Item<FieldType>
            //   className="[&_div]:!flex-row [&_div_div:last-child]:!w-auto"
            //   label="Gender"
            name="gender"
            rules={[{ required: true, message: "Please choose your gender!" }]}
          >
            <Radio.Group
              onChange={onChangeRadio}
              value={value}
              style={{ display: "flex", marginTop: 10 }}
            >
              <Radio value="male">ชาย</Radio>
              <Radio value="female">หญิง</Radio>
            </Radio.Group>
          </Form.Item>
        </div>
        <Form.Item<FieldType>
          label="งานอดิเรก"
          name="hobbies"
          //   rules={[
          //     {
          //       required: checkAll || isOtherChecked,
          //       message: "Please choose your hobbies!",
          //     },
          //   ]}
        >
          <Checkbox
            onChange={onCheckAllChange}
            checked={checkAll}
            style={{ display: "flex", width: 300 }}
          >
            เลือกทั้งหมด
          </Checkbox>
          <Divider />
          <CheckboxGroup
            options={plainOptions}
            value={checkedList}
            onChange={onCheckboxChange}
          />
          {(checkAll || isOtherChecked) && (
            <Form.Item name="otherHobby" style={{ marginTop: "10px" }}>
              <Input
                placeholder="ระบุ"
                value={otherHobby}
                onChange={onOtherHobbyChange}
              />
            </Form.Item>
          )}

          <Form.Item
            style={{ marginTop: 20 }}
            className="[&_div]:!flex-row [&_div_div:last-child]:!w-auto"
            name="fieldA"
            valuePropName="checked"
            label="ยอมรับเงื่อนไข : "
            rules={[
              {
                validator: (_, value) =>
                  value
                    ? Promise.resolve()
                    : Promise.reject("Please accept the conditions."),
              },
            ]}
          >
            <Switch onChange={onChangeSwitch} className="w-6 flex" />
          </Form.Item>
        </Form.Item>
      </div>
    </>
  );
};

export default RegisStep3;
