import React from 'react';

import './flexContainerStyle.scss';

const FlexContainer = props => {
    return (
        <div className="flex-container">
            {props.children}
        </div>
    );
};

export default FlexContainer;
