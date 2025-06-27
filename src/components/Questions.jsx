import QuestionTimer from "./QuestionTimer.jsx";
import Answers from "./Answers.jsx";

export default function Questions({
                                      questionText,
                                      answers,
                                      onSelectAnswer,
                                      selectedAnswer,
                                      answerState,
                                      onSkipAnswer,
                                      activeQuestionIndex
                                  }) {
    return (
        <div id="question">
            <QuestionTimer
                key={activeQuestionIndex}
                timeout={10000}
                onTimeout={onSkipAnswer}/>
            <h2>
                {questionText}
            </h2>ф
            <Answers
                key={activeQuestionIndex}
                answers={answers}
                selectedAnswer={selectedAnswer}
                answersState={answerState}
                onSelect={onSelectAnswer}
            />
        </div>
    )
}