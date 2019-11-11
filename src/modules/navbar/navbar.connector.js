import { connect } from 'react-redux';

import Navbar from './navbar.component';
import { toggleNavbar } from '../app/app.action';
import renderOrNothing from '../../components/renderOrNothing.hoc';

const mapStateToProps = ({
  app: {
    mobileOpen,
    config: { modules, pages, name, general },
  },
  router: {
    location: { pathname },
  },
}) => ({
  mobileOpen,
  pages,
  modules,
  general,
  name,
  isUser: !pathname.includes('admin'),
});

export default connect(
  mapStateToProps,
  { toggle: toggleNavbar },
)(renderOrNothing(({ isUser }) => isUser, Navbar));
