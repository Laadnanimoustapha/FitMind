import { DashboardNav } from "@/components/dashboard-nav"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Trophy, Award, Star, Zap, Target, Flame, Crown, Medal } from "lucide-react"

export default function AchievementsPage() {
  const userStats = {
    level: 12,
    xp: 3450,
    xpToNext: 4000,
    totalPoints: 8750,
    streak: 14,
  }

  const achievements = [
    {
      title: "First Steps",
      description: "Complete your first workout",
      icon: Target,
      unlocked: true,
      date: "Nov 15, 2024",
      points: 50,
      rarity: "Common",
    },
    {
      title: "Week Warrior",
      description: "Maintain a 7-day workout streak",
      icon: Flame,
      unlocked: true,
      date: "Nov 22, 2024",
      points: 100,
      rarity: "Uncommon",
    },
    {
      title: "Nutrition Master",
      description: "Log meals for 30 consecutive days",
      icon: Star,
      unlocked: true,
      date: "Dec 1, 2024",
      points: 200,
      rarity: "Rare",
    },
    {
      title: "Mindful Month",
      description: "Meditate for 30 days straight",
      icon: Award,
      unlocked: false,
      progress: 70,
      points: 250,
      rarity: "Rare",
    },
    {
      title: "Iron Will",
      description: "Complete 100 workouts",
      icon: Medal,
      unlocked: false,
      progress: 45,
      points: 500,
      rarity: "Epic",
    },
    {
      title: "Wellness Champion",
      description: "Reach level 20",
      icon: Crown,
      unlocked: false,
      progress: 60,
      points: 1000,
      rarity: "Legendary",
    },
  ]

  const rarityColors = {
    Common: "bg-gray-500/10 text-gray-500",
    Uncommon: "bg-green-500/10 text-green-500",
    Rare: "bg-blue-500/10 text-blue-500",
    Epic: "bg-purple-500/10 text-purple-500",
    Legendary: "bg-orange-500/10 text-orange-500",
  }

  return (
    <div className="min-h-screen bg-background">
      <DashboardNav />

      <main className="container mx-auto px-4 py-8 max-w-7xl">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-balance mb-2">Achievements</h1>
          <p className="text-muted-foreground text-lg">Unlock rewards and track your progress</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-primary/10 text-primary p-3 rounded-lg">
                <Zap className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Level</p>
                <p className="text-3xl font-bold">{userStats.level}</p>
              </div>
            </div>
            <Progress value={(userStats.xp / userStats.xpToNext) * 100} className="h-2 mb-2" />
            <p className="text-xs text-muted-foreground">
              {userStats.xp} / {userStats.xpToNext} XP to next level
            </p>
          </Card>

          <Card className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-orange-500/10 text-orange-500 p-3 rounded-lg">
                <Trophy className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Total Points</p>
                <p className="text-3xl font-bold">{userStats.totalPoints}</p>
              </div>
            </div>
            <p className="text-xs text-muted-foreground">Earned from achievements</p>
          </Card>

          <Card className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-accent/10 text-accent p-3 rounded-lg">
                <Flame className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Current Streak</p>
                <p className="text-3xl font-bold">{userStats.streak}</p>
              </div>
            </div>
            <p className="text-xs text-muted-foreground">Days in a row</p>
          </Card>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon
            return (
              <Card key={index} className={`p-6 ${achievement.unlocked ? "" : "opacity-60"}`}>
                <div className="flex items-start justify-between mb-4">
                  <div
                    className={`${
                      achievement.unlocked ? "bg-primary/10 text-primary" : "bg-muted text-muted-foreground"
                    } p-3 rounded-lg`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <Badge className={rarityColors[achievement.rarity as keyof typeof rarityColors]}>
                    {achievement.rarity}
                  </Badge>
                </div>

                <h3 className="font-semibold mb-1">{achievement.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{achievement.description}</p>

                {achievement.unlocked ? (
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-green-500 font-medium">Unlocked</span>
                    <span className="text-muted-foreground">{achievement.date}</span>
                  </div>
                ) : (
                  <div className="space-y-2">
                    <Progress value={achievement.progress} className="h-2" />
                    <p className="text-xs text-muted-foreground">{achievement.progress}% complete</p>
                  </div>
                )}

                <div className="mt-4 pt-4 border-t">
                  <span className="text-xs text-muted-foreground">Reward: </span>
                  <span className="text-xs font-medium">{achievement.points} points</span>
                </div>
              </Card>
            )
          })}
        </div>
      </main>
    </div>
  )
}
