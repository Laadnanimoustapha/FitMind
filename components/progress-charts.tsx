"use client"

import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

export function ProgressCharts() {
  const weightData = [
    { date: "Week 1", weight: 75 },
    { date: "Week 2", weight: 74.5 },
    { date: "Week 3", weight: 74 },
    { date: "Week 4", weight: 73.2 },
    { date: "Week 5", weight: 72.5 },
    { date: "Week 6", weight: 71.8 },
  ]

  const activityData = [
    { day: "Mon", calories: 420, minutes: 45 },
    { day: "Tue", calories: 380, minutes: 40 },
    { day: "Wed", calories: 520, minutes: 60 },
    { day: "Thu", calories: 450, minutes: 50 },
    { day: "Fri", calories: 490, minutes: 55 },
    { day: "Sat", calories: 380, minutes: 42 },
    { day: "Sun", calories: 410, minutes: 48 },
  ]

  const moodData = [
    { date: "Week 1", score: 7 },
    { date: "Week 2", score: 6.5 },
    { date: "Week 3", score: 8 },
    { date: "Week 4", score: 7.5 },
    { date: "Week 5", score: 8.5 },
    { date: "Week 6", score: 8 },
  ]

  return (
    <Card className="p-6">
      <h2 className="text-xl font-semibold mb-4">Progress Charts</h2>

      <Tabs defaultValue="weight" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="weight">Weight</TabsTrigger>
          <TabsTrigger value="activity">Activity</TabsTrigger>
          <TabsTrigger value="mood">Mood</TabsTrigger>
        </TabsList>

        <TabsContent value="weight" className="mt-6">
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={weightData}>
                <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                <XAxis dataKey="date" className="text-xs" />
                <YAxis className="text-xs" domain={[70, 76]} />
                <Tooltip />
                <Line type="monotone" dataKey="weight" stroke="hsl(var(--primary))" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <p className="text-sm text-muted-foreground mt-4">Your weight trend over the past 6 weeks</p>
        </TabsContent>

        <TabsContent value="activity" className="mt-6">
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={activityData}>
                <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                <XAxis dataKey="day" className="text-xs" />
                <YAxis className="text-xs" />
                <Tooltip />
                <Bar dataKey="calories" fill="hsl(var(--primary))" />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <p className="text-sm text-muted-foreground mt-4">Calories burned this week</p>
        </TabsContent>

        <TabsContent value="mood" className="mt-6">
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={moodData}>
                <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                <XAxis dataKey="date" className="text-xs" />
                <YAxis className="text-xs" domain={[0, 10]} />
                <Tooltip />
                <Line type="monotone" dataKey="score" stroke="hsl(var(--chart-3))" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <p className="text-sm text-muted-foreground mt-4">Average mood score over the past 6 weeks</p>
        </TabsContent>
      </Tabs>
    </Card>
  )
}
