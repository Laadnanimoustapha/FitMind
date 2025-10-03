import { DashboardNav } from "@/components/dashboard-nav"
import { QuickActions } from "@/components/quick-actions"
import { ActivityFeed } from "@/components/activity-feed"
import { GoalProgress } from "@/components/goal-progress"
import { ComprehensiveProgress } from "@/components/comprehensive-progress"

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-background">
      <DashboardNav />

      <main className="container mx-auto px-4 py-8 max-w-7xl">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-balance mb-2">Welcome back, Alex</h1>
          <p className="text-muted-foreground text-lg">Here's your wellness journey today</p>
        </div>

        <ComprehensiveProgress />

        <div className="grid lg:grid-cols-3 gap-6 mt-8">
          <div className="lg:col-span-2 space-y-6">
            <QuickActions />
            <ActivityFeed />
          </div>

          <div>
            <GoalProgress />
          </div>
        </div>
      </main>
    </div>
  )
}
