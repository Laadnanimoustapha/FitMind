import { Card } from "@/components/ui/card"
import { Dumbbell, Apple, Brain, Trophy } from "lucide-react"

export function ActivityFeed() {
  const activities = [
    {
      type: "workout",
      title: "Completed Morning Run",
      time: "2 hours ago",
      details: "5.2 km • 28 min • 320 cal",
      icon: Dumbbell,
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      type: "nutrition",
      title: "Logged Breakfast",
      time: "3 hours ago",
      details: "Oatmeal with berries • 350 cal",
      icon: Apple,
      color: "text-orange-500",
      bgColor: "bg-orange-500/10",
    },
    {
      type: "mental",
      title: "Meditation Session",
      time: "5 hours ago",
      details: "10 min guided meditation",
      icon: Brain,
      color: "text-purple-500",
      bgColor: "bg-purple-500/10",
    },
    {
      type: "achievement",
      title: "Achievement Unlocked",
      time: "Yesterday",
      details: "Completed 7-day streak",
      icon: Trophy,
      color: "text-accent",
      bgColor: "bg-accent/10",
    },
  ]

  return (
    <Card className="p-6">
      <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
      <div className="space-y-4">
        {activities.map((activity, index) => {
          const Icon = activity.icon
          return (
            <div key={index} className="flex gap-4">
              <div className={`${activity.bgColor} ${activity.color} p-3 rounded-lg h-fit`}>
                <Icon className="w-5 h-5" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2 mb-1">
                  <h3 className="font-medium">{activity.title}</h3>
                  <span className="text-xs text-muted-foreground whitespace-nowrap">{activity.time}</span>
                </div>
                <p className="text-sm text-muted-foreground">{activity.details}</p>
              </div>
            </div>
          )
        })}
      </div>
    </Card>
  )
}
