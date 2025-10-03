import { DashboardNav } from "@/components/dashboard-nav"
import { ProfileHeader } from "@/components/profile-header"
import { ProfileStats } from "@/components/profile-stats"
import { ProfileSettings } from "@/components/profile-settings"

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-background">
      <DashboardNav />

      <main className="container mx-auto px-4 py-8 max-w-5xl">
        <ProfileHeader />
        <div className="grid lg:grid-cols-3 gap-6 mt-8">
          <div className="lg:col-span-1">
            <ProfileStats />
          </div>
          <div className="lg:col-span-2">
            <ProfileSettings />
          </div>
        </div>
      </main>
    </div>
  )
}
