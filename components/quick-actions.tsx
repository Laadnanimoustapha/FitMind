import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Plus, Dumbbell, Utensils, Brain, Target } from "lucide-react"
import Link from "next/link"

export function QuickActions() {
  const actions = [
    {
      label: "Log Workout",
      icon: Dumbbell,
      href: "/fitness/log",
      color: "text-primary",
    },
    {
      label: "Track Meal",
      icon: Utensils,
      href: "/nutrition/log",
      color: "text-orange-500",
    },
    {
      label: "Mood Check",
      icon: Brain,
      href: "/mental-health/mood",
      color: "text-purple-500",
    },
    {
      label: "Set Goal",
      icon: Target,
      href: "/goals/new",
      color: "text-accent",
    },
  ]

  return (
    <Card className="p-6">
      <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
      <div className="grid sm:grid-cols-2 gap-3">
        {actions.map((action) => {
          const Icon = action.icon
          return (
            <Button
              key={action.label}
              variant="outline"
              asChild
              className="h-auto py-4 justify-start gap-3 bg-transparent"
            >
              <Link href={action.href}>
                <div className={`${action.color} p-2 rounded-lg bg-muted`}>
                  <Icon className="w-5 h-5" />
                </div>
                <span className="font-medium">{action.label}</span>
                <Plus className="w-4 h-4 ml-auto text-muted-foreground" />
              </Link>
            </Button>
          )
        })}
      </div>
    </Card>
  )
}
