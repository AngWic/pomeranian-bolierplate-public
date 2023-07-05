import { SubRouteExercise1 } from './Exercise1/router-data';
import { SubRouteExercise2 } from './Exercise2/router-data';
import { SubRouteExercise3 } from './Exercise3/router-data';

import { welcomeViewkRouterMetaData } from './WelcomeView/router-data';

import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { SubRouteExampleMetaData } from './SubRouteExample/router-data';

export const blockRouterMetaData = [
  SubRouteExercise1,
  SubRouteExercise2,
  SubRouteExercise3,

  welcomeViewkRouterMetaData,

  SubRouteExampleMetaData,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
