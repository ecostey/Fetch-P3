import React from 'react';

//Set Up Header, Hero, and Nav to render on every page
function Header(props) {
    const { links } = props;
    return (
        <div className="header">
            <h1 className="title">Fetch</h1>
            <h4 className="tag">For Man's Best (Behaved) Friend</h4>
            <div className="nav">
                {links.map(link => {
                    return <div
                        key={link}
                        className="link"
                        onClick={() => props.onClick(link)}
                    >{link}</div>
                })}
            </div>
        </div>
    )
}

export default Header;