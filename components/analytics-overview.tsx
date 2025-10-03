import { Card } from "@/components/ui/card"
import { TrendingUp, TrendingDown, Activity, Target } from "lucide-react"

export function AnalyticsOverview() {
  const stats = [
    {
      label: "Overall Progress",
      value: "78%",
      change: "+12% from last month",
      trend: "up",
      icon: TrendingUp,
      color: "text-green-500",
      bgColor: "bg-green-500/10",
    },
    {
      label: "Active Days",
      value: "24/30",
      change: "This month",
      trend: "up",
      icon: Activity,
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      label: "Goals Completed",
      value: "8/12",
      change: "67% completion rate",
      trend: "up",
      icon: Target,
      color: "text-orange-500",
      bgColor: "bg-orange-500/10",
    },
    {
      label: "Weight Change",
      value: "-3.2kg",
      change: "Since last month",
      trend: "down",
      icon: TrendingDown,
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
