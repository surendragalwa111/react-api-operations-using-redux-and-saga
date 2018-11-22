//actions

export const addItem = (item) =>({
    type:'ADD_ITEM',
    item
});

export const editItem = (id,updates)=>({
    type:'EDIT_ITEM',
    id,
    updates
});


export const deleteItem = (id) =>({
    type:'DELETE_ITEM',
    id
});

export const fetchAPIRequest = () =>({
    type:'API_FETCH_REQUEST'
});

export const fetchAPISuccess = (result) =>({
    type:'API_FETCH_SUCCESS',
    result
});

export const fetchAPIError = () =>({
    type:'API_FETCH_FAILURE',
});

// export const showAllItem=()=>({
//     type:'SHOW_ALL_ITEM'
// });

//action creators

export const startAddItem = (item)=>{
    return (dispatch,getState)=>{
        console.log('startAddItem ACTION CREATOR CALLED');
        return dispatch(addItem(item));
    };    
};

export const startEditItem = (id,updates) =>{
    return (dispatch,getState)=>{
        console.log('startEditItem ACTION CREATOR CALLED');
        return dispatch(editItem(id,updates));
    }    
};

export const startDeleteItem = (id) =>{
    return (dispatch,getState)=>{
        console.log('startDeleteItem ACTION CREATOR CALLED');
        return dispatch(deleteItem(id));
    };
};

export const startFetchAPIRequest=()=>{
    return (dispatch,getState)=>{
        console.log('startFetchAPIRequest ACTION CREATOR CALLED');
        return dispatch(fetchAPIRequest);
    }
}

export const startFetchAPISuccess=(result)=>{
    return (dispatch,getState)=>{
        console.log('startFetchAPISuccess ACTION CREATOR CALLED');
        return dispatch(fetchAPISuccess(result));
    }
}

export const startFetchAPIFailure=()=>{
    return (dispatch,getState)=>{
        console.log('startFetchAPIFailure ACTION CREATOR CALLED');
        return dispatch(fetchAPIError());
    }
}

// export const startShowAllItem = ()=>{
//     return (dispatch,getState)=>{
//         return dispatch(showAllItem());
//     };
// };