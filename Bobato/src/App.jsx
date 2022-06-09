import { useState } from "react";
import "./App.css";
import Home from "./homePages/homePage.jsx";
import { Login } from "./loginAndRegister/login";
import { Headers, Footers } from "./structure/structure";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Layout, Button, Card } from "antd";
import { Register } from "./loginAndRegister/register";

const { Header, Footer, Sider, Content } = Layout;

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Layout>
        <Header
          style={{
            height: 130,
          }}
        >
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Headers />} />
              <Route path="/Login" element={<Login />} />
              <Route path="/register" element={<Register />} />

            </Routes>
          </BrowserRouter>
        </Header>
        <Layout>
          <Sider>
            <Card
              style={{
                width: 300,
              }}
              cover={
                <img
                  alt="example"
                  src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                />
              }
            ></Card>
          </Sider>
          <Content></Content>
        </Layout>
        <Layout>
          <Content>Content</Content>
          <Sider>Sider</Sider>
        </Layout>
        <Footer>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Footers />} />
            </Routes>
          </BrowserRouter>
        </Footer>
      </Layout>
    </>
  );
}

export default App;
