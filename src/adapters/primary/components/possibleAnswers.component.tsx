import { Answers } from '../../../hexagon/models/question';
import React from 'react';

interface Props {
  answers: Answers;
}

export const PossibleAnswers: React.FC<Props> = ({ answers }) => {
  return (
    <div className="w-full justify-center grid grid-cols-2 text-white gap-4 font-mono text-sm text-left font-bold leading-6 bg-stripes-fuchsia rounded-lg">
      {Object.entries(answers).map(answer => {
        return (
          <div key={answer[0]} className="border-3 border-blue-300 rounded-lg px-3 py-1 bg-gray-900" onClick={() => {}}>
            <span className="text-orange-500">{answer[0]}:</span> {answer[1]}
          </div>
        );
      })}
    </div>
  );
};
