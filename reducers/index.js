import {combineReducers} from "redux"
import setUserCread from "./setUserCread";
import setClassDetails from "./setClassDetails";
import setPDF from "./setPDf";
const CombinedReducer=combineReducers({
    setUserCread,
    setClassDetails,
    setPDF
})

export default CombinedReducer;