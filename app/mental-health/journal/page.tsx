"use client"

import { DashboardNav } from "@/components/dashboard-nav"
import { Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import Link from "next/link"

export default function JournalPage() {
  return (
    <div className="min-h-screen bg-background">
      <DashboardNav />

      <main className="container mx-auto px-4 py-8 max-w-3xl">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-balance mb-2">New Journal Entry</h1>
          <p className="text-muted-foreground text-lg">Express your thoughts and feelings</p>
        </div>

        <Card className="p-6">
          <form className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="title">Title</Label>
              <Input id="title" placeholder="Give your entry a title..." />
            </div>

            <div className="space-y-2">
              <Label htmlFor="content">Your Thoughts</Label>
              <Textarea
                id="content"
                rows={12}
                placeholder="Write freely about your day, feelings, thoughts, or anything on your mind..."
                className="resize-none"
              />
            </div>

            <div className="space-y-2">
              <Label>Prompts (optional)</Label>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>• What am I grateful for today?</p>
                <p>• What challenges did I face and how did I handle them?</p>
                <p>• What made me smile today?</p>
                <p>• What do I want to improve tomorrow?</p>
              </div>
            </div>

            <div className="flex gap-3 pt-4">
              <Button type="submit" size="lg">
                Save Entry
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
