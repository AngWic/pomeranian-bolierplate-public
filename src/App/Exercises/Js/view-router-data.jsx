import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { blockRouterMetaData as blockRouterMetaDataJsVariables1 } from './Exercise-js-variables-1/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsVariables2 } from './Exercise-js-variables-2/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsFunction1 } from './Exercise-js-functions/router-data';
import { emptyValuesAndCommentskRouterMetaData as emptyValuesAndCommentskRouterMetaData } from './EmptyValuesAndComments/router-data';
import { dateTimeRouterMetaData as dateTimeRouterMetaData } from './DateTime/router-data';
import { arrayRouterMetaData as arrayRouterMetaData } from './Array/router-data';
import { jsFunctionsRouterMetaData as jsFunctionsRouterMetaData } from './JsFunctions/router-data';
// import { blockRouterMetaData as blockRouterMetaDataWarmUp22 } from './Blok22WarmUp/router-data';
import { blockRouterMetaData as blockRouterMetaDataSetTimeOut } from './SetTimeout/router-data';
import { blockRouterMetaData as blockRouterMetaDataHitTheMoleGame } from './HitTheMoleGame/router-data';
import { routerMetaData as memoGameRouterData } from '../Js/MemoGame/router-data';
import { blockRouterMetaData as blockRouterMetaDataTryCatch } from './TryCatchAndFinally/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsPrototypes } from './JsPrototypes/router-data';

export const blockRouterMetaData = [
  blockRouterMetaDataJsVariables1,
  blockRouterMetaDataJsVariables2,
  blockRouterMetaDataJsFunction1,
  emptyValuesAndCommentskRouterMetaData,
  dateTimeRouterMetaData,
  arrayRouterMetaData,
  jsFunctionsRouterMetaData,
  // blockRouterMetaDataWarmUp22,
  blockRouterMetaDataSetTimeOut,
  blockRouterMetaDataHitTheMoleGame,
  memoGameRouterData,
  blockRouterMetaDataTryCatch,
  blockRouterMetaDataJsPrototypes,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
