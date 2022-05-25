export interface QuestionGateway {
  current(): Promise<string | null>;
}
