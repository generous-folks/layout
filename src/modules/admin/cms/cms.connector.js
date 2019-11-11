import { connect } from 'react-redux';

import CMS from './cms.component';
import { getPageContent } from '../../pageContentManager/pageContent.action';
import { setParentElement, setChildElement, setPage } from './cms.action';

const mapStateToProps = ({ cms: { components } }) => ({
  components,
});

export default connect(
  mapStateToProps,
  { getPageContent, setChildElement, setParentElement, setPage },
)(CMS);
