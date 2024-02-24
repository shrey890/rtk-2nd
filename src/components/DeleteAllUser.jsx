import { useDispatch } from "react-redux";
import { deleteUsers } from "../features/userSlice";

const DeleteAllUser = () => {
	const dispatch = useDispatch();
	const deleteAllUsers = () => {
    if ( window.confirm(`Are you sure you want to delete`)){
		dispatch(deleteUsers());

  }
    return
	};
	return (
		<div>
			<button onClick={() => deleteAllUsers()}>Delete All User</button>
		</div>
	);
};

export default DeleteAllUser;
