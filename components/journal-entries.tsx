import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BookOpen, Plus } from "lucide-react"
import Link from "next/link"

export function JournalEntries() {
  const entries = [
    {
      title: "Grateful for today's progress",
      date: "Today, 9:00 PM",
      preview: "Today was a productive day. I managed to complete my workout and eat healthy meals...",
      mood: "Happy",
    },
    {
      title: "Reflecting on the week",
      date: "Yesterday, 8:30 PM",
      preview: "This week has been challenging but rewarding. I've learned to manage stress better...",
      mood: "Calm",
    },
    {
      title: "Morning thoughts",
      date: "2 days ago",
      preview: "Woke up feeling energized and ready to tackle the day. Meditation really helps...",
      mood: "Energetic",
    },
  ]

  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold">Journal Entries</h2>
        <Button size="sm" asChild>
          <Link href="/mental-health/journal" className="gap-2">
            <Plus className="w-4 h-4" />
            New Entry
          </Link>
        </Button>
      </div>

      <div className="space-y-4">
        {entries.map((entry, index) => (
          <div key={index} className="border rounded-lg p-4 hover:bg-muted/50 transition-colors cursor-pointer">
            <div className="flex items-start gap-3">
              <div className="bg-purple-500/10 text-purple-500 p-2 rounded-lg">
                <BookOpen className="w-5 h-5" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between mb-1">
                  <h3 className="font-medium">{entry.title}</h3>
                  <span className="text-xs text-muted-foreground whitespace-nowrap ml-2">{entry.date}</span>
                </div>
                <p className="text-sm text-muted-foreground mb-2 line-clamp-2">{entry.preview}</p>
                <span className="text-xs bg-muted px-2 py-1 rounded">{entry.mood}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Button className="w-full mt-4 bg-transparent" variant="outline" asChild>
        <Link href="/mental-health/journal">View All Entries</Link>
      </Button>
    </Card>
  )
}
