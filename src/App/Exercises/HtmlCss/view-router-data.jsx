import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { blockRouterMetaData as blockRouterMetaData121220231 } from './Exercise-example-12-12-2023-1/router-data';
import { blockRouterMetaData as blockRouterMetaData09052023 } from './Exercise-example-09-05-2023/router-data';
import { blockRouterMetaData as blockRouterMetaDataArrayRendering } from './Exercise-example-array-rendering/router-data';

export const blockRouterMetaData = [
  blockRouterMetaData121220231,
  ...blockRouterMetaData09052023,
  blockRouterMetaDataArrayRendering,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
