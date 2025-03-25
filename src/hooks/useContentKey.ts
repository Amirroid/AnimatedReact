import { useContext } from "react"
import AnimatedContentKeyContext from "../contexts/AnimatedContentKeyContext"

const useContentKey = () => useContext(AnimatedContentKeyContext)

export default useContentKey