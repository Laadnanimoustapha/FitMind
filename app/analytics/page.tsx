import { DashboardNav } from "@/components/dashboard-nav"
import { AnalyticsOverview } from "@/components/analytics-overview"
import { ProgressCharts } from "@/components/progress-charts"
import { WeeklyReport } from "@/components/weekly-report"
import { GoalInsights } from "@/components/goal-insights"

export default function AnalyticsPage() {
  return (
    <div className="min-h-screen bg-background">
      <DashboardNav />

      <main className="container mx-auto px-4 py-8 max-w-7xl">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-balance mb-2">Analytics & Progress</h1>
          <p className="text-muted-foreground text-lg">Track your wellness journey with detailed insights</p>
        </div>

        <AnalyticsOverview />

        <div className="grid lg:grid-cols-3 gap-6 mt-8">
          <div className="lg:col-span-2 space-y-6">
            <ProgressCharts />
            <WeeklyReport />
          </div>
          <div>
            <GoalInsights />
          </div>
        </div>
      </main>
    </div>
  )
}
