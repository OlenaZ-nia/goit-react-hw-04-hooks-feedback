import PropTypes from 'prop-types';
import s from './Statistics.module.css';


export default function Statistics({good, neutral, bad, total, countPositivePercentage}) {
    return (
        <ul className={s.statistics}>
            <li>Good: {good}</li>
            <li>Neutral: {neutral}</li>
            <li>Bad: {bad}</li>
            <li>Total: {total}</li>
            <li>Positive feedback: {countPositivePercentage}%</li>
        </ul>
    );
}

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    countPositivePercentage: PropTypes.number.isRequired,
}