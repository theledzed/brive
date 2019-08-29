import React from "react";

import { Layout, Menu, Breadcrumb, Icon } from "antd";
import "./App.css";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import { BrowserRouter as Router, Route } from "react-router-dom";
import User from "./components/User";
import Developer from "./components/develop"


const { Content, Sider } = Layout;
let page = <Developer/>;

class App extends React.Component {
  state = {
    collapsed: true
  };

  onCollapse = collapsed => {
    this.setState({ collapsed });
  };

  swicthPage = key => {
    if (key === "1") {
      page = <Developer/>;
    }else if(key === '2'){
      page =  <User/>;
    }
  };

  render() {
    return (
      <Layout style={{ minHeight: "100vh" }}>
      
          <div className="logo" />
          <Menu
            onSelect={item => {
              this.setState({
                key: item.key
              });
              this.swicthPage(item.key);
            }}
            theme="light"
            defaultSelectedKeys={["1"]}
            mode="horizontal"
          >
            <Menu.Item key="1">
              <Icon type="user" />
              <span>Pokemon list</span>
            </Menu.Item>

            <Menu.Item key="2">
              <Icon type="code" />
              <span>Developer</span>
            </Menu.Item>
          </Menu>
      
        <Layout>
          <Content style={{lineHeight: '64px',  background: "#fff"}}>{page}</Content>
        </Layout>
      </Layout>
    );
  }
}

export default App;
