"use client"

import { useState, useEffect } from "react" // Import useEffect here
import { Button } from "~/components/ui/button"
import { RadioGroup, RadioGroupItem } from "~/components/ui/radio-group"
import { Label } from "~/components/ui/label"
import { Card, CardContent } from "~/components/ui/card"
import { CheckCircle2, XCircle } from "lucide-react"

interface Question {
  id: number
  question: string
  options: string[]
  correctAnswer: number
}

interface Quiz {
  title: string
  questions: Question[]
}

interface QuizSectionProps {
  quiz: Quiz
  moduleId: number
  onQuizComplete: (moduleId: number, score: number) => void
  attempted: boolean // This prop now controls whether the 'completed' state is shown
  score: number
  onRetakeQuiz: (moduleId: number) => void; // New prop
}

export default function QuizSection({ quiz, moduleId, onQuizComplete, attempted, score, onRetakeQuiz }: QuizSectionProps) {
  const [answers, setAnswers] = useState<Record<number, number>>({})
  const [submitted, setSubmitted] = useState(false)
  const [currentScore, setCurrentScore] = useState(0)

  // Effect to reset internal state when the module changes or a retake is initiated by the parent
  // This handles the case where you switch modules or the parent tells us to retake
  useEffect(() => { // Corrected: removed React.
      setAnswers({});
      setSubmitted(false);
      setCurrentScore(0);
  }, [moduleId, attempted]); // Reset when module changes or 'attempted' becomes false

  // If already attempted (controlled by the parent's state), show results
  if (attempted) {
    return (
      <div className="space-y-4">
        <div className="p-4 bg-muted rounded-md">
          <h3 className="font-medium">Quiz completed!</h3>
          <p>
            You scored {score} out of {quiz.questions.length} questions correctly.
          </p>
        </div>

        <Button
          variant="outline"
          onClick={() => {
            // Reset internal state (already done by the effect, but good to keep for clarity)
            setAnswers({})
            setSubmitted(false)
            setCurrentScore(0)
            // Inform the parent to allow a retake
            onRetakeQuiz(moduleId);
          }}
        >
          Retake Quiz
        </Button>
      </div>
    )
  }

  // ... (rest of the component code remains the same)
  const handleAnswerChange = (questionId: number, answerIndex: number) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: answerIndex,
    }))
  }

  const handleSubmit = () => {
    // Calculate score
    let correctAnswers = 0

    quiz.questions.forEach((question) => {
      if (answers[question.id] === question.correctAnswer) {
        correctAnswers++
      }
    })

    setCurrentScore(correctAnswers)
    setSubmitted(true)
    onQuizComplete(moduleId, correctAnswers)
  }

  const allQuestionsAnswered = quiz.questions.every((q) => answers[q.id] !== undefined)


  return (
    <div className="space-y-6">
      {quiz.questions.map((question, index) => (
        <Card
          key={question.id}
          className={
            submitted ? (answers[question.id] === question.correctAnswer ? "border-green-500" : "border-red-500") : ""
          }
        >
          <CardContent className="pt-6">
            <div className="flex justify-between items-start mb-4">
              <h3 className="font-medium">Question {index + 1}</h3>
              {submitted &&
                (answers[question.id] === question.correctAnswer ? (
                  <CheckCircle2 className="h-5 w-5 text-green-500" />
                ) : (
                  <XCircle className="h-5 w-5 text-red-500" />
                ))}
            </div>

            <p className="mb-4">{question.question}</p>

            <RadioGroup
              value={answers[question.id]?.toString()}
              onValueChange={(value) => handleAnswerChange(question.id, Number.parseInt(value))}
              disabled={submitted}
            >
              {question.options.map((option, optionIndex) => (
                <div key={optionIndex} className="flex items-center space-x-2">
                  <RadioGroupItem value={optionIndex.toString()} id={`q${question.id}-option${optionIndex}`} />
                  <Label
                    htmlFor={`q${question.id}-option${optionIndex}`}
                    className={
                      submitted && question.correctAnswer === optionIndex
                        ? "font-medium text-green-600 dark:text-green-400"
                        : ""
                    }
                  >
                    {option}
                  </Label>
                </div>
              ))}
            </RadioGroup>

            {submitted && (
              <div className="mt-4 text-sm">
                <p className="font-medium">
                  {answers[question.id] === question.correctAnswer
                    ? "Correct!"
                    : `Incorrect. The correct answer is: ${question.options[question.correctAnswer]}`}
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      ))}

      {!submitted && (
        <Button onClick={handleSubmit} disabled={!allQuestionsAnswered} className="w-full">
          Submit Answers
        </Button>
      )}

      {submitted && (
        <div className="p-4 bg-muted rounded-md">
          <h3 className="font-medium">Quiz completed!</h3>
          <p>
            You scored {currentScore} out of {quiz.questions.length} questions correctly.
          </p>
        </div>
      )}
    </div>
  )
}
