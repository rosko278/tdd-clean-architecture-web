import { AppState } from '../../../store/appState';

export const selectCurrentAnswersStatuses = (state: AppState) => {
  const defaultAnswersStatuses = {
    A: 'NOT_HIGHLIGHTED',
    B: 'NOT_HIGHLIGHTED',
    C: 'NOT_HIGHLIGHTED',
    D: 'NOT_HIGHLIGHTED'
  };
  if (!state.currentQuestion?.givenAnswer || !state.currentQuestion?.rightAnswer) return defaultAnswersStatuses;
  return {
    ...defaultAnswersStatuses,
    [state.currentQuestion?.givenAnswer]: 'ORANGE_HIGHLIGHTED',
    [state.currentQuestion?.rightAnswer]: 'GREEN_HIGHLIGHTED'
  };
};
