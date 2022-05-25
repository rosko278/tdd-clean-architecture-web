import { Question } from '../models/question';

export interface QuestionGateway {
  current(): Promise<Question | null>;
}
