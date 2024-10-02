import * as actionTypes from "./ActionTypes"

const initialState = {
    loading: false,
    orders: [],
    error: null,
};

export const orderReducer = (state = initialState,{type,payload}) => {
    switch(type){
        case actionTypes.GET_USERS_ORDERS_REQUEST:
            return {...state,error:null,loading:true};

        case actionTypes.GET_USERS_ORDERS_SUCCESS:
            return {...state,error:null,loading:true,orders:payload};


        case actionTypes.GET_USERS_ORDERS_FAILURE:
            return {...state,error:payload,loading:false};

        default:
            return state;
    }
};