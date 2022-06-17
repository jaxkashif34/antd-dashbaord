import ava1 from "../assets/images/logo-shopify.svg";
import ava2 from "../assets/images/logo-atlassian.svg";
import ava3 from "../assets/images/logo-slack.svg";
import ava5 from "../assets/images/logo-jira.svg";
import ava6 from "../assets/images/logo-invision.svg";
import face1 from "../assets/images/face-1.jpg";
import face2 from "../assets/images/face-2.jpg";
import face3 from "../assets/images/face-3.jpg";
import face4 from "../assets/images/face-4.jpg";
import face5 from "../assets/images/face-5.jpeg";
import face6 from "../assets/images/face-6.jpeg";
import pencil from "../assets/images/pencil.svg";
import { Avatar, Button, Typography, Progress } from "antd";
import moment from "moment";
import { Link } from "react-router-dom";
const { Title } = Typography;
const columns = [
  {
    title: "AUTHOR",
    dataIndex: "name",
    key: "name",
    width: "32%",
  },
  {
    title: "FUNCTION",
    dataIndex: "function",
    key: "function",
  },

  {
    title: "STATUS",
    key: "status",
    dataIndex: "status",
  },
  {
    title: "EMPLOYED",
    key: "employed",
    dataIndex: "employed",
  },
];
// get random boolean
const getRandomBoolean = () => Math.random() >= 0.5;
const data = [
  {
    name: "Michale Jhon",
    email: "michael@mail.com",
    img: face2,
    title: "manager",
    org: "organization",
    bool: getRandomBoolean(),
  },
  {
    name: "Alexa Liras",
    email: "alexa@mail.com",
    img: face3,
    title: "Programator",
    org: "Developer",
    bool: getRandomBoolean(),
  },
  {
    name: "Laure Perrier",
    email: "laure@mail.com",
    img: face1,
    title: "Executive",
    org: "Projects",
    bool: getRandomBoolean(),
  },
  {
    name: "Miriam Eric",
    email: "miriam@mail.com",
    img: face4,
    title: "Marketing",
    org: "organization",
    bool: getRandomBoolean(),
  },
  {
    name: "Richard Gran",
    email: "richard@mail.com",
    img: face5,
    title: "Manager",
    org: "Organization",
    bool: getRandomBoolean(),
  },
  {
    name: "John Levi",
    email: "john@mail.com",
    img: face6,
    title: "Tester",
    org: "Developer",
    bool: getRandomBoolean(),
  },
];

const tableData = data.map(({ name, email, img, title, org, bool }, index) => {
  return {
    key: index,
    name: (
      <Avatar.Group>
        <Avatar className="shape-avatar" src={img} shape="square" size={40} />
        <div className="avatar-info">
          <Title level={5}>{name}</Title>
          <p>{email}</p>
        </div>
      </Avatar.Group>
    ),
    function: (
      <div className="author-info">
        <Title level={5}>
          {title.charAt(0).toUpperCase() + title.slice(1)}
        </Title>
        <p>{org.charAt(0).toUpperCase() + org.slice(1)}</p>
      </div>
    ),
    status: (
      <Button type={bool ? "primary" : ""} className={bool ? "" : "tag-badge"}>
        {bool ? "ONLINE" : "OFFLINE"}
      </Button>
    ),
    employed: (
      <div className="ant-employed">
        <span>
          {moment()
            .add(9 + index, "days")
            .calendar()}
        </span>
        <a href="#pablo">Edit</a>
      </div>
    ),
  };
});
const project = [
  {
    title: "COMPANIES",
    dataIndex: "name",
    width: "32%",
  },
  {
    title: "BUDGET",
    dataIndex: "age",
  },
  {
    title: "STATUS",
    dataIndex: "address",
  },
  {
    title: "COMPLETION",
    dataIndex: "completion",
  },
];
const getRadomMoney = (max = 25000, min = 20000) =>
  Math.floor(Math.random() * (max - min)) + min;
const getRandomPer = () => Math.floor(Math.random() * 100);
const projectList = [
  {
    name: "Spotify Version",
    status: "working",
    img: ava1,
    money: getRadomMoney(),
    percent: getRandomPer(),
  },
  {
    name: "Progress Track",
    status: "working",
    img: ava2,
    money: getRadomMoney(),
    percent: getRandomPer(),
  },
  {
    name: "Jira Platform Errors",
    status: "done",
    img: ava5,
    money: getRadomMoney(),
    percent: getRandomPer(),
    format: () => "done",
  },
  {
    name: "Launch new Mobile App",
    status: "canceled",
    img: ava3,
    money: getRadomMoney(),
    percent: getRandomPer(),
  },
  {
    name: "Web Dev",
    status: "working",
    img: ava5,
    money: getRadomMoney(),
    percent: getRandomPer(),
  },
  {
    name: "Redesign Online Store",
    status: "canceled",
    img: ava6,
    money: getRadomMoney(),
    percent: getRandomPer(),
  },
];

const dataproject = projectList.map(
  ({ name, status, img, money, percent, format }, index) => {
    return {
      key: index,
      name: (
        <Avatar.Group>
          <Avatar className="shape-avatar" size={25} src={img} />
          <div className="avatar-info">
            <Title level={5}>{name}</Title>
          </div>
        </Avatar.Group>
      ),
      age: <div className="semibold">{money} $</div>,
      address: <div className="text-sm">{status}</div>,
      completion: (
        <div className="ant-progress-project">
          <Progress
            percent={index === 2 ? 100 : percent}
            size="small"
            format={format}
          />
          <span>
            <Link to="/">
              <img src={pencil} alt="" />
            </Link>
          </span>
        </div>
      ),
    };
  }
);
export { project, columns, tableData, dataproject };
