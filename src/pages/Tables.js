import React from "react";
import {
  Row,
  Col,
  Card,
  Radio,
  Table,
  Upload,
  message,
  Progress,
  Button,
  Avatar,
  Typography,
} from "antd";
import { columns, tableData } from "utils/TablesData";
export default function Tables() {
  const onChange = (e) => {
    console.log(`radio checked:${e.target.value}`);
  };
  return (
    <>
      <div className="tabled">
        <Row gutter={[24, 0]}>
          <Col xs={24}>
            <Card
              bordered={false}
              className="criclebox tablespace mb-24"
              title="Author Table"
              extra={
                <Radio.Group>
                  <Radio.Button>All </Radio.Button>
                  <Radio.Button>Online</Radio.Button>
                </Radio.Group>
              }
            >
              <div className="table-responsive">
                <Table
                  columns={columns}
                  dataSource={tableData}
                  pagination={false}
                  className="ant-border-space"
                />
              </div>
            </Card>
            <Card
              bordered={false}
              className="criclebox tablespace mb-24"
              title="Projects Table"
              extra={
                <Radio.Group onChange={onChange} defaultValue="all">
                  <Radio.Button value="all">ALL</Radio.Button>
                  <Radio.Button value="online">ONLINE</Radio.Button>
                  <Radio.Button value="store">STORE</Radio.Button>
                </Radio.Group>
              }
            ></Card>
          </Col>
        </Row>
      </div>
    </>
  );
}
