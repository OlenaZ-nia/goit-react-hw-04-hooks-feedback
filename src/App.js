import React, { useState } from 'react';
import Section from './components/Section/Section';
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions';
import Statistics from './components/Statistics/Statistics';
import Notification from './components/Notification/Notification';

export default function App(){
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const options = ['good', 'neutral', 'bad'];
  
  const leaveFeedback = (option) => {
    switch (option) {
      case 'good':
        setGood(prevState=>prevState+1);
        break;
      
      case 'neutral':
        setNeutral(prevState=>prevState+1);
        break;
      
      case 'bad':
        setBad(prevState=>prevState+1);
        break;
      
      default:
        return;
    }  
    };
  
  const countTotalFeedback = () => good + neutral + bad;
  
  const countPositiveFeedbackPercentage=() =>{
    return Math.round(good * 100 / countTotalFeedback()) || 0;
  }
  
    return(
          <>
            <Section>
              <FeedbackOptions options={options} onLeaveFeedback={leaveFeedback} />
            </Section>
            
            <Section title="Statistics">
              {countTotalFeedback() !== 0 ?
                <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                total={countTotalFeedback()}
                countPositivePercentage={countPositiveFeedbackPercentage()}
                /> :
                <Notification message="There is no feedback" />}
            
            </Section>  
            </>
        );
}

