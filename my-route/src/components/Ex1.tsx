import { Image, Space } from "antd";
import {
  HomeOutlined,
  LoadingOutlined,
  SettingFilled,
  SmileOutlined,
  SyncOutlined,
} from "@ant-design/icons";
import { Button, Flex } from "antd";
import { Col, Row } from "antd";

function Ex1() {
  return (
    <div>
      <div>
        <Flex gap="small">
          <Button type="primary">Primary Button</Button>
          <Button>Default Button</Button>
          <Button type="dashed">Dashed Button</Button>
          <Button type="text">Text Button</Button>
          <Button type="link">Link Button</Button>
        </Flex>
      </div>
      <div className="mt-6">
        <Image
          width={200}
          src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
        />
      </div>

      <div className="mt-6">
        <Space>
          <HomeOutlined style={{ fontSize: 30, color: "#08c" }} />
          <SettingFilled style={{ fontSize: 30, color: "#08c" }} />
          <SmileOutlined />
          <SyncOutlined spin />
          <SmileOutlined rotate={180} />
          <LoadingOutlined />
        </Space>
      </div>

      <div>
        <Row>
          <Col className="bg-red-500" span={24}>
            col
          </Col>
        </Row>
        <Row>
          <Col className="bg-red-100" span={12}>
            col-12{" "}
          </Col>
          <Col className="bg-red-500" span={12}>
            col-12
          </Col>
        </Row>
        <Row>
          <Col className="bg-red-100" span={8}>
            col-8
          </Col>
          <Col className="bg-red-500" span={8}>
            col-8
          </Col>
          <Col className="bg-red-100" span={8}>
            col-8
          </Col>
        </Row>
        <Row>
          <Col className="bg-red-100" span={6}>
            col-6
          </Col>
          <Col className="bg-red-500" span={6}>
            col-6
          </Col>
          <Col className="bg-red-100" span={6}>
            col-6
          </Col>
          <Col className="bg-red-500" span={6}>
            col-6
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Ex1;
