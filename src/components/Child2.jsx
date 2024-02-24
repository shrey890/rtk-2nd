import { useSelector } from "react-redux"
import SubChild from "./SubChild"

const Child2 = () => {
  const data = useSelector(c=>c.show.value)
  return (
    <div>
      <h2>Child2 - {data}</h2>
      <SubChild/>
    </div>
  )
}

export default Child2