import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Play, Clock } from "lucide-react"

export function MeditationLibrary() {
  const sessions = [
    {
      title: "Morning Mindfulness",
      duration: "10 min",
      category: "Beginner",
      description: "Start your day with clarity",
    },
    {
      title: "Stress Relief",
      duration: "15 min",
      category: "Intermediate",
      description: "Release tension and anxiety",
    },
    {
      title: "Deep Sleep",
      duration: "20 min",
      category: "All Levels",
      description: "Prepare for restful sleep",
    },
    {
      title: "Focus & Concentration",
      duration: "12 min",
      category: "Intermediate",
      description: "Enhance mental clarity",
    },
    {
      title: "Gratitude Practice",
      duration: "8 min",
      category: "Beginner",
      description: "Cultivate appreciation",
    },
  ]

  return (
    <Card className="p-6">
      <h2 className="text-xl font-semibold mb-4">Meditation Library</h2>

      <div className="space-y-3 max-h-[700px] overflow-y-auto">
        {sessions.map((session, index) => (
          <div key={index} className="border rounded-lg p-4 hover:bg-muted/50 transition-colors">
            <div className="flex items-start justify-between mb-2">
              <div className="flex-1">
                <h3 className="font-medium mb-1">{session.title}</h3>
                <p className="text-xs text-muted-foreground mb-2">{session.description}</p>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Badge variant="secondary" className="text-xs">
                  {session.category}
                </Badge>
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Clock className="w-3 h-3" />
                  <span>{session.duration}</span>
                </div>
              </div>
              <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                <Play className="w-4 h-4" />
              </Button>
            </div>
          </div>
        ))}
      </div>
    </Card>
  )
}
