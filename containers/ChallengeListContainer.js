import { connect } from 'react-redux';
import ChallengeList from '../components/ChallengeList';

const mapStateToProps = (state) => ({
  challenges: state.challenges,
});

const mapDispatchToProps = dispatch => ({
  dispatch,
});

const ChallengeListContainer = connect(mapStateToProps, mapDispatchToProps)(ChallengeList);

export default ChallengeListContainer;
