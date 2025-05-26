"use client"

import type { Employee } from "@/lib/data"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star, Eye, Bookmark, TrendingUp, BookmarkCheck } from "lucide-react"
import Link from "next/link"
import { useBookmarkStore } from "@/store/bookmarks-store"
import { useToast } from "@/hooks/use-toast"

interface EmployeeCardProps {
  employee: Employee
}

export function EmployeeCard({ employee }: EmployeeCardProps) {
  const { addBookmark, removeBookmark, isBookmarked } = useBookmarkStore()
  const { toast } = useToast()
  const bookmarked = isBookmarked(employee.id)

  const handleBookmark = () => {
    if (bookmarked) {
      removeBookmark(employee.id)
      toast({
        title: "Bookmark removed",
        description: `${employee.name} has been removed from bookmarks.`,
      })
    } else {
      addBookmark(employee.id)
      toast({
        title: "Bookmark added",
        description: `${employee.name} has been added to bookmarks.`,
      })
    }
  }

  const handlePromote = () => {
    toast({
      title: "Promotion initiated",
      description: `Promotion process started for ${employee.name}.`,
    })
  }

  const getPerformanceBadge = (rating: number) => {
    if (rating >= 4.5) return { label: "Excellent", variant: "default" as const }
    if (rating >= 4.0) return { label: "Good", variant: "secondary" as const }
    if (rating >= 3.5) return { label: "Average", variant: "outline" as const }
    return { label: "Needs Improvement", variant: "destructive" as const }
  }

  const performanceBadge = getPerformanceBadge(employee.rating)

  return (
    <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <CardContent className="p-6">
        <div className="flex items-start space-x-4">
          <Avatar className="h-16 w-16">
            <AvatarImage src={employee.avatar || "/placeholder.svg"} alt={employee.name} />
            <AvatarFallback className="bg-primary/10 text-primary font-semibold">
              {employee.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>

          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-foreground truncate">{employee.name}</h3>
              <Badge variant={performanceBadge.variant} className="ml-2">
                {performanceBadge.label}
              </Badge>
            </div>

            <p className="text-sm text-muted-foreground truncate">{employee.email}</p>

            <div className="flex items-center space-x-4 mt-2">
              <span className="text-sm text-muted-foreground">Age: {employee.age}</span>
              <Badge variant="outline" className="text-xs">
                {employee.department}
              </Badge>
            </div>

            <div className="flex items-center space-x-1 mt-3">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className={`h-4 w-4 ${star <= employee.rating ? "fill-accent text-accent" : "text-muted-foreground"}`}
                />
              ))}
              <span className="text-sm font-medium ml-2">{employee.rating.toFixed(1)}</span>
            </div>
          </div>
        </div>
      </CardContent>

      <CardFooter className="p-6 pt-0">
        <div className="space-y-2 w-full">
          <div className="flex space-x-2 w-full">
            <Link href={`/employee/${employee.id}`} className="flex-1">
              <Button variant="outline" className="w-full" size="sm">
                <Eye className="h-4 w-4 mr-2" />
                View
              </Button>
            </Link>

            <Button variant={bookmarked ? "default" : "outline"} size="sm" onClick={handleBookmark} className="flex-1">
              {bookmarked ? <BookmarkCheck className="h-4 w-4 mr-2" /> : <Bookmark className="h-4 w-4 mr-2" />}
              {bookmarked ? "Saved" : "Bookmark"}
            </Button>
          </div>

          <Button
            variant="outline"
            size="sm"
            onClick={handlePromote}
            className="w-full text-secondary hover:bg-secondary hover:text-secondary-foreground"
          >
            <TrendingUp className="h-4 w-4 mr-2" />
            Promote
          </Button>
        </div>
      </CardFooter>
    </Card>
  )
}
