export const CARDS = {
  simple: {
    target: 'article',
    sizes: { xs: 10, sm: 10, md: 4, lg: 4 },
    style: { margin: '2.5% auto' },
    components: [
      {
        target: 'section',
        justify: 'space-around',
        spacing: 2,
        sizes: { xs: 12, sm: 12, md: 12, lg: 12 },
        components: [
          {
            actionProps: { target: 'div' },
            alt: 'halte la',
            height: '100%',
            width: '100%',
            sizes: { xs: 4, sm: 4, md: 4, lg: 4 },
            target: 'imageTile',
            data: 'https://placekitten.com/300/300',
            justify: 'center',
          },
          {
            target: 'block',
            sizes: { xs: 7, sm: 7, md: 7, lg: 7 },
            components: [
              {
                target: 'title',
                gutterBottom: true,
                color: 'primary',
                align: 'right',
                sizes: { xs: 12, sm: 12, md: 12, lg: 12 },
                components: 'Lorem Ipsum',
              },
              {
                target: 'text',
                align: 'justify',
                sizes: { xs: 12, sm: 12, md: 12, lg: 12 },
                components: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  sed do eiusmod tempor incididunt ut labore etdolore magna aliqua.
                  `,
              },
            ],
          },
          {
            target: 'button',
            variant: 'outlined',
            color: 'primary',
            sizes: { xs: 12, sm: 12, md: 12, lg: 12 },
            components: 'Lorem',
          },
        ],
      },
    ],
  },
};
