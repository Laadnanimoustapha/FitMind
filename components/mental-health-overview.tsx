import { Card } from "@/components/ui/card"
import { Smile, Brain, BookOpen, Sparkles } from "lucide-react"

export function MentalHealthOverview() {
  const stats = [
    {
      label: "Current Mood",
      value: "Happy",
      icon: Smile,
      color: "text-yellow-500",
      bgColor: "bg-yellow-500/10",
      subtext: "Logged 2 hours ago",
    },
    {
      label: "Meditation Streak",
      value: "7 days",
      icon: Brain,
      color: "text-purple-500",
      bgColor: "bg-purple-500/10",
      subtext: "Keep it up!",
    },
    {
      label: "Journal Entries",
      value: "24",
      icon: BookOpen,
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
      subtext: "This month",
    },
    {
      label: "Mindful Minutes",
      value: "180",
      icon: Sparkles,
      color: "text-accent",
      bgColor: "bg-accent/10",
      subtext: "This week",
    },
  ]

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat) => {
        const Icon = stat.icon
        return (
          <Card key={stat.label} className="p-6">
            <div className="flex items-start justify-between mb-4">
              <div className={`${stat.bgColor} ${stat.color} p-3 rounded-lg`}>
                <Icon className="w-5 h-5" />
              </div>
            </div>
            <p className="text-3xl font-bold mb-1">{stat.value}</p>
            <p className="text-sm text-muted-foreground mb-1">{stat.label}</p>
            <p className="text-xs text-muted-foreground">{stat.subtext}</p>
          </Card>
        )
      })}
    </div>
  )
}
