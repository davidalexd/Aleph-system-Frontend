import { types } from "src/types/types"

const initialState ={
    checking:true,
}
export const attendanceReducer = (state= initialState,action)=>{
    switch(action.type){
        case types.attendanceUpdate:
            return {
                ...state,
                ...action.payload,
                checking:false,
            }
        default:
            return state;
    }
}