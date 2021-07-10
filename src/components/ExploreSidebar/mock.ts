export default [
  {
    title: 'Preço',
    name: 'price',
    type: 'checkbox',
    fields: [
      {
        label: 'Menos de R$50',
        name: 'under-50'
      },
      {
        label: 'Menos de  R$100',
        name: 'under-100'
      },
      {
        label: 'Menos de R$150',
        name: 'under-150'
      },
      {
        label: 'Menos de $200',
        name: 'under-200'
      },
      {
        label: 'Gratis',
        name: 'free'
      }
    ]
  },
  {
    title: 'Ordenar por ',
    name: 'sort_by',
    type: 'radio',
    fields: [
      {
        label: 'Maior preço',
        name: 'high-to-low'
      },
      {
        label: 'Menor preço',
        name: 'low-to-high'
      }
    ]
  },
  // {
  //   title: 'System',
  //   name: 'system',
  //   type: 'checkbox',
  //   fields: [
  //     {
  //       label: 'Windows',
  //       name: 'windows'
  //     },
  //     {
  //       label: 'Linux',
  //       name: 'linux'
  //     },
  //     {
  //       label: 'MacOS',
  //       name: 'macos'
  //     }
  //   ]
  // },
  {
    title: 'Categoria',
    name: 'categoria',
    type: 'checkbox',
    fields: [
      {
        label: 'Action',
        name: 'action'
      },
      {
        label: 'Adventure',
        name: 'adventure'
      },
      {
        label: 'FPS',
        name: 'fps'
      },
      {
        label: 'MMORPG',
        name: 'mmorpg'
      },
      {
        label: 'RPG',
        name: 'rpg'
      },
      {
        label: 'Indie',
        name: 'indie'
      },
      {
        label: 'Shooters',
        name: 'shooters'
      },
      {
        label: 'Simulation',
        name: 'simulation'
      }
    ]
  }
]
