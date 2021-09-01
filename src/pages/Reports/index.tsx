import Collapse, { Panel } from 'rc-collapse';
import { useGetReportsData } from 'api/useGetReportsData';
import { EAnswerTypes } from 'enums';
import Container from 'components/Container';
import Spinner from 'components/Spinner';

import 'rc-collapse/assets/index.css';
import './style.scss';

const Reports = () => {
  const { loading, reports } = useGetReportsData('/reports'); // Custom hook to retrieve reports data

  // Function to render answer and check for array type of checkbox type
  const renderAnswer = (type, answer) => {
    if (answer) {
      if (type === EAnswerTypes.checkbox && answer.length > 1) {
        return answer.join(', ');
      } else {
        return answer;
      }
    } else {
      return 'Not answered';
    }
  };

  return (
    <main className="Reports">
      {reports.length && !loading ? (
        <Container>
          <h1 className="Reports__title">Reports:</h1>
          <Collapse accordion={true}>
            {reports.map(({ report_id, answers }) => (
              <Panel header={`Report #${report_id}`}>
                {answers.map(({ question, answer, position, type }) => (
                  <div className="Reports__block">
                    <h5 className="Reports__question">
                      {position}. {question}
                    </h5>
                    <p>
                      <b>Answer:</b> <span>{renderAnswer(type, answer)}</span>
                    </p>
                    <hr />
                  </div>
                ))}
              </Panel>
            ))}
          </Collapse>
        </Container>
      ) : (
        <Spinner />
      )}
    </main>
  );
};

export default Reports;
