import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Target, TrendingDown, Droplet, Zap } from "lucide-react"
import Link from "next/link"

export function NutritionGoals() {
  const goals = [
    {
      title: "Weight Goal",
      current: "72 kg",
      target: "68 kg",
      icon: TrendingDown,
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      title: "Daily Calories",
      current: "2200",
      target: "kcal",
      icon: Zap,
      color: "text-orange-500",
      bgColor: "bg-orange-500/10",
    },
    {
      title: "Water Intake",
      current: "6/8",
      target: "glasses",
      icon: Droplet,
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
    },
    {
      title: "Meal Prep Days",
      current: "3/7",
      target: "days",
      icon: Target,
      color: "text-accent",
      bgColor: "bg-accent/10",
    },
  ]

  return (
    <Card className="p-6">
      <h2 className="text-xl font-semibold mb-4">Nutrition Goals</h2>

      <div className="space-y-4">
        {goals.map((goal, index) => {
          const Icon = goal.icon
          return (
            <div key={index} className="flex items-center gap-3 p-3 border rounded-lg">
              <div className={`${goal.bgColor} ${goal.color} p-3 rounded-lg`}>
                <Icon className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-muted-foreground">{goal.title}</p>
                <p className="font-semibold">
                  {goal.current} {goal.target}
                </p>
              </div>
            </div>
          )
        })}
      </div>

      <Button className="w-full mt-6 bg-transparent" variant="outline" asChild>
        <Link href="/nutrition/goals">Manage Goals</Link>
      </Button>
    </Card>
  )
}
