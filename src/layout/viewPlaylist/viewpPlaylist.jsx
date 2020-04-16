import React, { useState, useLayoutEffect } from 'react';
import { Grid } from 'semantic-ui-react';
import Navbar from './../../component/navbar/navbar';

function ViewPlaylist(props) {
    // const playlistInfo = props.location.state.playlist;
    const [width, setWidth] = useState(0);

    let columnSize = (width <= 432) ? 1 : 2;

    const updatePageWidth = () => {
        setWidth(window.innerWidth);
    }
    useLayoutEffect(() => {
        // redirect to home page when site opens from playlist page
        if (props.location.state === undefined) props.history.push('/');
        updatePageWidth();
        window.addEventListener('resize', updatePageWidth);
        updatePageWidth();
        return () => window.removeEventListener('resize', updatePageWidth);
    }, [props]);
    console.log(props)
    return (
        <div className={"main-body"}>
            <Navbar />
            <Grid columns={columnSize}>
                <Grid.Column></Grid.Column>
            </Grid>
        </div>
    )
}

export default ViewPlaylist;