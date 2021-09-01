import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { EAnswerTypes } from 'enums';
import { api } from './index';

interface ISurvey {
  id: number;
  title: string;
}

interface IQuestion {
  title: string;
  type: EAnswerTypes;
  position: number;
  answer: any[];
}

// Custom hook to get survey data
export const useGetSurveyData = (endpoint) => {
  const [loading, setLoading] = useState(false);
  const [surveyInfo, setSurveyInfo] = useState<ISurvey>({ id: 0, title: '' });
  const [questions, setQuestions] = useState<IQuestion[]>([]);

  useEffect(() => {
    if (!endpoint) return;

    setLoading(true);

    api
      .get(endpoint)
      .then(({ data: { id, title, questions } }) => {
        setSurveyInfo({
          id,
          title,
        });
        setLoading(false);
        setQuestions(questions);
      })
      .catch(() => {
        toast.error('Something went wrong :(', {
          position: 'top-right',
          autoClose: 3000,
        });
      });
  }, [endpoint]);

  return { loading, surveyInfo, questions };
};
