import React from "react";
import type { UploadProps } from "antd";
import { message, Upload } from "antd";
import { ImageIcon } from "ui/base/svg";
import styled from "styled-components";
import { IColorScheme } from "ui/utils";

const { Dragger } = Upload;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: auto;
`;
const Text = styled.span`
  color: ${({ theme: { colors } }) => (colors as IColorScheme).accent};
`;
const Hint = styled.p`
  width: 50%;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 160%;
`;
const _: UploadProps = {
  name: "file",
  multiple: true,
  action: async (file) => {
    console.log(file);
    return "";
  },
  onChange(info) {
    const { status } = info.file;
    if (status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (status === "done") {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
  onDrop(e) {
    console.log("Dropped files", e.dataTransfer.files);
  },
};
export interface FileDragProps {
  dragProps: UploadProps;
  text: string;
  hint: string;
}
export const FileDragIn: React.FC<FileDragProps> = ({
  dragProps,
  text,
  hint,
}) => (
  <Dragger {...dragProps}>
    <Content>
      <div className="ant-upload-drag-icon">
        <ImageIcon />
      </div>
      <Hint className="ant-upload-hint">
        <Text className="ant-upload-text">{text} </Text>
        {hint}
      </Hint>
    </Content>
  </Dragger>
);
