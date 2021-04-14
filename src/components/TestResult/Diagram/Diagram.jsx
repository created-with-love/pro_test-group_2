// import PropTypes from 'prop-types';
import { PieChart } from 'react-minimal-pie-chart';
import s from './Diagram.module.css';
import AnimeSvg from 'components/Svg/AnimeSvg';

export default function Diagram({ values }) {
  const { correctAnswers = 0, totalQuestions = 0 } = values;

  const correct = Math.round((correctAnswers / totalQuestions) * 100);
  const incorrect = 100 - correct;

  const data = [
    { title: 'Incorrect', value: incorrect, color: '#D7D7D7' },
    { title: 'Correct', value: correct, color: '#FF6B09' },
  ];

  return (
    <div className={s.diagramBlock}>
      {totalQuestions > 0 && <PieChart data={data} />}
      {totalQuestions === 0 && <span>No data</span>}

      <div className={s.valuesBlock}>
        {correct > 0 && (
          <div className={s.correctBlock}>
            <div className={s.correctInnerBlock}>
              {/* <div className={s.line}></div>
              <div className={s.line2}></div> */}

              <AnimeSvg />
              <div className={s.correctColor}></div>
              <p className={s.correctPercentage}>{correct}%</p>
            </div>

            <p className={s.correctText}>Correct</p>
          </div>
        )}

        {incorrect > 0 && (
          <div className={s.incorrectBlock}>
            <div className={s.incorrectInnerBlock}>
              {/* <div className={s.line}></div>
              <div className={s.line2}></div> */}
              <AnimeSvg />
              <div className={s.incorrectColor}></div>
              <p className={s.incorrectPercentage}>{incorrect}%</p>
            </div>
            <p className={s.correctText}>Incorrect</p>
          </div>
        )}
      </div>
    </div>
  );
}

// Diagram.propTypes = {
//   values: PropTypes.objectOf(
//     PropTypes.exact({
//       correctAnswers: PropTypes.number.isRequired,
//       totalQuestions: PropTypes.number.isRequired,
//     }),
//   ).isRequired,
// };
