import { connect } from 'react-redux';

import Admin from './admin.component';
import { configInitAdmin, initializeAdmin } from './admin.action';
import { logout } from '../auth/auth.action';

const mapStateToProps = ({
  router: {
    location: { pathname },
  },
  admin: { config, isAdmin, initialized },
}) => ({
  pathname,
  config,
  isAdmin: !!isAdmin,
  initialized,
});

export default connect(mapStateToProps, {
  configInitAdmin,
  logout,
  initializeAdmin,
})(Admin);
