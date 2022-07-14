import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'


export const createUser = createAsyncThunk('user/createUser', async data => {
	return await fetch('http://localhost:5000/api/user', {
		method: 'POST', 
		headers: {
		'Content-Type': 'application/json'
		},
		body: JSON.stringify(data) 
	}).then(data => data.json()).then(userData => userData)
})

export const findUserByLoginOrPhone = createAsyncThunk('user/findUserByLoginOrPhone', async value => {
	return await fetch('http://localhost:5000/api/login', {
		method: 'POST', 
		headers: {
		'Content-Type': 'application/json'
		},
		body: JSON.stringify({phone: value}) 	
	})
	.then((response) => response.json()).then(d => console.log(d))
}) 

export const userSlice = createSlice({
	name: 'user',
	initialState: {
		name: null,
		phone: null,
		id: null,
	},
	extraReducers(builder) {
		builder
			.addCase(createUser.pending, (state, action) => {
				state.status = 'loading'
			})
			.addCase(createUser.fulfilled, (state, action) => {
				state.status = 'succeeded'
				const {name, phone, id} = action.payload 
				state.name = name
				state.phone = phone
				state.id = id
			})
			.addCase(createUser.rejected, (state, action) => {
				state.status = 'failed'
				state.error = action.error.message
			})
			.addCase(findUserByLoginOrPhone.pending, (state, action) => {
				state.status = 'loading'
			})
			.addCase(findUserByLoginOrPhone.fulfilled, (state, action) => {
				console.log(action.payload);
			})
			.addCase(findUserByLoginOrPhone.rejected, (state, action) => {
				state.status = 'failed'
				state.error = action.error.message
			})
	}
})
  
export default userSlice.reducer

