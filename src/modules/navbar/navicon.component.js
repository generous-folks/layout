import React from 'react';
import PropTypes from 'prop-types';

import BookIcon from '@material-ui/icons/Book';
import CocktailIcon from '@material-ui/icons/LocalBar';
import FoodIcon from '@material-ui/icons/Restaurant';
import ContactIcon from '@material-ui/icons/Info';
import HomeIcon from '@material-ui/icons/Home';
import DrinkIcon from '@material-ui/icons/LocalDrink';
import MenuIcon from '@material-ui/icons/LibraryBooks';

const iconVariants = {
  home: HomeIcon,
  book: BookIcon,
  cocktails: CocktailIcon,
  food: FoodIcon,
  contact: ContactIcon,
  shooters: DrinkIcon,
  menu: MenuIcon,
  styleguide: MenuIcon,
};

const NavIcon = props => {
  const Icon = iconVariants[props.name];

  return <Icon color={props.dark ? 'primary' : 'secondary'} />;
};

NavIcon.propTypes = { name: PropTypes.string.isRequired, dark: PropTypes.bool };
export default NavIcon;
