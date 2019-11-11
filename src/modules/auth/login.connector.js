import { connect } from 'react-redux';

import Login from './login.component';
import { login, logout } from './auth.action';

const mapStateToProps = () => ({});

export default connect(
  mapStateToProps,
  { login, logout },
)(Login);
