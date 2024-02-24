import { createSlice } from "@reduxjs/toolkit";
const userSlice = createSlice({
	name: "User",
	initialState: [],
	reducers: {
		addUser(state, action) {
            state.push(action.payload)
        },
		removeUser(state, action) {
            console.log('hi '+ action.payload)
            state.splice(action.payload,1)
        },
		deleteUsers(state, action) {
            return []
        },
	},
});
export const {addUser,removeUser,deleteUsers}= userSlice.actions
export default userSlice.reducer