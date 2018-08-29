export const addStore = (id, name) => ({
    type: 'ADD_STORE',
    id: id,
    name: name
});


export const removeStore = (id) => ({
    type: 'REMOVE_STORE',
    id: id
});

