import React, { useState } from "react";
import YouTube from "react-youtube";
import { Modal, Button, Typography } from "antd";
import { PlayCircleOutlined } from "@ant-design/icons";

const { Text } = Typography;

import { IVideo } from "models/video";

type props = {
  video: IVideo | null;
};

const Video = ({ video }: props) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const opts = {
    height: "400",
    width: "100%",
  };

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  if (!video) {
    return <> </>;
  }

  return (
    <>
      <Button
        type="secondary"
        icon={<PlayCircleOutlined />}
        shape="circle"
        onClick={showModal}
      />

      <Modal
        title={video.name}
        visible={isModalVisible}
        onOk={handleOk}
        centered
        onCancel={handleCancel}
        footer={null}
        width={800}
        destroyOnClose
      >
        <YouTube id={video._id} videoId={video.link} opts={opts} />
        <Text>{video.description}</Text>
      </Modal>
    </>
  );
};

export default Video;
