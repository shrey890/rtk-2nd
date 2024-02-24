import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../features/userSlice";

const DisplayUsers = () => {
	const dispatch = useDispatch();
	const data = useSelector((s) => {
		return s.user;
	});
	const deleteUser = (id) => {
		dispatch(removeUser(id));
	};
	return (
		<div>
			{data.map((user, id) => (
				<div className="list" key={id}>
					<li>{user}</li>

					<button onClick={() => deleteUser(id)} className="remove">
						❌
					</button>
				</div>
			))}
		</div>
	);
};

export default DisplayUsers;
