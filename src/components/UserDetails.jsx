import { useDispatch } from "react-redux";
import { fakeUserData } from "../api";
import DeleteAllUser from "./DeleteAllUser";
import { addUser } from "../features/userSlice";
import DisplayUsers from "./DisplayUsers";

const UserDetails = () => {
	const dispatch = useDispatch();

	const addNewUser = (name) => {
		dispatch(addUser(name));
	};
	return (
		<>
			<div className="userDetails">
				<DeleteAllUser />

				<h1>List Of User</h1>
				<button onClick={() => addNewUser(fakeUserData())}>Add new User</button>
			
            </div>
			<DisplayUsers />
		</>
	);
};

export default UserDetails;
