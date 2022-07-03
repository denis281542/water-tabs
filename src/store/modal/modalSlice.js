import { createSlice } from '@reduxjs/toolkit'

export const modalSlice = createSlice({
    name: 'modal',
    initialState: {
      isOpen: false,
      isOpenForm: false,
    },
    reducers: {
      isOpenModal: (state, action) => {
        state.isOpen = action.payload
        if(action.payload) {
          document.body.style.overflow = 'hidden'
        } else {
          document.body.style.overflow = 'visible'
        }
      },
      isOpenModalForm: (state, action) => {
        state.isOpenForm = action.payload
        if(action.payload) {
          document.body.style.overflow = 'hidden'
        } else {
          document.body.style.overflow = 'visible'
        }
      }
    }
  })
  
  export const { isOpenModal, isOpenModalForm } = modalSlice.actions

  export default modalSlice.reducer

