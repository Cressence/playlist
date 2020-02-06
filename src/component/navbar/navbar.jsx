import React, { useState } from 'react';
import { Menu, Search } from 'semantic-ui-react';

export default function Navbar() {
    const [activeItem, setActiveItem] = useState('');

    const handleItemClick = (e, { name }) => setActiveItem(name);

    return (
        <div>
            <Menu className="navbar-section" stackable secondary>
                <Menu.Item
                    name='PLAYLIST'
                    active={activeItem === 'logo'}
                    onClick={handleItemClick}
                />
                <Menu.Item
                    name='Genre'
                    active={activeItem === 'home'}
                    onClick={handleItemClick}
                />
                <Menu.Item
                    name='Artist'
                    active={activeItem === 'messages'}
                    onClick={handleItemClick}
                />
                <Menu.Item
                    name='Albums'
                    active={activeItem === 'friends'}
                    onClick={handleItemClick}
                />
                <Menu.Menu position='right'>
                    <Menu.Item className="search-section">
                        <Search icon='search' placeholder='Search...' />
                    </Menu.Item>
                </Menu.Menu>
            </Menu>
        </div>
    )
}