import { CREATE_INGREDIENT_CATEGORY_SUCCESS, CREATE_INGREDIENT_SUCCESS, GET_INGREDIENT_CATEGORY_SUCCESS, GET_INGREDIENTS, UPDATE_STOCK } from "./ActionTypes";

const initialState = {
    ingredientsItems: [],
    update: null,
    ingredientsCategory: [],
};

export const ingredientReducer = (state = initialState,action) => {
    switch(action.type){
        case GET_INGREDIENTS:
            return{
                ...state,
                ingredientsItems: action.payload,
            };

        case GET_INGREDIENT_CATEGORY_SUCCESS:
            return{
                ...state,
                ingredientsCategory: action.payload,
            };

        case CREATE_INGREDIENT_CATEGORY_SUCCESS:
            return{
                ...state,
                ingredientsCategory: [...state.ingredientsCategory,action.payload],
            };

        case CREATE_INGREDIENT_SUCCESS:
            return{
                ...state,
                ingredientsItems: [...state.ingredientsItems,action.payload],
            };

        case UPDATE_STOCK:
            return{
                ...state,
                update: action.payload,
                ingredientsItems: state.ingredientsItems.map((item) => 
                item.id === action.payload.id ? action.payload : item),
            };

        default:
            return state;
    }
};