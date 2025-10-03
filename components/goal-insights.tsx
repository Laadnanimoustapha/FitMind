import { Card } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Target, TrendingUp, Calendar } from "lucide-react"

export function GoalInsights() {
  const goals = [
    {
      title: "Lose 5kg",
      progress: 64,
      current: "3.2kg",
      target: "5kg",
      deadline: "2 weeks left",
      status: "On Track",
      icon: Target,
    },
    {
      title: "Run 50km/month",
      progress: 78,
      current: "39km",
      target: "50km",
      deadline: "5 days left",
      status: "Ahead",
      icon: TrendingUp,
    },
    {
      title: "Meditate 20 days",
      progress: 70,
      current: "14 days",
      target: "20 days",
      deadline: "10 days left",
      status: "On Track",
      icon: Calendar,
    },
  ]

  const milestones = [
    { title: "First 5K Run", date: "Completed 2 weeks ago" },
    { title: "30-Day Streak", date: "Completed 1 week ago" },
    { title: "Lost 3kg", date: "Completed 3 days ago" },
  ]

  return (
    <Card className="p-6">
      <h2 className="text-xl font-semibold mb-4">Goal Insights</h2>

      <div className="space-y-6">
        {goals.map((goal, index) => {
          const Icon = goal.icon
          return (
            <div key={index} className="space-y-3">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-2">
                  <Icon className="w-4 h-4 text-muted-foreground" />
                  <h3 className="font-medium text-sm">{goal.title}</h3>
                </div>
                <Badge variant={goal.status === "Ahead" ? "default" : "secondary"} className="text-xs">
                  {goal.status}
                </Badge>
              </div>
              <Progress value={goal.progress} className="h-2" />
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span>
                  {goal.current} / {goal.target}
                </span>
                <span>{goal.deadline}</span>
              </div>
            </div>
          )
        })}
      </div>

      <div className="mt-8">
        <h3 className="font-medium mb-3 text-sm">Recent Milestones</h3>
        <div className="space-y-2">
          {milestones.map((milestone, index) => (
            <div key={index} className="flex items-center gap-2 p-2 bg-muted rounded-lg">
              <div className="w-2 h-2 rounded-full bg-primary" />
              <div className="flex-1">
                <p className="text-sm font-medium">{milestone.title}</p>
                <p className="text-xs text-muted-foreground">{milestone.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  )
}
