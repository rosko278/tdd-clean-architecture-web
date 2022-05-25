import { Answers, QuestionLetter } from '../../../hexagon/models/question';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { validateCurrentAnswer } from '../../../hexagon/usecases/answer-validation/validateCurrentAnswer';
import { AppDispatch } from '../../../store/initReduxStore';
import { selectCurrentAnswersStatuses } from '../selectors/selectCurrentAnswersStatuses';
import classNames from 'classnames';

interface Props {
  answers: Answers;
}

const answerStatusesColorMap: Record<string, string> = {
  GREEN_HIGHLIGHTED: 'bg-green-500',
  ORANGE_HIGHLIGHTED: 'bg-orange-800',
  NOT_HIGHLIGHTED: 'bg-gray-900'
};

export const PossibleAnswers: React.FC<Props> = ({ answers }) => {
  const dispatch = useDispatch<AppDispatch>();
  const answerStatuses = useSelector(selectCurrentAnswersStatuses);

  const validateAnswer = (givenAnswer: QuestionLetter) => (e: any) => {
    dispatch(validateCurrentAnswer(givenAnswer));
  };

  return (
    <div className="w-full justify-center grid grid-cols-2 text-white gap-4 font-mono text-sm text-left font-bold leading-6 bg-stripes-fuchsia rounded-lg">
      {Object.entries(answers).map(([key, answerLabel]) => {
        const questionLetter = key as QuestionLetter;
        return (
          <div
            key={questionLetter}
            className={classNames(
              'border-3 border-blue-300 rounded-lg px-3 py-1 ',
              answerStatusesColorMap[answerStatuses[questionLetter]]
            )}
            onClick={validateAnswer(questionLetter)}
          >
            <span className="text-orange-500">{questionLetter}:</span> {answerLabel}
          </div>
        );
      })}
    </div>
  );
};
