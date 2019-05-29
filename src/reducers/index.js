import { combineReducers } from 'redux'
import BubbleReducer from './BubbleReducer';
import AxisTimeReducer from './AxisTimeReducer'
import AxisBGReducer from './AxisBGReducer'
import AxisBasalReducer from './AxisBasalReducer';
import CGMReducer from './CGMReducer';

const rootReducer = combineReducers({
    bubble: BubbleReducer,
    axes: combineReducers({
        time: AxisTimeReducer,
        bg: AxisBGReducer,
        basal: AxisBasalReducer,
    }),
    cgm: CGMReducer,
})

export default rootReducer