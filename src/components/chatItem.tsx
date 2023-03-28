import { Card, Col, Row, Comment, Image } from "antd";
import { FileFilled } from "@ant-design/icons";
import { IChatItem } from "../common/types";
import { NormalText } from "./Typography";

export const ChatItem: React.FC<IChatItem> = (props: IChatItem) => {
  const isJulebUser = props.email?.toLocaleLowerCase().includes("@juleb.com");
  const fileName = props.data.fileName?.toLowerCase();

  return (
    <Row justify={isJulebUser ? "end" : "start"} align="middle">
      <Col md={13} sm={24} xs={24}>
        <Card
          bordered
          style={
            isJulebUser
              ? {
                  backgroundColor: "#F0F0F0",
                  borderStyle: "solid",
                  borderColor: "#f18021",
                  borderRadius: 12,
                }
              : {
                  backgroundColor: "white",
                  borderStyle: "solid",
                  borderColor: "#f18021",
                  borderRadius: 12,
                }
          }
        >
          {props.type === "text" ? (
            <NormalText color={isJulebUser ? "black" : undefined}>
              {props.data}
            </NormalText>
          ) : fileName.endsWith(".png") ||
            fileName.endsWith(".jpg") ||
            fileName.endsWith(".jpeg") ||
            fileName.endsWith(".gif") ||
            fileName.endsWith(".svg") ? (
            <>
              <Image src={props.data.url}></Image>
            </>
          ) : (
            <>
              <FileFilled className="attachementIcon" src={props.data.url} />
            </>
          )}
          <NormalText color={isJulebUser ? "black" : undefined}>
            <a href={props.data.url}>{props.data.fileName}</a>
          </NormalText>
        </Card>
        <Comment
          style={isJulebUser ? { direction: "rtl" } : { direction: "ltr" }}
          author={props.username}
          datetime={props.time}
          content={undefined}
        />
      </Col>
    </Row>
  );
};
