import React from "react";
import { Row, Col, Card, Radio, Table, Upload, message } from "antd";
import { columns, tableData, dataproject, project } from "utils/TablesData";
const { Dragger } = Upload;
export default function Tables() {
  const onChange = (e) => {
    console.log(`radio checked:${e.target.value}`);
  };

  const props = {
    name: "file",
    action: "",
    headers: {
      authorization: "authorization-text",
    },
    onChange({ file, fileList }) {
      if (file.status !== "uploading") {
        console.log(file, fileList);
      }
      if (file.status === "done") {
        message.success(`${file.name} file uploaded successfully`);
      } else if (file.status === "error") {
        message.error(`${file.name} file upload failed`);
      }
    },
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
            >
              <div className="table-responsive">
                <Table
                  columns={project}
                  dataSource={dataproject}
                  pagination={false}
                  className="ant-border-space"
                />
              </div>
              <div className="uploadfile pb-15 shadow-none">
                <Dragger {...props}>Click or Drop to Upload</Dragger>
              </div>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}
