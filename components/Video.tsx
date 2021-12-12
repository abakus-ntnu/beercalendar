import React, { useEffect, useState } from "react";
import YouTube from "react-youtube";
import { Modal, Button, Typography } from "antd";
import { PlayCircleOutlined } from "@ant-design/icons";
import styles from "./Video.module.css";

const { Text } = Typography;

import { IVideo } from "models/video";

type props = {
  video: IVideo | null;
  initiallyOpen: boolean;
};

const Video = ({ video, initiallyOpen }: props) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    if (initiallyOpen) {
      showModal();
    }
  }, [initiallyOpen]);

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
        type="default"
        icon={<PlayCircleOutlined />}
        shape="circle"
        onClick={showModal}
        className={styles.button}
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
