import React from 'react';
import PropTypes from 'prop-types';

const Store = ({onClick, id, name}) => (
    <li onClick={onClick}>{name}
    </li>);


Store.propTypes = {
    onClick: PropTypes.func.isRequired,
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired
};

export default Store;