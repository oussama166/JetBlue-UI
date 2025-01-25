import React from 'react';

const Bag = (
    {style}: { style: string }
) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" focusable="false"
             className={style}>
            <g transform="translate(15.5 7.7)">
                <path
                    d="M1.935 6.142a.25.25 0 0 0-.25.25v20.156c0 .138.112.25.25.25h13.144a.25.25 0 0 0 .25-.25V6.392a.25.25 0 0 0-.25-.25H1.935zm0-1.5h13.144c.967 0 1.75.783 1.75 1.75v20.156a1.75 1.75 0 0 1-1.75 1.75H1.935a1.75 1.75 0 0 1-1.75-1.75V6.392c0-.967.784-1.75 1.75-1.75z"></path>
                <path
                    d="M6.02 26.628a.75.75 0 1 1-1.5 0V5.392a.75.75 0 1 1 1.5 0v21.236zm6.46 0a.75.75 0 1 1-1.5 0V5.392a.75.75 0 1 1 1.5 0v21.236z"></path>
                <path
                    d="M4.986 2.36v2.282h7.042V2.359H4.986zm-.19-1.5h7.422c.724 0 1.31.586 1.31 1.31v2.662a1.31 1.31 0 0 1-1.31 1.31H4.796a1.31 1.31 0 0 1-1.31-1.31V2.169c0-.723.586-1.31 1.31-1.31z"></path>
                <circle cx="4.229" cy="29.204" r="2.075"></circle>
                <circle cx="12.839" cy="29.197" r="2.068"></circle>
            </g>
        </svg>
    );
};

export default Bag;