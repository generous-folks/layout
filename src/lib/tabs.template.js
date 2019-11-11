// import React, { useState, memo } from 'react';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
// import shortid from 'shortid';

// import AppBar from '@material-ui/core/AppBar';
// import Tabs from '@material-ui/core/Tabs';
// import Tab from '@material-ui/core/Tab';

// import { makeStyles, useTheme } from '@material-ui/styles';

// import { Col } from './grid.components';
// import Controls from '../modules/admin/cms/forms/controls.component';

// import { getTemplate } from '../engine/template.engine';
// import { isAuth } from '../../modules/auth/auth.selectors';

// const useStyles = makeStyles(theme => ({
//   tabs: {
//     flexFlow: 'column',
//     [theme.breakpoints.up('sm')]: { flexFlow: 'row wrap' },
//   },
// }));

// const PageTabs = ({ components, isAdmin, target, sizes, index, handleChange, children }) => {
//   const classes = useStyles(useTheme());

//   const renderPageTabs = children => {
//     return Object.values(children).map(menuItem => (
//       <Tab name={menuItem.target} key={shortid()} label={menuItem.target} />
//     ));
//   };

//   return (
//     <Col {...sizes}>
//       <AppBar position="static" color="default">
//         <Tabs
//           value={index}
//           onChange={handleChange}
//           indicatorColor="primary"
//           textColor="primary"
//           classes={{ flexContainer: classes.tabs }}
//           variant="fullWidth"
//         >
//           {renderPageTabs(components)}
//         </Tabs>
//       </AppBar>
//       {children}
//       <Controls isAdmin={isAdmin} target={target} id={id} path={path} />
//     </Col>
//   );
// };

// const TabsChildren = ({ components, path, isAdmin, target, sizes }) => {
//   const [index, setIndex] = useState(0);

//   const handleChange = (event, value) => setIndex(value);

//   return (
//     <PageTabs {...{ components, path, isAdmin, target, sizes, index, handleChange }}>
//       {components &&
//         components.map(
//           (component, componentId) => index === componentId && getTemplate(component.components, path, isAdmin),
//         )}
//       {/* {components && getTemplate(components[index].components, path, isAdmin)} */}
//     </PageTabs>
//   );
// };

// PageTabs.propTypes = {
//   target: PropTypes.string.isRequired,
//   path: PropTypes.string,
//   isAdmin: PropTypes.bool.isRequired,
//   sizes: PropTypes.shape({}).isRequired,
//   components: PropTypes.oneOfType([PropTypes.shape({}), PropTypes.array]).isRequired,
// };

// export default connect(state => ({ isAdmin: isAuth(state) }))(memo(TabsChildren));
