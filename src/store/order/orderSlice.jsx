import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const createOrder = createAsyncThunk('order/createOrder', async data => {
	const res = await fetch('http://localhost:5000/api/order', {
    method: 'POST', 
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data) 
	})
	return res.json()
})

export const orderSlice = createSlice({
    name: 'order',
    initialState: {
		date: null,
		comment: null,
		user_id: null,
    },
	extraReducers(builder) {
		builder
			.addCase(createOrder.pending, (state, action) => {
				state.status = 'loading'
			})
			.addCase(createOrder.fulfilled, (state, action) => {
				state.status = 'succeeded'
				const {date, comment, user_id} = action.payload;
				state.date = date
				state.comment = comment
				state.user_id = user_id
			})
			.addCase(createOrder.rejected, (state, action) => {
				state.status = 'failed'
				state.error = action.error.message
			})
	}
  })
  
export default orderSlice.reducer

