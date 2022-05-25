import { QuestionTitle } from './questionTitle.component';
import { PossibleAnswers } from './possibleAnswers.component';

export const CurrentQuestionComponent = () => {
  return (
    <div>
      <div className="flex flex-row justify-center" data-testid="question-wrapper">
        <div className="flex flex-col w-9/12">
          <QuestionTitle title="Quelle est la réponse à cette question ?" />
          <PossibleAnswers />
        </div>
      </div>
    </div>
  );
};
