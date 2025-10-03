"use client"

import { DashboardNav } from "@/components/dashboard-nav"
import { Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Plus, X } from "lucide-react"
import { useState } from "react"
import Link from "next/link"

export default function LogWorkoutPage() {
  const [exercises, setExercises] = useState([{ name: "", sets: "", reps: "", weight: "" }])

  const addExercise = () => {
    setExercises([...exercises, { name: "", sets: "", reps: "", weight: "" }])
  }

  const removeExercise = (index: number) => {
    setExercises(exercises.filter((_, i) => i !== index))
  }

  return (
    <div className="min-h-screen bg-background">
      <DashboardNav />

      <main className="container mx-auto px-4 py-8 max-w-3xl">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-balance mb-2">Log Workout</h1>
          <p className="text-muted-foreground text-lg">Record your training session</p>
        </div>

        <Card className="p-6">
          <form className="space-y-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="workout-name">Workout Name</Label>
                <Input id="workout-name" placeholder="e.g., Morning Run, Leg Day" />
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="workout-type">Workout Type</Label>
                  <Select>
                    <SelectTrigger id="workout-type">
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="strength">Strength Training</SelectItem>
                      <SelectItem value="cardio">Cardio</SelectItem>
                      <SelectItem value="hiit">HIIT</SelectItem>
                      <SelectItem value="flexibility">Flexibility</SelectItem>
                      <SelectItem value="sports">Sports</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="duration">Duration (minutes)</Label>
                  <Input id="duration" type="number" placeholder="30" />
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Label>Exercises</Label>
                <Button type="button" variant="outline" size="sm" onClick={addExercise}>
                  <Plus className="w-4 h-4 mr-2" />
                  Add Exercise
                </Button>
              </div>

              <div className="space-y-4">
                {exercises.map((exercise, index) => (
                  <div key={index} className="border rounded-lg p-4 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Exercise {index + 1}</span>
                      {exercises.length > 1 && (
                        <Button type="button" variant="ghost" size="sm" onClick={() => removeExercise(index)}>
                          <X className="w-4 h-4" />
                        </Button>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Input placeholder="Exercise name (e.g., Bench Press)" />
                    </div>

                    <div className="grid grid-cols-3 gap-3">
                      <div className="space-y-2">
                        <Label className="text-xs">Sets</Label>
                        <Input type="number" placeholder="3" />
                      </div>
                      <div className="space-y-2">
                        <Label className="text-xs">Reps</Label>
                        <Input type="number" placeholder="10" />
                      </div>
                      <div className="space-y-2">
                        <Label className="text-xs">Weight (kg)</Label>
                        <Input type="number" placeholder="50" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="notes">Notes (optional)</Label>
              <Textarea id="notes" rows={3} placeholder="How did you feel? Any achievements or challenges?" />
            </div>

            <div className="flex gap-3 pt-4">
              <Button type="submit" size="lg">
                Save Workout
              </Button>
              <Button type="button" variant="outline" size="lg" asChild>
                <Link href="/fitness">Cancel</Link>
              </Button>
            </div>
          </form>
        </Card>
      </main>
    </div>
  )
}
