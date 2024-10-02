import { api } from "../../Config/Api";
import { GET_RESTAURANTS_ORDERS_FAILURE, GET_RESTAURANTS_ORDERS_REQUEST, GET_RESTAURANTS_ORDERS_SUCCESS, UPDATE_ORDER_STATUS_FAILURE, UPDATE_ORDER_STATUS_REQUEST, UPDATE_ORDER_STATUS_SUCCESS } from "./ActionType";

export const updateOrderStatus = ({orderId,orderStatus,jwt}) => {
    return async (dispatch) => {
        try{
            dispatch({type: UPDATE_ORDER_STATUS_REQUEST});

            const response = await api.put(
                `/api/admin/order/${orderId}/${orderStatus}`,{},{
                    headers: {
                        Authorization: `Bearer ${jwt}`,
                    },
                }
            );
            
            const updatedOrder = response.data;

            console.log("Updated Order ",updatedOrder);

            dispatch({
                type: UPDATE_ORDER_STATUS_SUCCESS,
                payload: updatedOrder,
            });
        }
        catch(error){
            console.log("Catch Error ",error);
            dispatch({type: UPDATE_ORDER_STATUS_FAILURE,payload:error});
        }
    }
};

export const fetchRestaurantOrder = ({restaurantId,orderStatus,jwt}) => {
    return async (dispatch) => {
        try{
            dispatch({type: GET_RESTAURANTS_ORDERS_REQUEST});

            const {data} = await api.get(
                `/api/admin/order/restaurant/${restaurantId}`,{
                    params: {order_status:orderStatus},
                    headers: {
                        Authorization: `Bearer ${jwt}`,
                    },
                }
            );
            
            const orders = data;
            console.log("Restaurants Orders -----",orders);
            dispatch({type: GET_RESTAURANTS_ORDERS_SUCCESS,
                payload:orders
             });
        }
        catch(error){
            console.log("Catch Error ",error);
            dispatch({type: GET_RESTAURANTS_ORDERS_FAILURE,payload:error});
        }
    };
};