export const PARENT_COMPONENTS = ['section', 'article', 'block'];
export const CHILDREN_COMPONENTS = ['title', 'text', 'divider', 'imageTile'];

export const PARENT_PROPS = {
  item: [true, false],
  alignItems: ['flex-start', 'center', 'flex-end', 'stretch', 'baseline'],
  alignContent: ['stretch', 'center', 'flex-start', 'flex-end', 'space-between', 'space-around'],
  direction: ['row', 'row-reverse', 'column', 'column-reverse'],
  justify: ['flex-start', 'center', 'flex-end', 'space-between', 'space-around', 'space-evenly'],
  spacing: [0, 8, 16, 24, 32, 40],
  wrap: ['no-wrap', 'wrap', 'wrap-reverse'],
  lg: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
  md: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
  sm: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
  xs: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
};

export const CHILDREN_PROPS = {
  container: [true, false],
  gutterBottom: [true, false],
  inline: [true, false],
  noWrap: [true, false],
  align: ['inherit', 'left', 'center', 'right', 'justify'],
  lg: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
  md: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
  sm: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
  xs: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
};
