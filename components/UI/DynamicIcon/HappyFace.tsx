import React from 'react';

function HappyFace({style}: { style: string }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" focusable="false"
             className={style}>
            <g transform="translate(11.5 11.5)">
                <path
                    d="M12.5 24.75C5.735 24.75.25 19.265.25 12.5S5.735.25 12.5.25 24.75 5.735 24.75 12.5 19.265 24.75 12.5 24.75zm0-1.5c5.937 0 10.75-4.813 10.75-10.75S18.437 1.75 12.5 1.75 1.75 6.563 1.75 12.5 6.563 23.25 12.5 23.25z"></path>
                <circle cx="10.844" cy="10.832" r="1.185"></circle>
                <circle cx="17.572" cy="10.855" r="1.185"></circle>
                <path
                    d="M17.961 15.873a.75.75 0 0 1 1.406.522 5.787 5.787 0 0 1-10.808.106.75.75 0 1 1 1.396-.55 4.287 4.287 0 0 0 8.006-.078z"></path>
            </g>
        </svg>
    );
}

export default HappyFace;