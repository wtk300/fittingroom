import React from 'react';
import PropTypes from 'prop-types';
import {Button} from 'react-bootstrap';
import {connect} from 'react-redux'
import {removeStore} from '../actions'
const Store = ({onClick, id, name,remove}) => (
    <div className="card" style={{width: '18rem'}}>
        <div className="card-body">
            <h5 className="card-title"></h5>
            <p className="card-text"></p>
            <a  className="btn btn-primary">{name}</a>
            <a  className="btn btn-danger" onClick={() => remove(id)}> Usuń {name}</a>
        </div>
    </div>

);


Store.propTypes = {
    onClick: PropTypes.func.isRequired,
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired
};


const mapStateToProps = state => ({stores : state.stores});

const mapDispatchToProps = dispatch => ({

    remove: (id) => {
        console.log('remove store')
        dispatch(removeStore(id))
    }
})

export default connect(mapStateToProps,mapDispatchToProps)(Store);
