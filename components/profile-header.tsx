import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Camera, MapPin } from "lucide-react"

export function ProfileHeader() {
  return (
    <div className="relative">
      <div className="h-48 bg-gradient-to-r from-primary/20 to-accent/20 rounded-lg" />

      <div className="relative px-6 pb-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-end gap-4 -mt-16">
          <div className="relative">
            <Avatar className="w-32 h-32 border-4 border-background">
              <AvatarImage src="/placeholder.svg?height=128&width=128" alt="Alex Johnson" />
              <AvatarFallback className="text-2xl">AJ</AvatarFallback>
            </Avatar>
            <Button size="icon" variant="secondary" className="absolute bottom-0 right-0 rounded-full w-10 h-10">
              <Camera className="w-4 h-4" />
            </Button>
          </div>

          <div className="flex-1">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <h1 className="text-3xl font-bold mb-1">Alex Johnson</h1>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="w-4 h-4" />
                  <span>San Francisco, CA</span>
                </div>
              </div>
              <Button>Edit Profile</Button>
            </div>

            <div className="flex flex-wrap gap-2 mt-4">
              <Badge variant="secondary">Fitness Enthusiast</Badge>
              <Badge variant="secondary">Nutrition Focused</Badge>
              <Badge variant="secondary">Mindfulness Practitioner</Badge>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
