import { Question } from '../hexagon/models/question';

export interface AppState {
  currentQuestion: Question | null;
}
