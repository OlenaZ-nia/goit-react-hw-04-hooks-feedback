import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';

export default function FeedbackOptions({ options, onLeaveFeedback}) {
    return (
        <>
            <form className = {s.form}>
                <div role="group" arial-labelby="title">
                    <p className={s.title} id="title">Please leave feedback</p>
                    {options.map((option) => (
                        <label key={option} className={s.label} htmlFor={`radio-${option}`}>
                            <input
                                id={`radio-${option}`}
                                type="radio" name="feedback" value={option}
                                onChange={() => {onLeaveFeedback(option)}}
                            />
                            {option}
                        </label>
                    ))}
                </div> 
            </form>
        </>
    )
}

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
};





