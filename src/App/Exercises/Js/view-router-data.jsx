import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { blockRouterMetaData as blockRouterMetaDataJsVariables1 } from './Exercise-js-variables-1/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsVariables2 } from './Exercise-js-variables-2/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsFunction1 } from './Exercise-js-functions/router-data';
import { booleanExercisesRouterMetaData as booleanExercisesRouterMetaData } from './Boolean/router-data';
import { emptyValuesAndCommentsRouterMetaData } from './EmptyValuesAndComments/router-data';
import { dateTimeRouterMetaData } from './DateTime/router-data';
import { arrayRouterMetaData } from './Array/router-data';
import { jsFunctionsRouterMetaData } from './JsFunctions/router-data';
// import { blockRouterMetaData as blockRouterMetaDataWarmUp22 } from './Blok22WarmUp/router-data';
import { blockRouterMetaData as blockRouterMetaDataSetTimeOut } from './SetTimeout/router-data';
import { blockRouterMetaData as blockRouterMetaDataHitTheMoleGame } from './HitTheMoleGame/router-data';
import { blockRouterMetaData as memoGameRouterData } from './MemoGame/router-data';
import { blockRouterMetaData as blockRouterMetaDataTryCatch } from './TryCatchAndFinally/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsPrototypes } from './JsPrototypes/router-data';
import { blockRouterMetaData as blockRouterMetaDataUsersList } from './UsersList/router-data';
import { blockRouterMetaData as asyncAwaitRouterMetaData } from './AsyncAwait/router-data';
import { blockRouterMetaData as unitTestsRouterMetaData } from './UnitTests/router-data';

export const blockRouterMetaData = [
  blockRouterMetaDataJsVariables1,
  blockRouterMetaDataJsVariables2,
  blockRouterMetaDataJsFunction1,
  booleanExercisesRouterMetaData,
  emptyValuesAndCommentsRouterMetaData,
  dateTimeRouterMetaData,
  arrayRouterMetaData,
  jsFunctionsRouterMetaData,
  // blockRouterMetaDataWarmUp22,
  blockRouterMetaDataSetTimeOut,
  blockRouterMetaDataHitTheMoleGame,
  memoGameRouterData,
  blockRouterMetaDataTryCatch,
  blockRouterMetaDataJsPrototypes,
  blockRouterMetaDataUsersList,
  asyncAwaitRouterMetaData,
  unitTestsRouterMetaData,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
