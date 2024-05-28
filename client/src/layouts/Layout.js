import React from "react";
import {
  Layout,
  Menu,
  ConfigProvider,
  Divider,
  Flex,
  Typography,
  Image,
} from "antd";
import { Link, Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import "./Layout.css";

const { Header, Content, Footer } = Layout;
const { Title } = Typography;

const OverallLayout = () => {
  return (
    <ConfigProvider
      theme={{
        token: {
          // Seed Token
          borderRadius: 2,
          colorPrimary: "#98BDD2",
          colorPrimaryActive: "#98BDD2",

          // Alias Token
          colorBgContainer: "#FCFBF8",
          fontSize: 14,
          colorLink: "black",
          fontFamily: "Poppins, sans-serif",
        },
        components: {
          Layout: {
            headerBg: "#FCFBF8",
            bodyBg: "#FCFBF8",
            headerHeight: 84,
          },
          Menu: {
            horizontalItemSelectedColor: "#98BDD2",
          },
          Tabs: {
            itemActiveColor: "#98BDD2",
            itemHoverColor: "#98BDD2",
            itemSelectedColor: "#98BDD2",
            inkBarColor: "#98BDD2",
          },
        },
      }}
    >
      <Layout
        style={{
          minHeight: "100vh",
        }}
      >
        <Header
          style={{
            position: "sticky",
            top: 0,
            zIndex: 9999,
            width: "100%",
            display: "flex",
            alignItems: "center",
            backgroundColor: "#FCFBF8",
            padding: "50px 150px",
          }}
        >
          <Link to="/">
            <Image
              alt="logo"
              src={require("../images/logo192.png")}
              width={100}
              height={50}
              preview={false}
            />
          </Link>

          <div style={{ width: "48px" }}></div>
          <Menu
            mode="horizontal"
            style={{ flex: 1, minWidth: 0, display: "block" }}
          >
            <Menu.Item key="plan">
              <Link to="/">Pricing</Link>
            </Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: "0 150px" }}>
          <div
            style={{
              margin: "16px 0",
              padding: 24,
            }}
          >
            <Toaster />
            <Outlet />
          </div>
        </Content>
        <Footer style={{ background: "#FCFBF8", padding: "50px 150px" }}>
          <Divider></Divider>
          <Flex style={{ width: "100%" }}>
            <Flex style={{ width: "25%", justifyContent: "flex-start" }}>
              <Flex vertical gap="large">
                <Link to="/">
                  <Image
                    alt="logo"
                    src={require("../images/logo192.png")}
                    width={100}
                    height={50}
                    preview={false}
                  />
                </Link>
              </Flex>
            </Flex>

            <Flex
              style={{ right: 0, width: "90%", justifyContent: "flex-end" }}
            >
              <Flex vertical gap="large" style={{ width: "20%" }}>
                <Title level={5}>XYZ</Title>
              </Flex>

              <Flex vertical gap="large" style={{ width: "20%" }}>
                <Title level={5}>SUPPORT</Title>
              </Flex>

              <Flex vertical gap="large" style={{ width: "20%" }}>
                <Title level={5}>PARTNERS</Title>
              </Flex>

              <Flex vertical gap="large" style={{ width: "20%" }}>
                <Title level={5}>FOLLOW US</Title>

                {/* <Space direction="horizontal">
              <WhatsAppOutlined />
              <Text>(65)XXXX-XXXX</Text>
            </Space> */}
              </Flex>
            </Flex>
          </Flex>
          <Divider></Divider>© Copyright {new Date().getFullYear()} xyz (UEN:
          202411484C)
        </Footer>
      </Layout>
    </ConfigProvider>
  );
};

export default OverallLayout;
