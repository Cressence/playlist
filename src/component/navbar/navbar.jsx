import React, { useState } from "react";
import { Menu, Search, Responsive, Sidebar, Icon } from "semantic-ui-react";
import { useHistory } from "react-router-dom";

export default function Navbar(props) {
//   const history = useHistory();
  const [activeItem, setActiveItem] = useState("smooth");
  const [visible, setVisible] = useState(false);

  const handleItemClick = (e, { name }) => {
    setActiveItem(name);
    // history.push("/");
    console.log(useHistory);
  };
  const handleToggle = () => setVisible(!visible);
  const handlePusher = () => {
    if (visible) setVisible(false);
  };

  const NavBarMobile = ({
    leftItems,
    onPusherClick,
    onToggle,
    visible,
    children,
  }) => (
    <Sidebar.Pushable>
      <Sidebar
        as={Menu}
        animation="overlay"
        inverted
        items={leftItems}
        vertical
        visible={visible}
        onHide={() => setVisible(false)}
      >
        <Menu className="navbar-section" stackable secondary>
          <Menu.Item
            name="PLAYLIST"
            active={activeItem === "title"}
            onClick={handleItemClick}
          />
          <Menu.Item
            name="Genre"
            active={activeItem === "home"}
            onClick={handleItemClick}
          />
          <Menu.Item
            name="Artist"
            active={activeItem === "messages"}
            onClick={handleItemClick}
          />
          <Menu.Item
            name="Albums"
            active={activeItem === "friends"}
            onClick={handleItemClick}
          />
          <Menu.Menu position="right">
            <Menu.Item className="search-section">
              <Search icon="search" placeholder="Search..." />
            </Menu.Item>
          </Menu.Menu>
        </Menu>
      </Sidebar>
      <Sidebar.Pusher
        inverted
        dimmed={visible}
        onClick={onPusherClick}
        style={{ minHeight: "100vh" }}
      >
        <Menu className="navbar-section" secondary>
          <Menu.Item onClick={onToggle}>
            <Icon name="sidebar" />
          </Menu.Item>
        </Menu>
        {children}
      </Sidebar.Pusher>
    </Sidebar.Pushable>
  );

  const NavbarDesktop = () => (
    <Menu className="navbar-section" stackable secondary>
      <Menu.Item
        name="smooth"
        active={activeItem === "smooth"}
        onClick={handleItemClick}
      />
      <Menu.Item
        name="tracks"
        active={activeItem === "tracks"}
        onClick={handleItemClick}
      />
      <Menu.Item
        name="artists"
        active={activeItem === "artists"}
        onClick={handleItemClick}
      />
      <Menu.Item
        name="albums"
        active={activeItem === "albums"}
        onClick={handleItemClick}
      />
      <Menu.Menu position="right">
        <Menu.Item className="search-section">
          <Search icon="search" placeholder="Search..." />
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  );

  return (
    <div>
      <Responsive {...Responsive.onlyMobile}>
        <NavBarMobile
          onPusherClick={handlePusher}
          onToggle={handleToggle}
          visible={visible}
        >
          {props.children}
        </NavBarMobile>
      </Responsive>
      <Responsive minWidth={Responsive.onlyTablet.minWidth}>
        <NavbarDesktop />
        {props.children}
      </Responsive>
    </div>
  );
}
