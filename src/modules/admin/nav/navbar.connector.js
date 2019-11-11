import { connect } from 'react-redux';

import NavBar from './navbar.component';

const mapStateToProps = ({
  router: {
    location: { pathname },
  },
}) => ({ pathname });

export default connect(mapStateToProps)(NavBar);
