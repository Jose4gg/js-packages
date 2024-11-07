import { SurveyNavColors } from '../../../types';
import { palette } from '../../palette';

const nayyaPalette = palette.nayya;

export const surveyNav: SurveyNavColors = {
  link: nayyaPalette.isabelline[300],
  activeLink: nayyaPalette.primary[400],
  visitedLink: nayyaPalette.primary[600],
};
