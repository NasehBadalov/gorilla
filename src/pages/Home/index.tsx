import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { EAnswerTypes } from 'enums';
import { api } from 'api';
import { useGetSurveyData } from 'api/useGetSurveyData';
import Container from 'components/Container';
import QuestionBlock from 'components/QuestionBlock';
import CheckboxAnswerBlock from 'components/CheckboxAnswerBlock';
import RadioAnswerBlock from 'components/RadioAnswerBlock';
import TextFieldAnswerBlock from 'components/TextFieldAnswerBlock';
import ScaleAnswerBlock from 'components/ScaleAnswerBlock';
import Spinner from 'components/Spinner';
import Button from 'components/Button';
import Title from './components/Title';
import Wrapper from './components/Wrapper';

const Home: React.FC = (): JSX.Element => {
  const [surveyAnswers, setSurveyAnswers] = useState([]); // Answers of the answered questions
  const { loading, surveyInfo, questions } = useGetSurveyData('/surveys/1'); // Custom hook to retrieve survey data
  const [postingSurvey, setPostingSurvey] = useState(false); // loading state for form submission. Used for Button loading

  // Function to handle any answer changes of questions
  const handleAnswerChange = (answer) => {
    setSurveyAnswers((prevState) => {
      return [
        ...prevState.filter((prev) => prev.position !== answer.position), // Filter existing answers
        answer,
      ];
    });
  };

  // Function to render answers according to their type
  const renderAnswerBlock = (type, answer, position) => {
    switch (type) {
      case EAnswerTypes.checkbox:
        return (
          <CheckboxAnswerBlock
            answers={answer}
            position={position}
            onChange={handleAnswerChange}
          />
        );
      case EAnswerTypes.radio:
        return (
          <RadioAnswerBlock
            answers={answer}
            position={position}
            onChange={handleAnswerChange}
          />
        );
      case EAnswerTypes.textfield:
        return (
          <TextFieldAnswerBlock
            position={position}
            onChange={handleAnswerChange}
          />
        );
      case EAnswerTypes.scale:
        return (
          <ScaleAnswerBlock
            answers={answer}
            position={position}
            onChange={handleAnswerChange}
          />
        );
    }
  };

  // Function to handle form submission
  const onFormSubmit = (event) => {
    event.preventDefault();
    setPostingSurvey(true);

    // Post request to submit form
    api
      .post('/reports', {
        survey_id: surveyInfo.id,
        answers: surveyAnswers,
      })
      .then(() => {
        setPostingSurvey(false);

        // Scroll to top position of the form after submission
        window.scrollTo(0, 0);

        // Success toast message for feedback
        toast.success('Successfully submitted!', {
          position: 'top-right',
          autoClose: 3000,
        });
      })
      .catch(() => {
        // Error toast message for feedback
        toast.error('Something went wrong :(', {
          position: 'top-right',
          autoClose: 3000,
        });
      });
  };

  return (
    <main className="Home">
      <Container>
        <Wrapper>
          <Link to="/reports">Go to reports page</Link>
          <Title text={surveyInfo.title} />
          {questions.length && !loading ? (
            <form onSubmit={onFormSubmit}>
              {questions.map((question) => (
                <QuestionBlock
                  key={question.title}
                  question={question.position + '. ' + question.title}
                >
                  {renderAnswerBlock(
                    question.type,
                    question.answer,
                    question.position
                  )}
                </QuestionBlock>
              ))}
              <Button
                text={postingSurvey ? 'SENDING...' : 'DONE'}
                htmlType="submit"
                disabled={postingSurvey}
              />
            </form>
          ) : (
            <Spinner />
          )}
        </Wrapper>
      </Container>
    </main>
  );
};

export default Home;
