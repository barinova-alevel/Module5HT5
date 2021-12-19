import { observer } from 'mobx-react'
import React, { } from 'react'
import { Container, Tab, Tabs } from 'react-bootstrap'
import { useInjection } from '../../ioc/ioc.react'
import ownTypes from '../../ioc/ownTypes'
import HomePageStore, { TabsType } from '../../stores/HomePageStore'
import { useTranslation } from 'react-i18next';

const HomePage = observer(() => {
  const store = useInjection<HomePageStore>(ownTypes.homePageStore);
  const { t } = useTranslation(['homePage']);
  
  return (
    <Container className="pt-4 pb-4">
        <Tabs
          activeKey={store.currentTab}
          onSelect={(ev)=> {store.changeTab(ev)}}
          className="mb-3"
        >
          <Tab eventKey={TabsType[TabsType.Catalog]} title={t('tabs.catalog')}>
            {/* {store.currentTab === `${TabsType[TabsType.Catalog]}` && <User />} */}
          </Tab>
          <Tab eventKey={TabsType[TabsType.Basket]} title={t('tabs.basket')}>
            {/* {store.currentTab === `${TabsType[TabsType.Users]}` && <Users />} */}
          </Tab>
          <Tab eventKey={TabsType[TabsType.Login]} title={t('tabs.login')}>
            {/* {store.currentTab === `${TabsType[TabsType.Login]}` && <Login />} */}
          </Tab>
        </Tabs>
      </Container>
  )
});

export default HomePage;
