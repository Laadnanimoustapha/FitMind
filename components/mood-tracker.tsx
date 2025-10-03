"use client"

import { Card } from "@/components/ui/card"
import { Smile, Meh, Laugh } from "lucide-react"

export function MoodTracker() {
  const moodData = [
    { day: "Mon", mood: "happy", icon: Smile, color: "bg-green-500" },
    { day: "Tue", mood: "neutral", icon: Meh, color: "bg-yellow-500" },
    { day: "Wed", mood: "happy", icon: Smile, color: "bg-green-500" },
    { day: "Thu", mood: "great", icon: Laugh, color: "bg-blue-500" },
    { day: "Fri", mood: "happy", icon: Smile, color: "bg-green-500" },
    { day: "Sat", mood: "neutral", icon: Meh, color: "bg-yellow-500" },
    { day: "Sun", mood: "happy", icon: Smile, color: "bg-green-500" },
  ]

  const recentMoods = [
    {
      mood: "Happy",
      time: "2 hours ago",
      note: "Had a great workout session!",
      icon: Smile,
      color: "text-green-500",
      bgColor: "bg-green-500/10",
    },
    {
      mood: "Calm",
      time: "Yesterday, 8:00 PM",
      note: "Evening meditation was very peaceful",
      icon: Meh,
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
    },
    {
      mood: "Energetic",
      time: "Yesterday, 7:00 AM",
      note: "Morning run gave me so much energy",
      icon: Laugh,
      color: "text-yellow-500",
      bgColor: "bg-yellow-500/10",
    },
  ]

  return (
    <Card className="p-6">
      <h2 className="text-xl font-semibold mb-4">Mood Tracker</h2>

      <div className="mb-6">
        <h3 className="text-sm font-medium mb-3">This Week</h3>
        <div className="flex justify-between gap-2">
          {moodData.map((data, index) => {
            const Icon = data.icon
            return (
              <div key={index} className="flex flex-col items-center gap-2">
                <div className={`${data.color} p-3 rounded-lg`}>
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <span className="text-xs text-muted-foreground">{data.day}</span>
              </div>
            )
          })}
        </div>
      </div>

      <div>
        <h3 className="text-sm font-medium mb-3">Recent Entries</h3>
        <div className="space-y-3">
          {recentMoods.map((entry, index) => {
            const Icon = entry.icon
            return (
              <div key={index} className="flex gap-3 p-3 border rounded-lg">
                <div className={`${entry.bgColor} ${entry.color} p-2 rounded-lg h-fit`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-medium">{entry.mood}</span>
                    <span className="text-xs text-muted-foreground">{entry.time}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{entry.note}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </Card>
  )
}
