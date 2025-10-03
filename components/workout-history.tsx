import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Dumbbell, Timer, Flame, ChevronRight } from "lucide-react"

export function WorkoutHistory() {
  const workouts = [
    {
      name: "Morning Run",
      type: "Cardio",
      date: "Today, 7:00 AM",
      duration: "28 min",
      calories: 320,
      exercises: ["Running"],
    },
    {
      name: "Upper Body Strength",
      type: "Strength",
      date: "Yesterday, 6:30 PM",
      duration: "45 min",
      calories: 280,
      exercises: ["Bench Press", "Pull-ups", "Shoulder Press", "Bicep Curls"],
    },
    {
      name: "HIIT Session",
      type: "HIIT",
      date: "2 days ago",
      duration: "20 min",
      calories: 240,
      exercises: ["Burpees", "Mountain Climbers", "Jump Squats"],
    },
    {
      name: "Leg Day",
      type: "Strength",
      date: "3 days ago",
      duration: "50 min",
      calories: 350,
      exercises: ["Squats", "Deadlifts", "Leg Press", "Lunges"],
    },
    {
      name: "Yoga Flow",
      type: "Flexibility",
      date: "4 days ago",
      duration: "35 min",
      calories: 120,
      exercises: ["Sun Salutations", "Warrior Poses", "Balance Poses"],
    },
  ]

  return (
    <Card className="p-6">
      <h2 className="text-xl font-semibold mb-4">Workout History</h2>

      <div className="space-y-4">
        {workouts.map((workout, index) => (
          <div key={index} className="border rounded-lg p-4 hover:bg-muted/50 transition-colors">
            <div className="flex items-start justify-between mb-3">
              <div>
                <h3 className="font-semibold mb-1">{workout.name}</h3>
                <p className="text-sm text-muted-foreground">{workout.date}</p>
              </div>
              <Badge variant="secondary">{workout.type}</Badge>
            </div>

            <div className="flex items-center gap-4 mb-3 text-sm">
              <div className="flex items-center gap-1 text-muted-foreground">
                <Timer className="w-4 h-4" />
                <span>{workout.duration}</span>
              </div>
              <div className="flex items-center gap-1 text-muted-foreground">
                <Flame className="w-4 h-4" />
                <span>{workout.calories} cal</span>
              </div>
              <div className="flex items-center gap-1 text-muted-foreground">
                <Dumbbell className="w-4 h-4" />
                <span>{workout.exercises.length} exercises</span>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex flex-wrap gap-1">
                {workout.exercises.slice(0, 3).map((exercise, i) => (
                  <span key={i} className="text-xs bg-muted px-2 py-1 rounded">
                    {exercise}
                  </span>
                ))}
                {workout.exercises.length > 3 && (
                  <span className="text-xs bg-muted px-2 py-1 rounded">+{workout.exercises.length - 3} more</span>
                )}
              </div>
              <Button variant="ghost" size="sm">
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        ))}
      </div>
    </Card>
  )
}
