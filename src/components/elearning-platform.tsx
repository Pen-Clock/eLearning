"use client"

import { useState } from "react"
import { Tabs, TabsList, TabsTrigger } from "~/components/ui/tabs"
import { Progress } from "~/components/ui/progress"
import { Button } from "~/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "~/components/ui/card"
import { FileText, Video } from "lucide-react"
import VideoPlayer from "./video-player"
import TextContent from "./text-content"
import QuizSection from "./quiz-section"
import CourseNavigation from "./course-navigation"

export default function ElearningPlatform({ course }: { course: any }) {
  const [currentModuleIndex, setCurrentModuleIndex] = useState(0)
  const [contentType, setContentType] = useState<"video" | "text">("video")
  const [quizScore, setQuizScore] = useState<Record<number, number>>({})
  const [quizAttempted, setQuizAttempted] = useState<Record<number, boolean>>({})

  const currentModule = course.modules[currentModuleIndex]

  const handleModuleChange = (index: number) => {
    setCurrentModuleIndex(index)
  }

  const handleQuizComplete = (moduleId: number, score: number) => {
    setQuizScore((prev) => ({ ...prev, [moduleId]: score }))
    setQuizAttempted((prev) => ({ ...prev, [moduleId]: true }))
  }

  const handleRetakeQuiz = (moduleId: number) => {
    setQuizAttempted((prev) => ({ ...prev, [moduleId]: false }));
    // Optionally, you might also want to reset the score for the module
    // setQuizScore((prev) => ({ ...prev, [moduleId]: 0 }));
};

  const calculateOverallProgress = () => {
    const totalModules = course.modules.length
    const completedModules = Object.keys(quizAttempted).length
    return (completedModules / totalModules) * 100
  }

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-3xl font-bold">{course.title}</h1>
        <p className="text-muted-foreground">{course.description}</p>

        <div className="mt-4">
          <div className="flex items-center gap-2">
            <Progress value={calculateOverallProgress()} className="h-2" />
            <span className="text-sm text-muted-foreground">{Math.round(calculateOverallProgress())}%</span>
          </div>
        </div>
      </div>

      <CourseNavigation
        modules={course.modules}
        currentModuleIndex={currentModuleIndex}
        onModuleChange={handleModuleChange}
        quizAttempted={quizAttempted}
        quizScore={quizScore}
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
        {/* Left side - Content */}
        <Card className="h-[calc(100vh-250px)] overflow-hidden flex flex-col">
          <CardHeader>
            <CardTitle>{currentModule.title}</CardTitle>
            <CardDescription>
              <Tabs defaultValue={contentType} onValueChange={(value) => setContentType(value as "video" | "text")}>
                <TabsList>
                  <TabsTrigger value="video" className="flex items-center gap-1">
                    <Video className="h-4 w-4" />
                    Video
                  </TabsTrigger>
                  <TabsTrigger value="text" className="flex items-center gap-1">
                    <FileText className="h-4 w-4" />
                    Text
                  </TabsTrigger>
                </TabsList>
              </Tabs>
            </CardDescription>
          </CardHeader>
          <CardContent className="flex-1 overflow-auto">
            {contentType === "video" ? (
              <VideoPlayer videoUrl={currentModule.videoUrl} />
            ) : (
              <TextContent content={currentModule.textContent} />
            )}
          </CardContent>
        </Card>

        {/* Right side - Quiz */}
        <Card className="h-[calc(100vh-250px)] overflow-hidden flex flex-col">
          <CardHeader>
            <CardTitle>{currentModule.quiz.title}</CardTitle>
            <CardDescription>Test your knowledge of {currentModule.title}</CardDescription>
          </CardHeader>
          <CardContent className="flex-1 overflow-auto">
            <QuizSection
              quiz={currentModule.quiz}
              moduleId={currentModule.id}
              onQuizComplete={handleQuizComplete}
              attempted={quizAttempted[currentModule.id] || false}
              score={quizScore[currentModule.id] || 0}
              onRetakeQuiz={handleRetakeQuiz}
            />
          </CardContent>
          {quizAttempted[currentModule.id] && (
            <CardFooter className="border-t">
              <div className="w-full">
                <div className="flex justify-between items-center">
                  <span>Your score:</span>
                  <span className="font-bold">
                    {quizScore[currentModule.id] || 0}/{currentModule.quiz.questions.length}(
                    {Math.round(((quizScore[currentModule.id] || 0) / currentModule.quiz.questions.length) * 100)}%)
                  </span>
                </div>
                {currentModuleIndex < course.modules.length - 1 && (
                  <Button className="w-full mt-4" onClick={() => setCurrentModuleIndex(currentModuleIndex + 1)}>
                    Next Module
                  </Button>
                )}
              </div>
            </CardFooter>
          )}
        </Card>
      </div>
    </div>
  )
}
