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

export const addElementProps = (element, props) => ({ ...element, ...props });

export const createTemplateElement = ({ id, path }) => ({
  section: {
    id,
    path,
    target: 'section',
    spacing: 8,
    justify: 'center',
    alignContent: 'center',
    alignItems: 'center',
    style: { marginTop: '10%' },
    sizes: { xs: 10, sm: 10, md: 10, lg: 10 },
    components: {
      [`${id}-block`]: {
        id: `${id}-block`,
        path: `${path}/${id}-block`,
        target: 'block',
        sizes: { xs: 12, sm: 12, md: 12, lg: 12 },
        components: {
          [`${id}-title`]: {
            id: `${id}-title`,
            path: `${path}/${id}-block/${id}-title`,
            target: 'title',
            gutterBottom: true,
            color: 'primary',
            align: 'right',
            sizes: { xs: 12, sm: 12, md: 12, lg: 12 },
            components: 'Lorem Ipsum',
          },
          [`${id}-text1`]: {
            id: `${id}-text1`,
            path: `${path}/${id}-block/${id}-text-1`,
            target: 'text',
            align: 'justify',
            sizes: { xs: 12, sm: 12, md: 12, lg: 12 },
            components: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore etdolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquipea commodo consequat.`,
          },
          [`${id}-text2`]: {
            id: `${id}-text-2`,
            path: `${path}/${id}-block/${id}-text-2`,
            target: 'text',
            align: 'justify',
            sizes: { xs: 12, sm: 12, md: 12, lg: 12 },
            components: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore etdolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquipea commodo consequat.`,
          },
        },
      },
    },
  },
  article: {
    id,
    path,
    target: 'article',
    justify: 'center',
    alignContent: 'center',
    alignItems: 'stretch',
    container: true,
    spacing: 16,
    sizes: { xs: 12, sm: 12, md: 10, lg: 10 },
    components: [],
  },
  block: {
    id,
    path,
    target: 'block',
    sizes: { xs: 12, sm: 12, md: 7, lg: 8 },
    components: [],
  },
  title: {
    id,
    path,
    target: 'title',
    gutterBottom: true,
    color: 'primary',
    align: 'right',
    sizes: { xs: 12, sm: 12, md: 12, lg: 12 },
    components: 'Lorem Ipsum',
  },
  imageTile: {
    id,
    path,
    actionProps: { target: 'div' },
    alt: 'halte la',
    height: '100%',
    width: '100%',
    sizes: { xs: 12, sm: 12, md: 4, lg: 4 },
    target: 'imageTile',
    components: 'https://placekitten.com/300/300',
  },
  text: {
    id,
    path,
    target: 'text',
    align: 'justify',
    sizes: { xs: 12, sm: 12, md: 12, lg: 12 },
    components: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,.`,
  },
  divider: {
    id,
    path,
    target: 'divider',
    sizes: { xs: 12, sm: 12, md: 12, lg: 12 },
    margin: '25px',
  },
});
