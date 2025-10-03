"use client"

import { Card } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export function NutritionOverview() {
  const dailyGoals = {
    calories: { current: 1850, target: 2200, unit: "kcal" },
    protein: { current: 95, target: 150, unit: "g" },
    carbs: { current: 180, target: 250, unit: "g" },
    fats: { current: 55, target: 70, unit: "g" },
  }

  const macros = [
    {
      label: "Calories",
      current: dailyGoals.calories.current,
      target: dailyGoals.calories.target,
      unit: dailyGoals.calories.unit,
      color: "bg-primary",
      remaining: dailyGoals.calories.target - dailyGoals.calories.current,
    },
    {
      label: "Protein",
      current: dailyGoals.protein.current,
      target: dailyGoals.protein.target,
      unit: dailyGoals.protein.unit,
      color: "bg-orange-500",
      remaining: dailyGoals.protein.target - dailyGoals.protein.current,
    },
    {
      label: "Carbs",
      current: dailyGoals.carbs.current,
      target: dailyGoals.carbs.target,
      unit: dailyGoals.carbs.unit,
      color: "bg-blue-500",
      remaining: dailyGoals.carbs.target - dailyGoals.carbs.current,
    },
    {
      label: "Fats",
      current: dailyGoals.fats.current,
      target: dailyGoals.fats.target,
      unit: dailyGoals.fats.unit,
      color: "bg-purple-500",
      remaining: dailyGoals.fats.target - dailyGoals.fats.current,
    },
  ]

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {macros.map((macro) => {
        const percentage = (macro.current / macro.target) * 100
        return (
          <Card key={macro.label} className="p-6">
            <div className="mb-4">
              <p className="text-sm text-muted-foreground mb-1">{macro.label}</p>
              <div className="flex items-baseline gap-2">
                <p className="text-3xl font-bold">{macro.current}</p>
                <p className="text-sm text-muted-foreground">
                  / {macro.target} {macro.unit}
                </p>
              </div>
            </div>
            <Progress value={percentage} className="h-2 mb-2" />
            <p className="text-xs text-muted-foreground">
              {macro.remaining} {macro.unit} remaining
            </p>
          </Card>
        )
      })}
    </div>
  )
}
