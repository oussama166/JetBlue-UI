import React from 'react';

function Browse({style}: { style: string }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="32px" height="32px" viewBox="0 0 48 48" focusable="false"
             className={style}>
            <g transform="translate(13 13)" stroke="none" fill="currentColor">
                <path
                    d="M9.164 2.355a.75.75 0 0 0-.75.75v8.72c0 .415.336.75.75.75h10.449a.75.75 0 0 0 .75-.75v-8.72a.75.75 0 0 0-.75-.75H9.164zm0-1.5h10.449a2.25 2.25 0 0 1 2.25 2.25v8.72a2.25 2.25 0 0 1-2.25 2.25H9.164a2.25 2.25 0 0 1-2.25-2.25v-8.72a2.25 2.25 0 0 1 2.25-2.25z"></path>
                <path
                    d="M13.639 16.68a.75.75 0 0 1 1.5 0v.955a2.691 2.691 0 0 1-2.692 2.691H2.881a2.691 2.691 0 0 1-2.692-2.691V9.797a2.691 2.691 0 0 1 2.692-2.69h.966a.75.75 0 0 1 0 1.5h-.966c-.658 0-1.192.532-1.192 1.19v7.838c0 .658.534 1.191 1.192 1.191h9.566c.658 0 1.192-.533 1.192-1.191v-.955z"></path>
            </g>
        </svg>
    );
}

export default Browse;