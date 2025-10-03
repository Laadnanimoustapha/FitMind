"use client"

import { DashboardNav } from "@/components/dashboard-nav"
import { Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Smile, Meh, Frown, Laugh, Angry } from "lucide-react"
import { useState } from "react"
import Link from "next/link"

export default function LogMoodPage() {
  const [selectedMood, setSelectedMood] = useState<string | null>(null)

  const moods = [
    { value: "great", label: "Great", icon: Laugh, color: "hover:bg-blue-500/10 hover:border-blue-500" },
    { value: "happy", label: "Happy", icon: Smile, color: "hover:bg-green-500/10 hover:border-green-500" },
    { value: "neutral", label: "Neutral", icon: Meh, color: "hover:bg-yellow-500/10 hover:border-yellow-500" },
    { value: "sad", label: "Sad", icon: Frown, color: "hover:bg-orange-500/10 hover:border-orange-500" },
    { value: "angry", label: "Angry", icon: Angry, color: "hover:bg-red-500/10 hover:border-red-500" },
  ]

  const activities = [
    "Exercise",
    "Work",
    "Social",
    "Family",
    "Meditation",
    "Sleep",
    "Eating",
    "Hobbies",
    "Nature",
    "Reading",
  ]

  return (
    <div className="min-h-screen bg-background">
      <DashboardNav />

      <main className="container mx-auto px-4 py-8 max-w-3xl">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-balance mb-2">Log Your Mood</h1>
          <p className="text-muted-foreground text-lg">How are you feeling right now?</p>
        </div>

        <Card className="p-6">
          <form className="space-y-6">
            <div className="space-y-4">
              <Label>Select Your Mood</Label>
              <div className="grid grid-cols-5 gap-3">
                {moods.map((mood) => {
                  const Icon = mood.icon
                  return (
                    <button
                      key={mood.value}
                      type="button"
                      onClick={() => setSelectedMood(mood.value)}
                      className={`flex flex-col items-center gap-2 p-4 border-2 rounded-lg transition-all ${
                        selectedMood === mood.value ? "border-primary bg-primary/5" : "border-border"
                      } ${mood.color}`}
                    >
                      <Icon className="w-8 h-8" />
                      <span className="text-xs font-medium">{mood.label}</span>
                    </button>
                  )
                })}
              </div>
            </div>

            <div className="space-y-4">
              <Label>What influenced your mood? (optional)</Label>
              <div className="flex flex-wrap gap-2">
                {activities.map((activity) => (
                  <Button key={activity} type="button" variant="outline" size="sm" className="bg-transparent">
                    {activity}
                  </Button>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="notes">Notes (optional)</Label>
              <Textarea
                id="notes"
                rows={4}
                placeholder="What's on your mind? Any thoughts or reflections about how you're feeling..."
              />
            </div>

            <div className="flex gap-3 pt-4">
              <Button type="submit" size="lg" disabled={!selectedMood}>
                Save Mood
              </Button>
              <Button type="button" variant="outline" size="lg" asChild>
                <Link href="/mental-health">Cancel</Link>
              </Button>
            </div>
          </form>
        </Card>
      </main>
    </div>
  )
}
