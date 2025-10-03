"use client"

import { Card } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Activity, Apple, Brain, Target, TrendingUp, Award, Flame, Droplets } from "lucide-react"

export function ComprehensiveProgress() {
  const progressAreas = [
    {
      category: "Fitness",
      icon: Activity,
      color: "text-primary",
      bgColor: "bg-primary/10",
      metrics: [
        { label: "Weekly Workouts", current: 4, target: 5, unit: "sessions" },
        { label: "Active Minutes", current: 180, target: 300, unit: "min" },
        { label: "Calories Burned", current: 1850, target: 2500, unit: "kcal" },
      ],
    },
    {
      category: "Nutrition",
      icon: Apple,
      color: "text-orange-500",
      bgColor: "bg-orange-500/10",
      metrics: [
        { label: "Daily Calories", current: 1800, target: 2000, unit: "kcal" },
        { label: "Protein Intake", current: 120, target: 150, unit: "g" },
        { label: "Water Intake", current: 6, target: 8, unit: "glasses" },
      ],
    },
    {
      category: "Mental Health",
      icon: Brain,
      color: "text-purple-500",
      bgColor: "bg-purple-500/10",
      metrics: [
        { label: "Meditation Days", current: 14, target: 20, unit: "days" },
        { label: "Journal Entries", current: 8, target: 15, unit: "entries" },
        { label: "Mood Score", current: 7.5, target: 8, unit: "/10" },
      ],
    },
    {
      category: "Goals",
      icon: Target,
      color: "text-accent",
      bgColor: "bg-accent/10",
      metrics: [
        { label: "Active Goals", current: 5, target: 5, unit: "goals" },
        { label: "Completed", current: 3, target: 5, unit: "goals" },
        { label: "On Track", current: 4, target: 5, unit: "goals" },
      ],
    },
  ]

  const overallStats = [
    {
      label: "Overall Progress",
      value: 68,
      icon: TrendingUp,
      color: "text-primary",
    },
    {
      label: "Current Streak",
      value: 12,
      unit: "days",
      icon: Flame,
      color: "text-orange-500",
    },
    {
      label: "Total XP",
      value: 2450,
      unit: "points",
      icon: Award,
      color: "text-accent",
    },
    {
      label: "Hydration",
      value: 75,
      icon: Droplets,
      color: "text-blue-500",
    },
  ]

  return (
    <div className="space-y-6">
      {/* Overall Stats */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {overallStats.map((stat) => {
          const Icon = stat.icon
          return (
            <Card key={stat.label} className="p-4">
              <div className="flex items-center gap-3">
                <div className={`${stat.color} p-2 rounded-lg bg-muted`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
                  <p className="text-2xl font-bold">
                    {stat.value}
                    {stat.unit && <span className="text-sm font-normal text-muted-foreground ml-1">{stat.unit}</span>}
                    {stat.label.includes("Progress") || stat.label.includes("Hydration") ? (
                      <span className="text-sm font-normal text-muted-foreground">%</span>
                    ) : null}
                  </p>
                </div>
              </div>
            </Card>
          )
        })}
      </div>

      {/* Detailed Progress by Category */}
      <div className="grid md:grid-cols-2 gap-6">
        {progressAreas.map((area) => {
          const Icon = area.icon
          const totalProgress =
            area.metrics.reduce((acc, metric) => {
              return acc + (metric.current / metric.target) * 100
            }, 0) / area.metrics.length

          return (
            <Card key={area.category} className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className={`${area.bgColor} ${area.color} p-3 rounded-lg`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg">{area.category}</h3>
                  <p className="text-sm text-muted-foreground">{Math.round(totalProgress)}% Complete</p>
                </div>
              </div>

              <div className="space-y-4">
                {area.metrics.map((metric, index) => {
                  const percentage = Math.min((metric.current / metric.target) * 100, 100)
                  return (
                    <div key={index}>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium">{metric.label}</span>
                        <span className="text-sm text-muted-foreground">
                          {metric.current}/{metric.target} {metric.unit}
                        </span>
                      </div>
                      <Progress value={percentage} className="h-2" />
                    </div>
                  )
                })}
              </div>
            </Card>
          )
        })}
      </div>
    </div>
  )
}
