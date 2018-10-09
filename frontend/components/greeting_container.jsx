import { connect } from 'react-redux';
import Greeting from './greeting';
import { logout } from '../actions/session_actions';

const mapStateToProps = (state) => ({
  currentUser: state.entities.users[state.session.id]
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout())
});

// why do we not need object destructuring to get state
// and dispatch from the store?

export default connect(mapStateToProps, mapDispatchToProps)(Greeting);
