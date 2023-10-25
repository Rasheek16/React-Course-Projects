import { nanoid } from "nanoid"
import SingleColor from "./SingleColor"

const ColorList = ({colors}) => {
  return <section className="colors">
      {colors.map((color, index) => {
        return <SingleColor color={color} index={index} key={nanoid()} />;
      })}
      </section>


}
export default ColorList