export default {
  name: 'work',
  type: 'document',
  title: 'Work',
  fields: [
    {
      title: 'Titel DE',
      name: 'title',
      type: 'string',
    },
    {
      title: 'Titel EN',
      name: 'titleEN',
      type: 'string',
    },
    {
      name: 'orderRank',
      title: 'Order Rank',
      type: 'string',
      hidden: true,
    },
    {
      name: 'order',
      title: 'Order',
      type: 'number',
      hidden: true,
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 100,
        slugify: (input) => input.toLowerCase().replace(/\s+/g, '-').slice(0, 100),
      },
    },
    {
      title: 'SEO Settings',
      name: 'seo',
      type: 'document',
      fields: [
        {
          name: 'title',
          title: 'Title',
          type: 'text',
        },
        {
          title: 'Description',
          name: 'description',
          type: 'text',
        },
        {
          name: 'ogImg',
          title: 'Image for Social Media',
          type: 'image',
        },
      ],
    },
    {
      title: 'Main Image',
      name: 'mainImage',
      type: 'array',
      of: [{type: 'image'}],
    },
    {
      title: 'Caption Top DE',
      name: 'captionTop',
      type: 'array',
      of: [{type: 'block'}],
    },
    {
      title: 'Caption Top EN',
      name: 'captionTopEN',
      type: 'array',
      of: [{type: 'block'}],
    },
    {
      title: 'Beschreibung DE',
      name: 'description',
      type: 'array',
      of: [{type: 'block'}],
    },
    {
      title: 'Beschreibung EN',
      name: 'descriptionEN',
      type: 'array',
      of: [{type: 'block'}],
    },
    // {
    //     title: "Video URL",
    //     name: "video",
    //     type: "string",
    // },
    {
      title: 'Top Line DE',
      name: 'topLine',
      type: 'array',
      of: [{type: 'block'}],
    },
    {
      title: 'Top Line EN',
      name: 'topLineEN',
      type: 'array',
      of: [{type: 'block'}],
    },

    {
      title: 'Videos',
      name: 'videos',
      type: 'array',
      of: [
        {
          title: 'video',
          type: 'video',
        },
      ],
    },
    {
      name: 'audio',
      type: 'file',
      subtype: 'sanity.asset',
      options: {
        storeOriginalFilename: true,
      },
    },

    // {
    //     title: "Bilder",
    //     name: "gallery",
    //     type: "array",
    //     of: [
    //         {
    //             title: "image",
    //             type: "produktKategorie",
    //         },
    //     ],
    // },

    {
      name: 'gallery',
      type: 'object',
      title: 'Gallery',
      fields: [
        {
          name: 'images',
          type: 'array',
          title: 'Images',
          of: [
            {
              name: 'image',
              type: 'image',
              title: 'Image',
              options: {
                hotspot: true,
              },
              initialValue: {
                big: true,
                hoch: false,
              },
              fields: [
                {
                  name: 'alt',
                  type: 'string',
                  title: 'Alternative text',
                },
                {
                  name: 'caption',
                  type: 'array',
                  of: [{type: 'block'}],
                  title: 'Beschreibungstext Bild DE',
                },
                {
                  name: 'captionEN',
                  type: 'array',
                  of: [{type: 'block'}],
                  title: 'Beschreibungstext Bild EN',
                },
                {
                  name: 'captionTop',
                  type: 'string',
                  title: 'Beschreibungstext Bild Top DE',
                },
                {
                  name: 'captionTopEN',
                  type: 'string',
                  title: 'Beschreibungstext Bild Top EN',
                },
                {
                  name: 'big',
                  type: 'boolean',
                  title: 'Big?',
                },
                {
                  name: 'aspectRatio',
                  type: 'string',
                  title: 'Aspect Ratio',
                },
                {
                  name: 'backgroundPotion',
                  type: 'string',
                  title: 'Background Position',
                },
                {
                  name: 'hoch',
                  type: 'boolean',
                  title: 'Hoch?',
                },
                {
                  name: 'height',
                  type: 'number',
                  title: 'Höhe',
                },
              ],
            },
          ],

          options: {
            layout: 'grid',
          },
        },
      ],
      preview: {
        select: {
          images: 'images',
          image: 'images.0',
        },
        prepare(selection) {
          const {images, image} = selection

          return {
            title: `Gallery block of ${Object.keys(images).length} images`,
            subtitle: `Alt text: ${image.alt}`,
            media: image,
          }
        },
      },
    },
    {
      name: 'galleryLightbox',
      type: 'object',
      title: 'Gallery Lightbox',
      fields: [
        {
          name: 'captionTop',
          type: 'string',
          title: 'Beschreibungstext Bild Top DE',
        },
        {
          name: 'captionTopEN',
          type: 'string',
          title: 'Beschreibungstext Bild Top EN',
        },
        {
          name: 'images',
          type: 'array',
          title: 'Images',
          of: [
            {
              name: 'image',
              type: 'image',
              title: 'Image',
              options: {
                hotspot: true,
              },
              initialValue: {
                big: true,
              },
              fields: [
                {
                  name: 'alt',
                  type: 'string',
                  title: 'Alternative text',
                },
                {
                  name: 'caption',
                  type: 'string',
                  title: 'Beschreibungstext Bild DE',
                },
                {
                  name: 'captionEN',
                  type: 'string',
                  title: 'Beschreibungstext Bild EN',
                },
                {
                  name: 'captionTop',
                  type: 'string',
                  title: 'Beschreibungstext Bild Top DE',
                },
                {
                  name: 'captionTopEN',
                  type: 'string',
                  title: 'Beschreibungstext Bild Top EN',
                },
                {
                  name: 'aspectRatio',
                  type: 'string',
                  title: 'Aspect Ratio',
                },
                {
                  name: 'big',
                  type: 'boolean',
                  title: 'Big?',
                },
                {
                  name: 'height',
                  type: 'number',
                  title: 'Höhe',
                },
              ],
            },
          ],
        },
      ],
      preview: {
        select: {
          images: 'images',
          image: 'images.0',
        },
        prepare(selection) {
          const {images, image} = selection

          return {
            title: `Gallery block of ${Object.keys(images).length} images`,
            subtitle: `Alt text: ${image.alt}`,
            media: image,
          }
        },
      },
    },
    {
      title: 'Beschreibung Unten DE',
      name: 'descriptionBottom',
      type: 'array',
      of: [{type: 'block'}],
    },
    {
      title: 'Beschreibung Unten EN',
      name: 'descriptionBottomEN',
      type: 'array',
      of: [{type: 'block'}],
    },
  ],
}
