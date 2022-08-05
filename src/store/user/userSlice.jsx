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

export const registration = createAsyncThunk('user/registration', async data => {
	return await fetch('http://localhost:5000/api/registration', {
		method: 'POST', 
		headers: {
		'Content-Type': 'application/json'
		},
		body: JSON.stringify(data) 	
	})
	.then(res => res.json())
}) 
export const login = createAsyncThunk('user/login', async value => {
	return await fetch('http://localhost:5000/api/login', {
		method: 'POST', 
		headers: {
		'Content-Type': 'application/json'
		},
		body: JSON.stringify({phone: value}) 	
	})
	.then(res => res.json())
}) 

export const userSlice = createSlice({
	name: 'user',
	initialState: {
		name: null,
		login: null,
		email: null,
		phone: null,
		id: null,
		isLoginExist: false,
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
			.addCase(registration.pending, (state, action) => {
				state.status = 'loading'
			})
			.addCase(registration.fulfilled, (state, action) => {
				console.log(action.payload);
				const {name, login, email, id} = action.payload;
				if(action.payload.error === "Пользователь с таким логином уже сужествует") {
					state.isLoginExist = true
				} else {
					state.name = name;
					state.login = login;
					state.email = email;
					state.id = id;
					state.isLoginExist = false;
					state.status = 'fulfilled';
				}
			})
			.addCase(registration.rejected, (state, action) => {
				state.status = 'failed'
				state.error = action.error.message
			})
			.addCase(login.pending, (state, action) => {
				state.status = 'loading'
			})
			.addCase(login.fulfilled, (state, action) => {
				console.log(action.payload);
				// сделать usera в store
			})
			.addCase(login.rejected, (state, action) => {
				state.status = 'failed'
				state.error = action.error.message
			})
	}
})
  
export default userSlice.reducer

