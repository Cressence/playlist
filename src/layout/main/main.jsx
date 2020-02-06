import React from 'react';

import Navbar from './../../component/navbar/navbar';

function Main() {
    return (
        <div className="main-body">
            <Navbar />

            <div className="body-container">
                <div>
                    <h3 className="white">Browse</h3>
                    <p className="grey small-text">Explore by genre</p>
                    <div>
                        <div className="single-genre">

                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Main;