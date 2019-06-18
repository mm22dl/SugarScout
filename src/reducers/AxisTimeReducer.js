import * as Units from 'constants/Units'
import * as Time from 'constants/Time'
import * as ActionTypes from 'constants/ActionTypes'

const INIT_AXIS_TIME_STATE = {
    units: Units.TIME,
    nTicks: Time.AXIS_N_TICKS,
}

const AxisTimeReducer = (state = INIT_AXIS_TIME_STATE, action) => {
    switch (action.type) {
        case ActionTypes.UPDATE_TIME_AXIS:
            return {
                ...state,
                ...action.args,
            }

        default:
            return state
    }
}

export default AxisTimeReducer