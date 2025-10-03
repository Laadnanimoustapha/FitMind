import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search } from "lucide-react"

export function ExerciseLibrary() {
  const exercises = [
    { name: "Push-ups", category: "Strength", muscle: "Chest" },
    { name: "Squats", category: "Strength", muscle: "Legs" },
    { name: "Running", category: "Cardio", muscle: "Full Body" },
    { name: "Plank", category: "Core", muscle: "Abs" },
    { name: "Pull-ups", category: "Strength", muscle: "Back" },
    { name: "Lunges", category: "Strength", muscle: "Legs" },
    { name: "Burpees", category: "HIIT", muscle: "Full Body" },
    { name: "Deadlifts", category: "Strength", muscle: "Back" },
  ]

  return (
    <Card className="p-6">
      <h2 className="text-xl font-semibold mb-4">Exercise Library</h2>

      <div className="relative mb-4">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <Input placeholder="Search exercises..." className="pl-9" />
      </div>

      <div className="space-y-2 max-h-[600px] overflow-y-auto">
        {exercises.map((exercise, index) => (
          <div key={index} className="p-3 border rounded-lg hover:bg-muted/50 transition-colors cursor-pointer">
            <div className="flex items-start justify-between mb-1">
              <h3 className="font-medium text-sm">{exercise.name}</h3>
              <Badge variant="outline" className="text-xs">
                {exercise.category}
              </Badge>
            </div>
            <p className="text-xs text-muted-foreground">{exercise.muscle}</p>
          </div>
        ))}
      </div>
    </Card>
  )
}
