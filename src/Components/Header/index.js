import './style.css';
import { month, day } from '../../config';
const Header = () => {
    const date = new Date();
    return (
        <div className="header-container">
            <div className='left-container'>You'r Day Planner</div>
            <div className='right-container'>
                <div className='wrapper'>
                    <div className='date-wrapper'>{date.getDate()}</div>
                    <div className='month-wrapper'>{month[date.getMonth()]}</div>
                </div>
                <div className='day-wrapper'>{day[date.getDay()]}</div>
            </div>

        </div>
    )
}

export default Header;