import React from "react";
import { Typography, Row, Col } from "antd";
import ReactApexChart from "react-apexcharts";
import { eChart } from "./config/eChart";
const { Title, Paragraph } = Typography;
const items = [
  {
    title: "3,6K",
    user: "Users",
  },
  {
    title: "2m",
    user: "Clicks",
  },
  {
    title: "$772",
    user: "Sales",
  },
  {
    title: "82",
    user: "Items",
  },
];
export default function Echat() {
  return (
    <>
      <div id="chart">
        <ReactApexChart
          series={eChart.series}
          options={eChart.options}
          height={220}
          className="bar-chart"
          type="bar"
        />
      </div>
      <div className="chart-vistior">
        <Title level={5}>Active Users</Title>
        <Paragraph className="lastweek">
          than last week <span className="bnb2">+30%</span>
        </Paragraph>
        <Paragraph className="lastweek">
          We have created multiple options for you to put together and customise
          into pixel perfect pages.
        </Paragraph>
        <Row>
          {items.map(({ title, user }, index) => (
            <Col xs={6} key={index}>
              <div className="chart-visitor-count">
                <Title level={4}>{title}</Title>
                <span>{user}</span>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
}
