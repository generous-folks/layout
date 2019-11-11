import { connect } from 'react-redux';

import Splash from './splash.component';
import { showSplash } from './splash.action';

const mapStateToProps = ({
  app: {
    splash,
    splashed,
    config: { modules },
  },
}) => ({
  splash,
  splashed,
  modules,
});

export default connect(
  mapStateToProps,
  { showSplash },
)(Splash);
