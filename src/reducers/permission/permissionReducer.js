import { types } from "src/types/types";

const initialState = {
    permissions: [],
  };

  
export const permissionReducer = (state = initialState, action) => {
    switch(action.type){
        case types.eventAddNew:
            return{
                ...state,
                permissions:[...state.permissions,action.payload],
            }
    }
}