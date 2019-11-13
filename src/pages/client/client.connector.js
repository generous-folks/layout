import { connect } from 'react-redux';

import Client from './client.component';

import { getContent } from '../../modules/pageContentManager/pageContent.selectors';

const mapStateToProps = state => ({ content: getContent(state) });

export default connect(mapStateToProps)(Client);
