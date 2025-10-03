"use client"

import { DashboardNav } from "@/components/dashboard-nav"
import { Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Plus, X, Search } from "lucide-react"
import { useState } from "react"
import Link from "next/link"

export default function LogMealPage() {
  const [foods, setFoods] = useState([{ name: "", calories: "", protein: "", carbs: "", fats: "" }])

  const addFood = () => {
    setFoods([...foods, { name: "", calories: "", protein: "", carbs: "", fats: "" }])
  }

  const removeFood = (index: number) => {
    setFoods(foods.filter((_, i) => i !== index))
  }

  const commonFoods = [
    { name: "Chicken Breast (100g)", calories: 165, protein: 31, carbs: 0, fats: 3.6 },
    { name: "Brown Rice (1 cup)", calories: 216, protein: 5, carbs: 45, fats: 1.8 },
    { name: "Banana", calories: 105, protein: 1.3, carbs: 27, fats: 0.4 },
    { name: "Greek Yogurt (1 cup)", calories: 130, protein: 11, carbs: 9, fats: 5 },
  ]

  return (
    <div className="min-h-screen bg-background">
      <DashboardNav />

      <main className="container mx-auto px-4 py-8 max-w-3xl">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-balance mb-2">Log Meal</h1>
          <p className="text-muted-foreground text-lg">Track your nutrition intake</p>
        </div>

        <Card className="p-6">
          <form className="space-y-6">
            <div className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="meal-type">Meal Type</Label>
                  <Select>
                    <SelectTrigger id="meal-type">
                      <SelectValue placeholder="Select meal" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="breakfast">Breakfast</SelectItem>
                      <SelectItem value="morning-snack">Morning Snack</SelectItem>
                      <SelectItem value="lunch">Lunch</SelectItem>
                      <SelectItem value="afternoon-snack">Afternoon Snack</SelectItem>
                      <SelectItem value="dinner">Dinner</SelectItem>
                      <SelectItem value="evening-snack">Evening Snack</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="meal-time">Time</Label>
                  <Input id="meal-time" type="time" />
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Label>Foods</Label>
                <Button type="button" variant="outline" size="sm" onClick={addFood}>
                  <Plus className="w-4 h-4 mr-2" />
                  Add Food
                </Button>
              </div>

              <div className="space-y-4">
                {foods.map((food, index) => (
                  <div key={index} className="border rounded-lg p-4 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Food {index + 1}</span>
                      {foods.length > 1 && (
                        <Button type="button" variant="ghost" size="sm" onClick={() => removeFood(index)}>
                          <X className="w-4 h-4" />
                        </Button>
                      )}
                    </div>

                    <div className="space-y-2">
                      <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                        <Input placeholder="Search food or enter manually" className="pl-9" />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div className="space-y-2">
                        <Label className="text-xs">Calories (kcal)</Label>
                        <Input type="number" placeholder="0" />
                      </div>
                      <div className="space-y-2">
                        <Label className="text-xs">Protein (g)</Label>
                        <Input type="number" placeholder="0" />
                      </div>
                      <div className="space-y-2">
                        <Label className="text-xs">Carbs (g)</Label>
                        <Input type="number" placeholder="0" />
                      </div>
                      <div className="space-y-2">
                        <Label className="text-xs">Fats (g)</Label>
                        <Input type="number" placeholder="0" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <Label>Quick Add Common Foods</Label>
              <div className="grid sm:grid-cols-2 gap-2">
                {commonFoods.map((food, index) => (
                  <Button
                    key={index}
                    type="button"
                    variant="outline"
                    className="justify-start text-sm h-auto py-2 bg-transparent"
                  >
                    <div className="text-left">
                      <div className="font-medium">{food.name}</div>
                      <div className="text-xs text-muted-foreground">{food.calories} kcal</div>
                    </div>
                  </Button>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="notes">Notes (optional)</Label>
              <Textarea id="notes" rows={2} placeholder="Any additional details about this meal?" />
            </div>

            <div className="flex gap-3 pt-4">
              <Button type="submit" size="lg">
                Save Meal
              </Button>
              <Button type="button" variant="outline" size="lg" asChild>
                <Link href="/nutrition">Cancel</Link>
              </Button>
            </div>
          </form>
        </Card>
      </main>
    </div>
  )
}
