import { Typography } from "antd";
import React from "react";
import { Iconify } from "utils/Iconify";
import ReactApexChart from "react-apexcharts";
import { lineChart } from "./config/lineChart";

const { Title, Paragraph } = Typography;
export default function LineChart() {
  return (
    <>
      <div className="linechart">
        <div>
          <Title level={5}>Active Users</Title>
          <Paragraph className="lastweek">
            than the last week <span className="bnb2">+30%</span>
          </Paragraph>
        </div>
        <div className="sales">
          <ul>
            <li>{<Iconify icon="akar-icons:minus" />} Traffic</li>
            <li>
              {<Iconify icon="akar-icons:minus" style={{ color: "green" }} />}{" "}
              Sales
            </li>
          </ul>
        </div>
      </div>
      <ReactApexChart
        series={lineChart.series}
        options={lineChart.options}
        className="full-width"
        type="area"
        height={350}
        width={"100%"}
      />
    </>
  );
}
