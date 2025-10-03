import { DashboardNav } from "@/components/dashboard-nav"
import { NutritionOverview } from "@/components/nutrition-overview"
import { MealHistory } from "@/components/meal-history"
import { NutritionGoals } from "@/components/nutrition-goals"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import Link from "next/link"

export default function NutritionPage() {
  return (
    <div className="min-h-screen bg-background">
      <DashboardNav />

      <main className="container mx-auto px-4 py-8 max-w-7xl">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold text-balance mb-2">Nutrition Tracker</h1>
            <p className="text-muted-foreground text-lg">Track your meals and reach your nutrition goals</p>
          </div>
          <Button asChild size="lg">
            <Link href="/nutrition/log" className="gap-2">
              <Plus className="w-5 h-5" />
              Log Meal
            </Link>
          </Button>
        </div>

        <NutritionOverview />

        <div className="grid lg:grid-cols-3 gap-6 mt-8">
          <div className="lg:col-span-2">
            <MealHistory />
          </div>
          <div>
            <NutritionGoals />
          </div>
        </div>
      </main>
    </div>
  )
}
