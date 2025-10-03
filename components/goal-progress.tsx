import { Card } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import Link from "next/link"

export function GoalProgress() {
  const goals = [
    {
      title: "Lose 5kg",
      current: 3.2,
      target: 5,
      unit: "kg",
      color: "bg-primary",
    },
    {
      title: "Run 50km/month",
      current: 32,
      target: 50,
      unit: "km",
      color: "bg-orange-500",
    },
    {
      title: "Meditate 20 days",
      current: 14,
      target: 20,
      unit: "days",
      color: "bg-purple-500",
    },
  ]

  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold">Goals</h2>
        <Button size="sm" variant="ghost" asChild>
          <Link href="/goals/new">
            <Plus className="w-4 h-4" />
          </Link>
        </Button>
      </div>

      <div className="space-y-6">
        {goals.map((goal, index) => {
          const percentage = (goal.current / goal.target) * 100
          return (
            <div key={index}>
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-medium text-sm">{goal.title}</h3>
                <span className="text-sm text-muted-foreground">
                  {goal.current}/{goal.target} {goal.unit}
                </span>
              </div>
              <Progress value={percentage} className="h-2" />
            </div>
          )
        })}
      </div>

      <Button className="w-full mt-6 bg-transparent" variant="outline" asChild>
        <Link href="/goals">View All Goals</Link>
      </Button>
    </Card>
  )
}
