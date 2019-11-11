import { connect } from 'react-redux';

import UserRoutes from './userRoutes.component';
import { showToast } from '../toaster/toaster.action';

const mapStateToProps = ({
  pageContent: {
    content: { presentation },
  },
  app: {
    config: { modules, pages },
    initialized,
  },
}) => ({
  presentation,
  modules,
  pages,
  initialized,
});

export default connect(
  mapStateToProps,
  { showToast },
)(UserRoutes);
