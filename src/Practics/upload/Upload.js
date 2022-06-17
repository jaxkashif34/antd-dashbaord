import React, { useEffect, useState } from "react";
import { Upload, Button, message, Divider } from "antd";
import { Iconify } from "utils/Iconify";
const beforeUpload = (file) => {
  console.log(file)
  const isJpg_Png = file.type === "image/png" || file.type === "image/jpeg";
  if (!isJpg_Png) {
    message.error(`${file.name} is not a JPG/PNG file`);
  }
  let isLt2Mb = file.size / 1024 / 1024 < 2;
  let fileSize = Math.floor(file.size / 1024 / 1024);
  if (!isLt2Mb) {
    message.error(`${file.name} size is ${fileSize}MB must be less than 2MB`);
  }
  return isJpg_Png && isLt2Mb;
};
const getBase64 = (img, callback) => {
  const reader = new FileReader();
  console.log("reader", reader);
};
export default function AntUpload() {
  const [loading, setLoading] = useState(false);
  const [imgUrl, setImgUrl] = useState("");
  const props = {
    name: "file",
    action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
    headers: {
      authorization: "authorization-text",
    },
    onChange: function ({ file, fileList }) {
      // file.status = "done";
      if (file.status !== "uploading") {
        console.log(file, fileList);
      }
      if (file.status === "done") {
        message.success(`${file.name} uploaded successfully`);
      } else if (file.status === "error") {
        message.error(`${file.name} failed to upload`);
      }
    },
  };

  const handleChange = ({ file, fileList }) => {
    if (file.status === "uploading") {
      setLoading(true);
      return;
    }
    if (file.status === "done") {
      getBase64(file.originFileObj, (img) => {
        setLoading(false);
        setImgUrl(img);
      });
    }
  };
  return (
    <div>
      <Upload
        {...props}
        name="avatar"
        listType="picture-card"
        showUploadList={false}
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        beforeUpload={beforeUpload}
        onChange={handleChange}
      >
        kashif
      </Upload>
    </div>
  );
}
