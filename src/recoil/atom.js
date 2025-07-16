import { atom } from "recoil"
import MOCK_DATA from "../assets/mockData"

const kanbanState = atom({
  key: 'kanbanState', // unique ID (with respect to other atoms/selectors)
  default: MOCK_DATA, // default value (aka initial value)
})


export { kanbanState }