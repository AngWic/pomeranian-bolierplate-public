import React from 'react';

import Colors from './Colors';
import ImageFiles from './ImageFiles';
import Background from './Background';

export const blockRouterMetaData = [
  {
    path: 'colors',
    date: '09-05-2023',
    linkLabel: 'Kolory CSS',
    blockNo: 12,
    element: <Colors />,
    tags: ['css', 'colors'],
  },
  {
    path: 'imagesCss',
    date: '09-05-2023',
    linkLabel: 'Pliki graficzne',
    blockNo: 12,
    element: <ImageFiles />,
    tags: ['html', 'image'],
  },
  {
    path: 'background',
    date: '09-05-2023',
    linkLabel: 'Tła',
    blockNo: 12,
    element: <Background />,
    tags: ['css', 'background'],
  },
];
