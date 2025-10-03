import { DashboardNav } from "@/components/dashboard-nav"
import { FitnessOverview } from "@/components/fitness-overview"
import { WorkoutHistory } from "@/components/workout-history"
import { ExerciseLibrary } from "@/components/exercise-library"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import Link from "next/link"

export default function FitnessPage() {
  return (
    <div className="min-h-screen bg-background">
      <DashboardNav />

      <main className="container mx-auto px-4 py-8 max-w-7xl">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold text-balance mb-2">Fitness Tracker</h1>
            <p className="text-muted-foreground text-lg">Track your workouts and reach your fitness goals</p>
          </div>
          <Button asChild size="lg">
            <Link href="/fitness/log" className="gap-2">
              <Plus className="w-5 h-5" />
              Log Workout
            </Link>
          </Button>
        </div>

        <FitnessOverview />

        <div className="grid lg:grid-cols-3 gap-6 mt-8">
          <div className="lg:col-span-2">
            <WorkoutHistory />
          </div>
          <div>
            <ExerciseLibrary />
          </div>
        </div>
      </main>
    </div>
  )
}
