import {
  Card,
  Row,
  Col,
  Typography,
  Radio,
  Upload,
  message,
  Button,
  Timeline,
} from "antd";
import Echat from "components/charts/Echat";
import LineChart from "components/charts/LineChart";
import React, { useState } from "react";
import { count, list } from "utils/HomeData";
import { Iconify } from "utils/Iconify";
import AntCard from "components/AntCard";
import card from "../assets/images/info-card-1.jpg";
import { timelineList } from "utils/HomeData";
const { Title, Paragraph, Text } = Typography;
export default function Home() {
  const [reverse, setReverse] = useState(false);
  const onChange = (e) => console.log(`radio checked:${e.target.value}`);
  const uploadProps = {
    name: "file",
    action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
    headers: {
      authorization: "authorization-text",
    },
    onChange(info) {
      if (info.file.status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === "done") {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === "error") {
        message.error(`${info.file.name} file upload failed`);
      }
    },
  };
  return (
    <>
      <div className="layout-content">
        <Row className="rowgap-vbox" gutter={[24, 0]}>
          {count.map((c, index) => {
            return (
              <Col
                key={index}
                xs={24}
                sm={24}
                md={12}
                lg={6}
                xl={6}
                className="mb-24"
              >
                <Card bordered={false} className="criclebox">
                  <div className="number">
                    <Row align="middle" gutter={[24, 0]}>
                      <Col xs={18}>
                        <span>{c.today}</span>
                        <Title level={3}>
                          {c.title} <small className={c.bnb}>{c.persent}</small>
                        </Title>
                      </Col>
                      <Col xs={6}>
                        <div className="icon-box">{c.icon}</div>
                      </Col>
                    </Row>
                  </div>
                </Card>
              </Col>
            );
          })}
        </Row>
        <Row gutter={[24, 0]}>
          <AntCard xl={10}>
            <Echat />
          </AntCard>
          <AntCard xl={14}>
            <LineChart />
          </AntCard>
        </Row>
        <Row gutter={[24, 0]}>
          <AntCard cardClass="cardbody" xl={16}>
            <div className="project-ant">
              <div>
                <Title level={5}>Project</Title>
                <Paragraph className="lastweek">
                  done this month <span className="blue">40%</span>
                </Paragraph>
              </div>
              <div className="ant-filtertabs">
                <div className="antd-pro-pages-dashboard-analysis-style-salesExtra">
                  <Radio.Group onChange={onChange} defaultValue="a">
                    <Radio.Button value="a">All</Radio.Button>
                    <Radio.Button value="b">ONLINE</Radio.Button>
                    <Radio.Button value="c">STORES</Radio.Button>
                  </Radio.Group>
                </div>
              </div>
            </div>
            <div className="ant-list-box table-responsive">
              <table className="width-100">
                <thead>
                  <tr>
                    <th>COMPANIES</th>
                    <th>MEMBERS</th>
                    <th>BUDGET</th>
                    <th>COMPLETION</th>
                  </tr>
                </thead>
                <tbody>
                  {list.map((d, index) => {
                    return (
                      <tr key={index}>
                        <td>
                          <h6>
                            <img
                              src={d.img}
                              alt=""
                              className="avatar-sm mr-10"
                            />
                            {d.Title}
                          </h6>
                        </td>
                        <td>{d.member}</td>
                        <td>
                          <span className="text-xs font-weight-bold">
                            {d.bud}
                          </span>
                        </td>
                        <td className="percent-progress">{d.progress}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <div className="uploadfile shadow-none">
              <Upload {...uploadProps}>
                <Button
                  type="dashed"
                  className="ant-full-box"
                  icon={<Iconify icon="akar-icons:align-to-top" />}
                >
                  <span className="click">Click to Upload</span>
                </Button>
              </Upload>
            </div>
          </AntCard>
          <AntCard xl={8}>
            <div className="timeline-box">
              <Title level={5}>Orders History</Title>
              <Paragraph className="lastweek" style={{ marginBottom: 24 }}>
                this month <span className="bnb2">20%</span>
              </Paragraph>
              <Timeline
                pending="Recording..."
                className="timelinelist"
                reverse={reverse}
              >
                {timelineList.map((t, index) => (
                  <Timeline.Item color={t.color} key={index}>
                    <Title level={5}>{t.title}</Title>
                    <Text>{t.time}</Text>
                  </Timeline.Item>
                ))}
              </Timeline>
              <Button
                type="primary"
                className="width-100"
                onClick={() => setReverse(!reverse)}
              >
                {<Iconify icon="eva:menu-2-fill" />} REVERSE
              </Button>
            </div>
          </AntCard>
        </Row>
        <Row gutter={[24, 0]}>
          <AntCard xl={14}>
            <Row>
              <Col xs={24} md={12} sm={24} lg={12} xl={14} className="mb-24">
                <div className="h-full col-content p-20">
                  <div className="ant-muse">
                    <Text>Built by Developer</Text>
                    <Title level={5}>Antd Dashboard for Ant Design</Title>
                    <Paragraph className="lastweek mb-36">
                      From colors, cards, typography to complex elements, you
                      will find the full documentation.
                    </Paragraph>
                  </div>
                  <div className="card-footer">
                    <a href="#pablo" className="icon-move-right">
                      Read more{" "}
                      {
                        <Iconify
                          icon="eva:chevron-right-fill"
                          width="17px"
                          height="17px"
                        />
                      }
                    </a>
                  </div>
                </div>
              </Col>
              <Col xs={24} md={12} sm={24} lg={12} xl={10} className="col-img">
                <div className="ant-cret text-right">
                  <img src={card} className="border10" alt="" />
                </div>
              </Col>
            </Row>
          </AntCard>
          <AntCard xl={10} cardClass="card-info-2">
            <div className="gradent h-full col-content">
              <div className="card-content">
                <Title level={5}>Work with the best</Title>
                <p>
                  Wealth creation is an evolutionarily recent positive-sum game.
                  It is all about who take the opportunity first.
                </p>
              </div>
              <div className="card-footer">
                <a href="#pablo" className="icon-move-right">
                  Read more{<Iconify icon="eva:chevron-right-fill" />}
                </a>
              </div>
            </div>
          </AntCard>
        </Row>
      </div>
    </>
  );
}
