import React from 'react';
import './../index.css';

class Header extends React.Component {
    render() {
        return (
            <div id="resume-header">
                <h1>David Han</h1>
                <p>
                    <a href="mailto:david.han.793@gmail.com">david.han.793@gmail.com</a> | 
                    (425) 772-6307 | 
                    <a href="https://www.linkedin.com/in/davidhan93/"> LinkedIn</a> | 
                    <a href="https://github.com/dhansolo"> GitHub</a>
                </p>
            </div>
        )
    }
}

export default Header;