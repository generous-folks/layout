import { connect } from 'react-redux';

import UserRoutes from './userRoutes.component';
import { showToast } from '../toaster/toaster.action';

const mapStateToProps = ({
  app: {
    config: { modules, pages },
    initialized,
  },
}) => ({
  modules,
  pages,
  initialized,
});

export default connect(mapStateToProps, { showToast })(UserRoutes);
