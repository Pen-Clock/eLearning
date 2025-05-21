"use client"

import { CheckCircle, Circle } from "lucide-react"
import { cn } from "~/lib/utils"

interface Module {
  id: number
  title: string
}

interface CourseNavigationProps {
  modules: Module[]
  currentModuleIndex: number
  onModuleChange: (index: number) => void
  quizAttempted: Record<number, boolean>
  quizScore: Record<number, number>
}

export default function CourseNavigation({
  modules,
  currentModuleIndex,
  onModuleChange,
  quizAttempted,
  quizScore,
}: CourseNavigationProps) {
  return (
    <div className="flex overflow-x-auto pb-2 gap-1 scrollbar-hide">
      {modules.map((module, index) => {
        const isCompleted = quizAttempted[module.id]
        const isCurrent = index === currentModuleIndex

        return (
          <button
            key={module.id}
            onClick={() => onModuleChange(index)}
            className={cn(
              "flex items-center gap-2 px-4 py-2 rounded-md whitespace-nowrap text-sm transition-colors",
              isCurrent
                ? "bg-primary text-primary-foreground"
                : isCompleted
                  ? "bg-muted hover:bg-muted/80"
                  : "hover:bg-muted",
            )}
          >
            {isCompleted ? <CheckCircle className="h-4 w-4" /> : <Circle className="h-4 w-4" />}
            <span>{module.title}</span>
            {isCompleted && (
              <span className="text-xs opacity-80">
                {Math.round((quizScore[module.id] / modules[index].quiz.questions.length) * 100)}%
              </span>
            )}
          </button>
        )
      })}
    </div>
  )
}
