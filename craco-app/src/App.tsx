import React from "react";

import { Refine } from "@pankod/refine-core";
import {
  notificationProvider,
  ReadyPage,
  ErrorComponent,
} from "@pankod/refine-antd";

import dataProvider from "@pankod/refine-simple-rest";
import routerProvider from "@pankod/refine-react-router-v6";
import "styles/antd.less";
import {
  Title,
  Header,
  Sider,
  Footer,
  Layout,
  OffLayoutArea,
} from "components/layout";
import { PostList, PostCreate, PostEdit, PostShow } from "pages/posts";

function App() {
  return (
    <Refine
      dataProvider={dataProvider("https://api.fake-rest.refine.dev")}
      notificationProvider={notificationProvider}
      ReadyPage={ReadyPage}
      catchAll={<ErrorComponent />}
      Title={Title}
      Header={Header}
      Sider={Sider}
      Footer={Footer}
      Layout={Layout}
      OffLayoutArea={OffLayoutArea}
      routerProvider={routerProvider}
      resources={[
        {
          name: "posts",
          list: PostList,
          create: PostCreate,
          edit: PostEdit,
          show: PostShow,
        },
      ]}
    />
  );
}

export default App;
