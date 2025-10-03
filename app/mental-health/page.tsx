import { DashboardNav } from "@/components/dashboard-nav"
import { MentalHealthOverview } from "@/components/mental-health-overview"
import { MoodTracker } from "@/components/mood-tracker"
import { MeditationLibrary } from "@/components/meditation-library"
import { JournalEntries } from "@/components/journal-entries"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import Link from "next/link"

export default function MentalHealthPage() {
  return (
    <div className="min-h-screen bg-background">
      <DashboardNav />

      <main className="container mx-auto px-4 py-8 max-w-7xl">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold text-balance mb-2">Mental Health</h1>
            <p className="text-muted-foreground text-lg">Track your mood and practice mindfulness</p>
          </div>
          <Button asChild size="lg">
            <Link href="/mental-health/mood" className="gap-2">
              <Plus className="w-5 h-5" />
              Log Mood
            </Link>
          </Button>
        </div>

        <MentalHealthOverview />

        <div className="grid lg:grid-cols-3 gap-6 mt-8">
          <div className="lg:col-span-2 space-y-6">
            <MoodTracker />
            <JournalEntries />
          </div>
          <div>
            <MeditationLibrary />
          </div>
        </div>
      </main>
    </div>
  )
}
