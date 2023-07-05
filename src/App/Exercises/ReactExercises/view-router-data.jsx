import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { SubRouteExampleMetaData } from './SubRouteExample/router-data';

import { welcomeViewkRouterMetaData } from './WelcomeView/router-data';

import { SubRouteExercise1 } from './Exercise1/router-data';
import { SubRouteExercise2 } from './Exercise2/router-data';
import { SubRouteExercise3 } from './Exercise3/router-data';
import { materialUIBasicElementsRouterMetaData } from './MaterialUIBasicElements/router-data';

import { sideEffectsRouterMetaData } from './SideEffects/router-data';

import { localDevAndFetchRouterMetaData } from './TodoList/router-data';

import { useRefRouterMetaData } from './UseRef/router-data';

import { formsRouterMetaData } from './Forms/router-data';

import { formValidationRouterMetaData } from './FormValidation/router-data';

export const blockRouterMetaData = [
  SubRouteExampleMetaData,
  welcomeViewkRouterMetaData,
  SubRouteExercise1,
  SubRouteExercise2,
  SubRouteExercise3,
  materialUIBasicElementsRouterMetaData,
  sideEffectsRouterMetaData,
  localDevAndFetchRouterMetaData,
  useRefRouterMetaData,
  formsRouterMetaData,
  formValidationRouterMetaData,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
