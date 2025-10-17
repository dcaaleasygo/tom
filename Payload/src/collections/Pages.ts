import { CollectionConfig } from 'payload'

export const Pages: CollectionConfig = {
  slug: 'pages',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
    },
    {
      name: 'layout',
      type: 'blocks',
      blocks: [
        // ======== content_header ========
        {
          slug: 'content_header',
          fields: [
            {
              name: 'body',
              type: 'blocks',
              blocks: [
                { slug: 'text', fields: [{ name: 'value', type: 'text' }] },
                { slug: 'gif', fields: [{ name: 'file', type: 'upload', relationTo: 'media' }] },
                {
                  slug: 'image_center',
                  fields: [
                    { name: 'file', type: 'upload', relationTo: 'media' },
                    {
                      name: 'position',
                      type: 'select',
                      label: 'Posición',
                      options: [
                        { label: 'derecha', value: 'right' },
                        { label: 'Centro', value: 'center' },
                        { label: 'izquierda', value: 'left' },
                      ],
                      defaultValue: 'center',
                    },
                  ],
                },
                {
                  slug: 'buttonText',
                  fields: [
                    {
                      name: 'buttonText',
                      type: 'text',
                      label: 'Texto del botón',
                      required: false,
                    },
                  ],
                },
                {
                  slug: 'moderText',
                  fields: [
                    {
                      name: 'value',
                      type: 'text',
                      label: 'Texto de Moder',
                      required: false,
                    },
                    {
                      name: 'position',
                      type: 'select',
                      label: 'Posición',
                      options: [
                        { label: 'derecha', value: 'right' },
                        { label: 'Centro', value: 'center' },
                        { label: 'izquierda', value: 'left' },
                      ],
                      defaultValue: 'center',
                    },
                  ],
                },
              ],
            },
            { name: 'images', type: 'upload', relationTo: 'media' },
          ],
        },

        // ======== content_header_2 ========
        {
          slug: 'content_header_2',
          fields: [
            {
              name: 'body',
              type: 'blocks',
              blocks: [
                { slug: 'text', fields: [{ name: 'value', type: 'text' }] },
                { slug: 'gif', fields: [{ name: 'file', type: 'upload', relationTo: 'media' }] },
                {
                  slug: 'image_center',
                  fields: [
                    { name: 'file', type: 'upload', relationTo: 'media' },
                    {
                      name: 'position',
                      type: 'select',
                      label: 'Posición',
                      options: [
                        { label: 'derecha', value: 'right' },
                        { label: 'Centro', value: 'center' },
                        { label: 'izquierda', value: 'left' },
                      ],
                      defaultValue: 'center',
                    },
                  ],
                },
                {
                  slug: 'buttonText',
                  fields: [
                    {
                      name: 'buttonText',
                      type: 'text',
                      label: 'Texto del botón',
                      required: false,
                    },
                    {
                      name: 'url',
                      type: 'text',
                      label: 'URL del botón',
                      required: true
                    },
                  ],
                },

                {
                  slug: 'moderText',
                  fields: [
                    {
                      name: 'value',
                      type: 'text',
                      label: 'Texto de Moder',
                      required: false,
                    },
                    {
                      name: 'position',
                      type: 'select',
                      label: 'Posición',
                      options: [
                        { label: 'derecha', value: 'right' },
                        { label: 'Centro', value: 'center' },
                        { label: 'izquierda', value: 'left' },
                      ],
                      defaultValue: 'center',
                    },
                  ],
                },
              ],
            },
            { name: 'images', type: 'upload', relationTo: 'media' },
          ],
        },

        // ======== content_Body ========
        {
          slug: 'content_Body',
          fields: [
            {
              name: 'body',
              type: 'blocks',
              blocks: [
                {
                  slug: 'title',
                  fields: [{ name: 'value', type: 'text' }],
                },
                {
                  slug: 'text',
                  fields: [{ name: 'value', type: 'text' }],
                },
                {
                  slug: 'gif',
                  fields: [{ name: 'file', type: 'upload', relationTo: 'media' }],
                },
                {
                  slug: 'image',
                  fields: [{ name: 'file', type: 'upload', relationTo: 'media' }],
                },
              ],
            },
          ],
        },

        // ======== Servicios ========
        {
          slug: 'Servicios',
          fields: [
            {
              name: 'sliders',
              type: 'blocks',
              blocks: [
                {
                  slug: 'card',
                  fields: [
                    { name: 'value', type: 'text' },
                    { name: 'url', type: 'text' },
                    { name: 'file', type: 'upload', relationTo: 'media' },
                  ],
                },
              ],
            },
          ],
        },

        // ======== Tendencias ========
        {
          slug: 'Tendencias',
          fields: [
            { name: 'titulo', type: 'text' },
            {
              name: 'bloques',
              type: 'blocks',
              blocks: [
                {
                  slug: 'card',
                  fields: [
                    { name: 'date', type: 'text' },
                    { name: 'Title', type: 'text' },
                    { name: 'value', type: 'text' },
                    { name: 'url', type: 'text' },
                    { name: 'file', type: 'upload', relationTo: 'media' },
                  ],
                },
              ],
            },
            {
              name: 'botones',
              type: 'array',
              label: 'Botones',
              fields: [
                { name: 'texto', type: 'text', label: 'Texto del botón' },
                { name: 'url', type: 'text', label: 'Enlace del botón' },
              ],
            },
          ],
        },

        // ======== Datos_Formulario ========
        {
          slug: 'Datos_Formulario',
          fields: [
            {
              name: 'titulo',
              type: 'text',
            },
            {
              name: 'contenido',
              type: 'text',
            },
            {
              name: 'logos',
              type: 'array',

              fields: [
                {
                  name: 'imagen',
                  type: 'upload',
                  relationTo: 'media',
                  required: true,
                },
                {
                  name: 'url',
                  type: 'text',
                  required: true
                }
              ],
            },
          ],
        },

        // ======== Formulario ========
        {
          slug: 'form',
          fields: [
            {
              name: 'titulo',
              type: 'text',
              label: 'titulo',
              required: true,
            },
            {
              name: 'inputs',
              type: 'array',

              fields: [
                {
                  name: 'place holder',
                  type: 'text',
                  required: true,
                }
              ],
            },
            {
              name: 'boton',
              type: 'text',
              label: 'boton',
              required: true,
            },
          ]
        },
        //  ======== ¿Quienes somos? ========
        {
          slug: 'Quienes somos',
          fields: [
            {
              name: 'Quienes somos',
              type: 'group',
              fields: [
                { name: 'titulo', type: 'text' },
                { name: 'content', type: 'text' },
                { name: 'file', type: 'upload', relationTo: 'media' },
                {name: 'boton',type: 'text',label: 'boton',required: true}
              ],
            },
            {
              name: 'Mision',
              type: 'group',
              fields: [
                { name: 'titulo', type: 'text' },
                { name: 'content', type: 'text' },
                { name: 'file', type: 'upload', relationTo: 'media' },
                {name: 'background', type: 'upload', relationTo: 'media' },
              ],
            },
            {
              name: 'Vision',
              type: 'group',
              fields: [
                { name: 'titulo', type: 'text' },
                { name: 'content', type: 'text' },
                { name: 'file', type: 'upload', relationTo: 'media' },
               {name: 'background', type: 'upload', relationTo: 'media' },
              ],
            }
          ]
        }
      ]
    }]
}

