import { Question } from '../hexagon/models/question';

export interface AppState {
  currentQuestion: {
    fetching: boolean;
    data: Question | null;
  };
}
