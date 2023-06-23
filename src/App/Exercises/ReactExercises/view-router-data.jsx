import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { SubRouteExampleMetaData } from './SubRouteExample/router-data';

import { welcomeViewkRouterMetaData } from './WelcomeView/router-data';

import { materialUIBasicElementsRouterMetaData } from './MaterialUIBasicElements/router-data';

import { sideEffectsRouterMetaData } from './SideEffects/router-data';

import { localDevAndFetchRouterMetaData } from './TodoList/router-data';

import { useRefRouterMetaData } from './UseRef/router-data';

import { formsRouterMetaData } from './Forms/router-data';

export const blockRouterMetaData = [
  SubRouteExampleMetaData,
  welcomeViewkRouterMetaData,
  materialUIBasicElementsRouterMetaData,
  sideEffectsRouterMetaData,
  localDevAndFetchRouterMetaData,
  useRefRouterMetaData,
  formsRouterMetaData,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
