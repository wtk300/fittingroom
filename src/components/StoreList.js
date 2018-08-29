import React from 'react';
import Store from './Store'
import {connect} from 'react-redux'

const StoreList = ({stores}) => (<ul>

    { stores && stores.map(store => <Store key={store.id} id={store.id} name={store.name}
                                onClick={() => console.log('Greeting from   ' + store.name)}/>
    )}
</ul>);

const mapStateToProps = state => ({stores : state.stores});

const mapDispatchToProps = dispatch  => ({

})

export default connect(mapStateToProps,mapDispatchToProps)(StoreList);