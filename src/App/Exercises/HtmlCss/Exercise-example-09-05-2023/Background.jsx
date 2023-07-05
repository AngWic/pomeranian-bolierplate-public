import React from 'react';
import './styles.css';

const PaidImage = ({ isPaidUser }) => {
  return (
    <img
      src="/images/andrea-de-santis-ShZbuJG1HbA-unsplash.jpg"
      width="300"
      height="400"
      alt="wooden tunnel in China"
      className={isPaidUser ? '' : 'hued'}
    />
  );
};

const MyImage = (props) => {
  console.log(props);
  return (
    <img
      src="/images/andrea-de-santis-ShZbuJG1HbA-unsplash.jpg"
      width="300"
      height="400"
      alt="wooden tunnel in China"
      className={props.isPaidUser ? '' : 'hued'}
    />
  );
};

const Background = () => {
  return (
    <div>
      <PaidImage isPaidUser={true} />
      <PaidImage isPaidUser={false} />
      <br />
      <MyImage />
      <MyImage />
    </div>
  );
};

export default Background;
