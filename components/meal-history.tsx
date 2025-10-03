import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Apple, Coffee, Utensils, Moon, ChevronRight } from "lucide-react"

export function MealHistory() {
  const meals = [
    {
      name: "Breakfast",
      time: "8:00 AM",
      icon: Coffee,
      items: ["Oatmeal with berries", "Greek yogurt", "Green tea"],
      calories: 420,
      protein: 18,
      carbs: 65,
      fats: 12,
    },
    {
      name: "Morning Snack",
      time: "10:30 AM",
      icon: Apple,
      items: ["Apple", "Almonds"],
      calories: 180,
      protein: 6,
      carbs: 22,
      fats: 9,
    },
    {
      name: "Lunch",
      time: "1:00 PM",
      icon: Utensils,
      items: ["Grilled chicken salad", "Quinoa", "Olive oil dressing"],
      calories: 550,
      protein: 45,
      carbs: 48,
      fats: 18,
    },
    {
      name: "Afternoon Snack",
      time: "4:00 PM",
      icon: Apple,
      items: ["Protein shake", "Banana"],
      calories: 280,
      protein: 25,
      carbs: 35,
      fats: 6,
    },
    {
      name: "Dinner",
      time: "7:30 PM",
      icon: Moon,
      items: ["Salmon", "Sweet potato", "Steamed broccoli"],
      calories: 420,
      protein: 38,
      carbs: 42,
      fats: 10,
    },
  ]

  return (
    <Card className="p-6">
      <h2 className="text-xl font-semibold mb-4">Today's Meals</h2>

      <div className="space-y-4">
        {meals.map((meal, index) => {
          const Icon = meal.icon
          return (
            <div key={index} className="border rounded-lg p-4 hover:bg-muted/50 transition-colors">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="bg-orange-500/10 text-orange-500 p-2 rounded-lg">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{meal.name}</h3>
                    <p className="text-sm text-muted-foreground">{meal.time}</p>
                  </div>
                </div>
                <Badge variant="secondary">{meal.calories} kcal</Badge>
              </div>

              <div className="mb-3">
                {meal.items.map((item, i) => (
                  <span key={i} className="text-sm text-muted-foreground">
                    {item}
                    {i < meal.items.length - 1 ? ", " : ""}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between">
                <div className="flex gap-4 text-xs">
                  <span className="text-muted-foreground">
                    <span className="font-medium text-foreground">{meal.protein}g</span> protein
                  </span>
                  <span className="text-muted-foreground">
                    <span className="font-medium text-foreground">{meal.carbs}g</span> carbs
                  </span>
                  <span className="text-muted-foreground">
                    <span className="font-medium text-foreground">{meal.fats}g</span> fats
                  </span>
                </div>
                <Button variant="ghost" size="sm">
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          )
        })}
      </div>
    </Card>
  )
}
