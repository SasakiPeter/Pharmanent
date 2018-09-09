import React from 'react';

export default ({ title, onClick }) => (
    <li>
        <a onClick={() => onClick()}>{title}</a>
    </li>
)