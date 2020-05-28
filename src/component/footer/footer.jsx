import React from 'react';

import './footer.css';
export default function Footer() {
    return (
        <div className="footer">
            <p className="footer-text">Smooth &copy; {new Date().getFullYear()}</p>
        </div>
    )
}