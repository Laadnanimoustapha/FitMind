import { Card } from "@/components/ui/card"
import { Trophy, Target, Flame, Calendar } from "lucide-react"

export function ProfileStats() {
  const stats = [
    {
      label: "Achievements",
      value: "24",
      icon: Trophy,
      color: "text-yellow-500",
      bgColor: "bg-yellow-500/10",
    },
    {
      label: "Goals Completed",
      value: "18",
      icon: Target,
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      label: "Current Streak",
      value: "12 days",
      icon: Flame,
      color: "text-orange-500",
      bgColor: "bg-orange-500/10",
    },
    {
      label: "Member Since",
      value: "Jan 2024",
      icon: Calendar,
      color: "text-accent",
      bgColor: "bg-accent/10",
    },
  ]

  return (
    <Card className="p-6">
      <h2 className="text-lg font-semibold mb-4">Profile Stats</h2>
      <div className="space-y-4">
        {stats.map((stat) => {
          const Icon = stat.icon
          return (
            <div key={stat.label} className="flex items-center gap-3">
              <div className={`${stat.bgColor} ${stat.color} p-3 rounded-lg`}>
                <Icon className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
                <p className="font-semibold">{stat.value}</p>
              </div>
            </div>
          )
        })}
      </div>
    </Card>
  )
}
