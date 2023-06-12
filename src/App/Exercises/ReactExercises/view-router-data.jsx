import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { SubRouteExampleMetaData } from './SubRouteExample/router-data';

import { welcomeViewkRouterMetaData } from './WelcomeView/router-data';

import { materialUIBasicElementsRouterMetaData } from './MaterialUIBasicElements/router-data';

import { sideEffectsRouterMetaData } from './SideEffects/router-data';

export const blockRouterMetaData = [
  SubRouteExampleMetaData,
  welcomeViewkRouterMetaData,
  materialUIBasicElementsRouterMetaData,
  sideEffectsRouterMetaData,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
