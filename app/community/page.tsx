import { DashboardNav } from "@/components/dashboard-nav"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Heart, MessageCircle, Share2, Trophy, TrendingUp, Users } from "lucide-react"

export default function CommunityPage() {
  const leaderboard = [
    { rank: 1, name: "Sarah Johnson", points: 12450, avatar: "/placeholder.svg?height=40&width=40", level: 18 },
    { rank: 2, name: "Mike Chen", points: 11200, avatar: "/placeholder.svg?height=40&width=40", level: 17 },
    { rank: 3, name: "Emma Davis", points: 10800, avatar: "/placeholder.svg?height=40&width=40", level: 16 },
    { rank: 4, name: "You", points: 8750, avatar: "/placeholder.svg?height=40&width=40", level: 12, isUser: true },
    { rank: 5, name: "Alex Kim", points: 8200, avatar: "/placeholder.svg?height=40&width=40", level: 12 },
  ]

  const posts = [
    {
      author: "Sarah Johnson",
      avatar: "/placeholder.svg?height=40&width=40",
      time: "2 hours ago",
      content: "Just completed my 50th workout this month! Feeling stronger than ever. Keep pushing everyone!",
      likes: 24,
      comments: 8,
      achievement: "50 Workouts",
    },
    {
      author: "Mike Chen",
      avatar: "/placeholder.svg?height=40&width=40",
      time: "5 hours ago",
      content: "Hit a new personal record on my 5K run today - 22:45! The training is paying off.",
      likes: 31,
      comments: 12,
    },
    {
      author: "Emma Davis",
      avatar: "/placeholder.svg?height=40&width=40",
      time: "1 day ago",
      content: "Meal prep Sunday done! Healthy eating starts with preparation. What's your favorite meal prep recipe?",
      likes: 18,
      comments: 15,
    },
  ]

  const challenges = [
    {
      title: "30-Day Plank Challenge",
      participants: 234,
      daysLeft: 12,
      description: "Build core strength with daily plank exercises",
      joined: true,
    },
    {
      title: "10K Steps Daily",
      participants: 567,
      daysLeft: 20,
      description: "Walk 10,000 steps every day this month",
      joined: false,
    },
    {
      title: "Hydration Hero",
      participants: 189,
      daysLeft: 8,
      description: "Drink 8 glasses of water daily",
      joined: true,
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <DashboardNav />

      <main className="container mx-auto px-4 py-8 max-w-7xl">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-balance mb-2">Community</h1>
          <p className="text-muted-foreground text-lg">Connect with others on their wellness journey</p>
        </div>

        <Tabs defaultValue="feed" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="feed">Feed</TabsTrigger>
            <TabsTrigger value="leaderboard">Leaderboard</TabsTrigger>
            <TabsTrigger value="challenges">Challenges</TabsTrigger>
          </TabsList>

          <TabsContent value="feed">
            <div className="grid lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 space-y-6">
                {posts.map((post, index) => (
                  <Card key={index} className="p-6">
                    <div className="flex items-start gap-3 mb-4">
                      <Avatar>
                        <AvatarImage src={post.avatar || "/placeholder.svg"} />
                        <AvatarFallback>{post.author[0]}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h3 className="font-semibold">{post.author}</h3>
                          <span className="text-xs text-muted-foreground">{post.time}</span>
                        </div>
                        {post.achievement && (
                          <Badge variant="secondary" className="mt-1 text-xs">
                            <Trophy className="w-3 h-3 mr-1" />
                            {post.achievement}
                          </Badge>
                        )}
                      </div>
                    </div>

                    <p className="text-sm mb-4">{post.content}</p>

                    <div className="flex items-center gap-4 pt-4 border-t">
                      <Button variant="ghost" size="sm" className="gap-2">
                        <Heart className="w-4 h-4" />
                        {post.likes}
                      </Button>
                      <Button variant="ghost" size="sm" className="gap-2">
                        <MessageCircle className="w-4 h-4" />
                        {post.comments}
                      </Button>
                      <Button variant="ghost" size="sm" className="gap-2">
                        <Share2 className="w-4 h-4" />
                        Share
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>

              <div className="space-y-6">
                <Card className="p-6">
                  <h3 className="font-semibold mb-4">Your Stats</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Rank</span>
                      <span className="font-medium">#4</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Level</span>
                      <span className="font-medium">12</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Points</span>
                      <span className="font-medium">8,750</span>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <h3 className="font-semibold mb-4">Trending Topics</h3>
                  <div className="space-y-2">
                    {["#MorningWorkout", "#MealPrep", "#MindfulMonday", "#FitnessGoals"].map((tag) => (
                      <Button key={tag} variant="ghost" className="w-full justify-start text-sm">
                        {tag}
                      </Button>
                    ))}
                  </div>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="leaderboard">
            <Card className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold">Top Performers</h2>
                <Badge variant="secondary">This Month</Badge>
              </div>

              <div className="space-y-4">
                {leaderboard.map((user) => (
                  <div
                    key={user.rank}
                    className={`flex items-center gap-4 p-4 rounded-lg ${
                      user.isUser ? "bg-primary/5 border-2 border-primary" : "border"
                    }`}
                  >
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-muted font-bold text-sm">
                      {user.rank}
                    </div>
                    <Avatar>
                      <AvatarImage src={user.avatar || "/placeholder.svg"} />
                      <AvatarFallback>{user.name[0]}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <h3 className="font-semibold">{user.name}</h3>
                      <p className="text-sm text-muted-foreground">Level {user.level}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold">{user.points.toLocaleString()}</p>
                      <p className="text-xs text-muted-foreground">points</p>
                    </div>
                    {user.rank <= 3 && (
                      <Trophy
                        className={`w-6 h-6 ${
                          user.rank === 1 ? "text-yellow-500" : user.rank === 2 ? "text-gray-400" : "text-orange-600"
                        }`}
                      />
                    )}
                  </div>
                ))}
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="challenges">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {challenges.map((challenge, index) => (
                <Card key={index} className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="bg-accent/10 text-accent p-3 rounded-lg">
                      <TrendingUp className="w-5 h-5" />
                    </div>
                    {challenge.joined && (
                      <Badge variant="default" className="text-xs">
                        Joined
                      </Badge>
                    )}
                  </div>

                  <h3 className="font-semibold mb-2">{challenge.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{challenge.description}</p>

                  <div className="flex items-center gap-4 mb-4 text-sm">
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <Users className="w-4 h-4" />
                      <span>{challenge.participants}</span>
                    </div>
                    <div className="text-muted-foreground">{challenge.daysLeft} days left</div>
                  </div>

                  <Button className="w-full" variant={challenge.joined ? "outline" : "default"}>
                    {challenge.joined ? "View Progress" : "Join Challenge"}
                  </Button>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
