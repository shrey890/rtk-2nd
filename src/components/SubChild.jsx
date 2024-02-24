import { useDispatch, useSelector } from "react-redux";
import { increment, incrementByValue } from "../features/showSlice";

const SubChild = () => {
  const dispatch  = useDispatch() 
	const data = useSelector((c) => {
		return c.show.value;
	});
	return (
		<div>
			<h3>SubChild - {data}</h3>
			<button onClick={()=>dispatch(increment())}>Click</button>
			<button onClick={()=>dispatch(incrementByValue(10))}>inc by value</button>
		</div>
	);
};

export default SubChild;
