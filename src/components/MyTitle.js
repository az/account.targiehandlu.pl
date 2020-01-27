import React from 'react';
import PropTypes from 'prop-types';
import {translate} from 'admin-on-rest';

const Title = ({ defaultTitle, record, title, subtitle, translate }) => {
    // if (!title) {
    //     return <span>{defaultTitle}</span>;
    // }
    // if (typeof title === 'string') {
        return ( <span>
            <span style={{display: 'block'}}>{translate(title, { _: title })}</span>
            <span style={{display: 'block', fontSize: '75%'}}>{translate(subtitle, { _: title })}</span>
        </span>
        );
 
    return React.cloneElement(title, { record });
};

Title.propTypes = {
    defaultTitle: PropTypes.string.isRequired,
    record: PropTypes.object,
    translate: PropTypes.func.isRequired,
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
};

export default translate(Title);