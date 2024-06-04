const initialstate = {
    users: null
}

const crudReducer = (state = initialstate, action) => {
    switch(action.type){
        case 'getusers':
            return{
                ...state,
                users : action.payload
            }
        default:
            return state
    }
}

export default crudReducer;