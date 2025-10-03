import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, TrendingUp, Target, Award } from "lucide-react"

export function WeeklyReport() {
  const highlights = [
    {
      title: "Workout Consistency",
      description: "Completed 5 out of 5 planned workouts",
      icon: CheckCircle2,
      color: "text-green-500",
      bgColor: "bg-green-500/10",
      status: "Excellent",
    },
    {
      title: "Nutrition Goals",
      description: "Met daily calorie targets 6 out of 7 days",
      icon: Target,
      color: "text-orange-500",
      bgColor: "bg-orange-500/10",
      status: "Great",
    },
    {
      title: "Mental Wellness",
      description: "Maintained 7-day meditation streak",
      icon: Award,
      color: "text-purple-500",
      bgColor: "bg-purple-500/10",
      status: "Perfect",
    },
    {
      title: "Overall Progress",
      description: "12% improvement from last week",
      icon: TrendingUp,
      color: "text-primary",
      bgColor: "bg-primary/10",
      status: "Improving",
    },
  ]

  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold">Weekly Report</h2>
        <Badge variant="secondary">This Week</Badge>
      </div>

      <div className="space-y-4">
        {highlights.map((highlight, index) => {
          const Icon = highlight.icon
          return (
            <div key={index} className="flex gap-4 p-4 border rounded-lg">
              <div className={`${highlight.bgColor} ${highlight.color} p-3 rounded-lg h-fit`}>
                <Icon className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <div className="flex items-start justify-between mb-1">
                  <h3 className="font-medium">{highlight.title}</h3>
                  <Badge variant="outline" className="text-xs">
                    {highlight.status}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground">{highlight.description}</p>
              </div>
            </div>
          )
        })}
      </div>

      <div className="mt-6 p-4 bg-muted rounded-lg">
        <h3 className="font-medium mb-2">Key Insights</h3>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li>• Your most active day was Wednesday with 60 minutes of exercise</li>
          <li>• You're averaging 8 hours of sleep per night</li>
          <li>• Mood scores are highest after morning workouts</li>
          <li>• You're on track to reach your monthly weight goal</li>
        </ul>
      </div>
    </Card>
  )
}
