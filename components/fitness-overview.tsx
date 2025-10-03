import { Card } from "@/components/ui/card"
import { Activity, Dumbbell, Timer, TrendingUp } from "lucide-react"

export function FitnessOverview() {
  const stats = [
    {
      label: "Workouts This Week",
      value: "5",
      change: "+2 from last week",
      icon: Dumbbell,
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      label: "Total Active Time",
      value: "4.5h",
      change: "This week",
      icon: Timer,
      color: "text-orange-500",
      bgColor: "bg-orange-500/10",
    },
    {
      label: "Calories Burned",
      value: "2,340",
      change: "This week",
      icon: Activity,
      color: "text-red-500",
      bgColor: "bg-red-500/10",
    },
    {
      label: "Personal Records",
      value: "3",
      change: "This month",
      icon: TrendingUp,
      color: "text-accent",
      bgColor: "bg-accent/10",
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
            <p className="text-xs text-muted-foreground">{stat.change}</p>
          </Card>
        )
      })}
    </div>
  )
}
