import PropTypes from 'prop-types';
import React from 'react';

export default function ButtonAtom({ onClick, children }) {
    return (
        <button onClick={onClick}>
            {children}
        </button>
    );
}

ButtonAtom.propTypes = {
    onClick: PropTypes.func.isRequired,
};