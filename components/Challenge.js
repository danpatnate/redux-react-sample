import React, { PropTypes } from 'react';
import moment from 'moment';

const dateFormatter = (date) => (
  moment(date).format('DD MMM HH:mm')
);

const Challenge = ({ title, description, startDate, endDate, owner }) => {
  const start = dateFormatter(startDate);
  const end = dateFormatter(endDate);
  return (
    <li>
      {title}
      {description} - starts {start} and ends {end}
      {owner.userName}
    </li>
  );
};

Challenge.propTypes = {
  stepChallengeId: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  startDate: PropTypes.string.isRequired,
  endDate: PropTypes.string.isRequired,
  clientData: PropTypes.array.isRequired,
  owner: PropTypes.shape({
    userId: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    userName: PropTypes.string.isRequired,
    clientId: PropTypes.string.isRequired,
    clientKey: PropTypes.string.isRequired,
    clientName: PropTypes.string.isRequired,
    stepChallengeId: PropTypes.string.isRequired,
  }).isRequired,
  goalInSteps: PropTypes.number,
};

export default Challenge;
