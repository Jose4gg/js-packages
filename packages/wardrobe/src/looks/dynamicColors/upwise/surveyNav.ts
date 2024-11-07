import { SurveyNavColors } from '../../../types';
import { palette } from '../../palette';

const upwisePalette = palette.upwise;

export const surveyNav: SurveyNavColors = {
  link: upwisePalette.isabelline[300],
  activeLink: upwisePalette.primary[600],
  visitedLink: upwisePalette.primary[400],
};
