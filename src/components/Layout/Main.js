import React, { useEffect } from "react";
import { Layout, Drawer, Affix } from "antd";
import { Outlet, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  openDrawer,
  handleSideNavColor,
  setPlaceMent,
  handleSidenavType,
  handleFixedNavbar,
  handleSidebar,
} from "Redux/features/MainSlice";
import SideNav from "./SideNav";
import AntdHeaderRight from "./AntdHeader";
import AntdFooter from "./AntdFooter";
const { Sider, Header: AntHeader, Content } = Layout;
export default function Main() {
  let { pathname } = useLocation();
  const { navFixed, sideNavType, sideNavColor, placement, openSidebar } =
    useSelector((state) => state.mainSlice);
  const dispatch = useDispatch();
  pathname = pathname.replace("/", "");
  useEffect(() => {
    if (pathname === "rtl") {
      dispatch(setPlaceMent("left"));
    } else {
      dispatch(setPlaceMent("right"));
    }
  }, [pathname]);
  // console.log(pathname);
  // dispatch(openDrawer())
  return (
    <Layout
      className={`layout-dashboard ${
        pathname === "profile" ? "layout-profile" : ""
      } ${pathname === "rtl" ? "layout-dashboard-rtl" : ""}`}
    >
      <Drawer
        title={false}
        placement={placement === "right" ? "left" : "right"}
        closable={false}
        onClose={() => dispatch(handleSidebar(false))}
        visible={openSidebar}
        key={placement === "right" ? "left" : "right"}
        width={250}
        className={`drawer-sidebar ${
          pathname === "rtl" ? "drawer-sidebar-rtl" : ""
        } `}
      >
        <Layout
          className={`layout-dashboard ${
            pathname === "rtl" ? "layout-dashboard-rtl" : ""
          }`}
        >
          <Sider
            trigger={null}
            width={250}
            theme="light"
            className={`sider-primary ant-layout-sider-primary ${
              sideNavType === "#fff" ? "active-route" : ""
            }`}
            style={{ background: sideNavType }}
          >
            <SideNav color={sideNavColor} />
          </Sider>
        </Layout>
      </Drawer>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
        trigger={null}
        width={250}
        theme="light"
        className={`sider-primary ant-layout-sider-primary ${
          sideNavType === "#fff" ? "active-route" : ""
        }`}
        style={{ background: sideNavType }}
      >
        <SideNav color={sideNavColor} />
      </Sider>
      <Layout>
        {navFixed ? (
          <Affix>
            <AntHeader>
              <AntdHeaderRight name={pathname} />
            </AntHeader>
          </Affix>
        ) : (
          <AntHeader>
            <AntdHeaderRight name={pathname} />
          </AntHeader>
        )}
        <Content className="content-ant">
          <Outlet />
        </Content>
        <AntdFooter />
      </Layout>
    </Layout>
  );
}
