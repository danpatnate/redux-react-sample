import React, { PropTypes, Component } from 'react';
import _ from 'lodash';
import Challenge from './Challenge';
import { getChallenges } from '../actions/challenges';

class ChallengesList extends Component {
  constructor(props) {
    super(props);
    _.bindAll(this, [
      'componentDidMount',
      'render',
    ]);
  }
  componentDidMount() {
    getChallenges(this.props.dispatch);
  }
  render() {
    const challenges = this.props.challenges.map(challenge =>
      <Challenge
        key={challenge.stepChallengeId}
        stepChallengeId={challenge.stepChallengeId}
        title={challenge.title}
        description={challenge.description}
        startDate={challenge.startDate}
        endDate={challenge.endDate}
        clientData={challenge.clientData}
        owner={challenge.owner}
      />
    );

    return (
      <div className="partial-wrapper">
        <h1 className="page-header">Manage Challenges</h1>
        <ul>
          { challenges }
        </ul>
      </div>
    );
  }
}

ChallengesList.propTypes = {
  challenges: PropTypes.arrayOf(PropTypes.shape({
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
  }).isRequired).isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default ChallengesList;
