import { configureStore } from '@reduxjs/toolkit';
import anchorReducer from './anchor/anchorSlice';
import modalReducer from './modal/modalSlice';
import userReducer from './user/userSlice';
import orderReducer from './order/orderSlice';

export default configureStore({
  reducer: {
    anchor: anchorReducer,
    modal: modalReducer,
    user: userReducer,
    order: orderReducer
  }
})