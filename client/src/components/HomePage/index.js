import React from "react";
import {
  Button,
  Card,
  Space,
  Typography,
  Image,
  Col,
  Row,
  FloatButton,
} from "antd";
import {
  UpOutlined,
  ArrowRightOutlined,
  AppstoreOutlined,
  CreditCardOutlined,
  CalendarOutlined,
  SafetyOutlined,
} from "@ant-design/icons";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { Grid } from "@splidejs/splide-extension-grid";
import "@splidejs/react-splide/dist/css/splide.min.css";

const { Title, Text } = Typography;

const HomePage = () => {
  const images = require.context("../../images/partners", true);
  const imageList = images.keys().map((image) => images(image));

  const features = [
    {
      icon: <AppstoreOutlined style={{ fontSize: "2rem", color: "#1890ff" }} />,
      title: "Diverse Class Options",
      description:
        "Choose from a wide range of classes including arts, sports, music, and more.",
    },
    {
      icon: (
        <CreditCardOutlined style={{ fontSize: "2rem", color: "#1890ff" }} />
      ),
      title: "Easy Booking",
      description:
        "Book classes effortlessly with our user-friendly platform and in-store credit system.",
    },
    {
      icon: <CalendarOutlined style={{ fontSize: "2rem", color: "#1890ff" }} />,
      title: "Flexible Scheduling",
      description:
        "Find classes that fit your schedule with options available throughout the week.",
    },
    {
      icon: <SafetyOutlined style={{ fontSize: "2rem", color: "#1890ff" }} />,
      title: "Trusted Vendors",
      description:
        "We partner with top-rated vendors to ensure quality and safety for your children.",
    },
  ];

  return (
    <div style={{ padding: "0 180px" }}>
      {/* thumbnail */}
      <Text>fakfbajfabfjm,bfjmbfjmasbfjmab</Text>
      <div>
        <Image
          src={require("../../images/cover.jpg")}
          alt="cover"
          style={{
            width: "100%",
            backgroundSize: "contain",
            // height: isDesktop ? "" : isMobile ? "36vh" : "",
            filter: "brightness(50%)",
            margin: 0,
            padding: 0,
          }}
          preview={false}
        />
      </div>

      <div style={{ height: 48 }}></div>

      {/* Explore by age */}
      <div style={{ padding: "24px" }}>
        <Title level={1} style={{ textAlign: "center" }}>
          Explore by age
        </Title>
        <Space direction="horizontal">
          <Card></Card>
        </Space>
      </div>

      {/* Explore by categories */}
      <div style={{ padding: "24px" }}>
        <Title level={1} style={{ textAlign: "center" }}>
          Explore by categories
        </Title>
      </div>

      {/* partners */}
      <div style={{ padding: "24px" }}>
        <Title level={1} style={{ textAlign: "center" }}>
          As seen on
        </Title>
        <Splide
          style={{
            width: "100%",
          }}
          extensions={{ Grid }}
          options={{
            pagination: false,
            drag: "free",
            perPage: 4,
            perMove: 1,
            autoplay: "true",
            type: "loop",
            rewind: true,
            lazyLoad: "nearby",
            cover: true,
            grid: {
              rows: 1,
            },
            autoScroll: {
              speed: 1,
            },
          }}
        >
          {imageList.map((image, index) => (
            <SplideSlide>
              <Card
                style={{
                  display: "flex",
                  width: 240,
                  height: 240,
                }}
                bodyStyle={{
                  alignItems: "center",
                  display: "flex",
                }}
                bordered={false}
              >
                <Image
                  key={index}
                  src={image}
                  alt={`image-${index}`}
                  preview={false}
                />
              </Card>
            </SplideSlide>
          ))}
        </Splide>
      </div>

      {/* How it works */}
      {/* 1. Create an account and browse our extensive list of classes */}
      {/* 2. Select the classes that suit your child's interests and schedule */}
      {/* 3. Book and pay using our secure in-store credit system */}

      {/* CTA button */}
      <div>
        <Title level={3}>Discover and book with ease</Title>
        <Title
          level={1}
          style={{
            marginTop: 0,
          }}
        >
          Why Choose Us?
        </Title>
        <Text>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </Text>
        <Row gutter={[16, 16]}>
          {features.map((feature, index) => (
            <Col xs={24} sm={12} lg={12} key={index}>
              <Card>
                <Space
                  direction="vertical"
                  align="center"
                  style={{ width: "100%" }}
                >
                  {feature.icon}
                  <Title level={4}>{feature.title}</Title>
                  <Text>{feature.description}</Text>
                </Space>
              </Card>
            </Col>
          ))}
        </Row>
        <p>
          <Button type={"primary"}>
            Explore classes <ArrowRightOutlined />
          </Button>
        </p>
      </div>

      <FloatButton.BackTop icon={<UpOutlined />} />
    </div>
  );
};

export default HomePage;
