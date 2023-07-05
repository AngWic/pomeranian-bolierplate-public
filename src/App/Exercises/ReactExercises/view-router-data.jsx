import { getParsedRouterDataList } from '../../router-data/parseRouterData';
import { SubRouteExercise1 } from './Exercise1/router-data';
import { SubRouteExercise2 } from './Exercise2/router-data';
import { SubRouteExercise3 } from './Exercise3/router-data';

import { materialUIBasicElementsRouterMetaData } from './MaterialUIBasicElements/router-data';

import { sideEffectsRouterMetaData } from './SideEffects/router-data';

import { localDevAndFetchRouterMetaData } from './TodoList/router-data';

import { useRefRouterMetaData } from './UseRef/router-data';

import { formsRouterMetaData } from './Forms/router-data';

import { formValidationRouterMetaData } from './FormValidation/router-data';

import { welcomeViewkRouterMetaData } from './WelcomeView/router-data';

import { SubRouteExampleMetaData } from './SubRouteExample/router-data';

export const blockRouterMetaData = [
  SubRouteExercise1,
  SubRouteExercise2,
  SubRouteExercise3,
  materialUIBasicElementsRouterMetaData,
  sideEffectsRouterMetaData,
  localDevAndFetchRouterMetaData,
  useRefRouterMetaData,
  formsRouterMetaData,
  formValidationRouterMetaData,

  welcomeViewkRouterMetaData,

  SubRouteExampleMetaData,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
