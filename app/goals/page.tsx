import { DashboardNav } from "@/components/dashboard-nav"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Plus, Target, TrendingDown, Activity, Brain } from "lucide-react"
import Link from "next/link"

export default function GoalsPage() {
  const activeGoals = [
    {
      title: "Lose 5kg",
      category: "Weight",
      progress: 64,
      current: "3.2kg lost",
      target: "5kg",
      deadline: "Dec 31, 2024",
      icon: TrendingDown,
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      title: "Run 50km this month",
      category: "Fitness",
      progress: 78,
      current: "39km",
      target: "50km",
      deadline: "End of month",
      icon: Activity,
      color: "text-orange-500",
      bgColor: "bg-orange-500/10",
    },
    {
      title: "Meditate 20 days",
      category: "Mental Health",
      progress: 70,
      current: "14 days",
      target: "20 days",
      deadline: "End of month",
      icon: Brain,
      color: "text-purple-500",
      bgColor: "bg-purple-500/10",
    },
    {
      title: "Daily protein goal",
      category: "Nutrition",
      progress: 85,
      current: "150g avg",
      target: "150g",
      deadline: "Daily",
      icon: Target,
      color: "text-accent",
      bgColor: "bg-accent/10",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <DashboardNav />

      <main className="container mx-auto px-4 py-8 max-w-5xl">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold text-balance mb-2">My Goals</h1>
            <p className="text-muted-foreground text-lg">Track and manage your wellness goals</p>
          </div>
          <Button asChild size="lg">
            <Link href="/goals/new" className="gap-2">
              <Plus className="w-5 h-5" />
              New Goal
            </Link>
          </Button>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {activeGoals.map((goal, index) => {
            const Icon = goal.icon
            return (
              <Card key={index} className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`${goal.bgColor} ${goal.color} p-3 rounded-lg`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold">{goal.title}</h3>
                      <Badge variant="secondary" className="text-xs mt-1">
                        {goal.category}
                      </Badge>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <Progress value={goal.progress} className="h-2" />
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">
                      {goal.current} / {goal.target}
                    </span>
                    <span className="font-medium">{goal.progress}%</span>
                  </div>
                  <div className="flex items-center justify-between text-xs text-muted-foreground pt-2 border-t">
                    <span>Deadline: {goal.deadline}</span>
                    <Button variant="ghost" size="sm" className="h-auto p-0 text-xs">
                      Edit
                    </Button>
                  </div>
                </div>
              </Card>
            )
          })}
        </div>
      </main>
    </div>
  )
}
