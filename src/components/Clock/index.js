import ClockGoalsCountdown from './ClockGoalsCountdown'
import ClockYearsCountdown from './ClockYearsCountdown'
import {GoalGeneralClass} from './ClockTest'

const ClockTimes = () => {
    return(
       <GoalGeneralClass>
        <ClockGoalsCountdown  />
        <ClockYearsCountdown />
       </GoalGeneralClass>
    )
}

export default ClockTimes;
