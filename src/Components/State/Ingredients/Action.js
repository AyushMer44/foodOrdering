import { api } from "../../Config/Api"
import { CREATE_INGREDIENT_CATEGORY_SUCCESS, CREATE_INGREDIENT_SUCCESS, GET_INGREDIENT_CATEGORY_SUCCESS, GET_INGREDIENTS, UPDATE_STOCK } from "./ActionTypes";

export const getIngredientsOfRestaurant = ({id,jwt}) => {
    return async(dispatch) => {
        try{
            const response = await api.get(
                `/api/admin/ingredients/restaurant/${id}`,
                {
                    headers: {
                        Authorization: `Bearer ${jwt}`,
                    },
                }
            );
            console.log("Get all ingredients ",response.data);
            dispatch({
                type: GET_INGREDIENTS,
                payload: response.data,
            });
        }
        catch(error){
            console.log("Error",error);
        }
    };
};

export const createIngredient = ({data,jwt}) => {
    return async(dispatch) => {
        try{
            const response = await api.post(
                `/api/admin/ingredients`,
                data,
                {
                    headers: {
                        Authorization: `Bearer ${jwt}`,
                    },
                }
            );
            console.log("Create ingredients ",response.data);
            dispatch({
                type: CREATE_INGREDIENT_SUCCESS,
                payload: response.data,
            });
        }
        catch(error){
            console.log("Error",error);
        }
    };
};

export const createIngredientCategory = ({data,jwt}) => {
    console.log("Data ",data,"Jwt ",jwt);
    return async(dispatch) => {
        try{
            const response = await api.post(
                `/api/admin/ingredients/category`,
                data,
                {
                    headers: {
                        Authorization: `Bearer ${jwt}`,
                    },
                });
            console.log("Create ingredients category ",response.data);
            dispatch({
                type: CREATE_INGREDIENT_CATEGORY_SUCCESS,
                payload: response.data,
            });
        }
        catch(error){
            console.log("Error",error);
        }
    };
};

export const getIngredientCategory = ({id,jwt}) => {
    return async(dispatch) => {
        try{
            const response = await api.get(
                `/api/admin/ingredients/restaurant/${id}/category`,
                {
                    headers: {
                        Authorization: `Bearer ${jwt}`,
                    },
                }
            );
            console.log("Get ingredients category",response.data);
            dispatch({
                type: GET_INGREDIENT_CATEGORY_SUCCESS,
                payload: response.data,
            });
        }
        catch(error){
            console.log("Error",error);
        }
    };
};

export const updateStockOfIngredient = ({id,jwt}) => {
    return async(dispatch) => {
        try{
            const {data} = await api.put(
                `/api/admin/ingredients/${id}/stock`,
                {},
                {
                    headers: {
                        Authorization: `Bearer ${jwt}`,
                    },
                }
            );
            dispatch({
                type: UPDATE_STOCK,
                payload: data,
            });
            console.log("Update ingredients stock ",data);
        }
        catch(error){
            console.log("Error",error);
        }
    };
};