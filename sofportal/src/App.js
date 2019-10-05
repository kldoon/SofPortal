import React from 'react';
import './App.css';
import { Layout, Tabs, Icon } from 'antd';
import NewestQuestions from './components/NewestQuestions'
function App() {
  const { Header,  Content } = Layout;
  const { TabPane } = Tabs;

  return (
    <div className="App" style={{height:"100%"}}>
      <Layout  style={{height:"100%"}}>
        <Header className="main-header">SOFPortal</Header>
        <Content className="main-content">
          <Tabs defaultActiveKey="1">
            <TabPane
              tab={
                <span>
                  <Icon type="fire" />
                  Newest Questions
                </span>
              }
              key="1"
            >
              <NewestQuestions/>
            </TabPane>
            <TabPane
              tab={
                <span>
                  <Icon type="line-chart" />
                  Top Voted Questions
                </span>
              }
              key="2"
            >
              Tab 2xxxxxxxxxxxxxxxxxxxxx
            </TabPane>
            <TabPane
              tab={
                <span>
                  <Icon type="setting" />
                  Settings
                </span>
              }
              key="3"
            >
              Settings
            </TabPane>

          </Tabs>
      </Content>
        {/* <Footer>Footer</Footer> */}
      </Layout>


    </div>
  );
}

export default App;
