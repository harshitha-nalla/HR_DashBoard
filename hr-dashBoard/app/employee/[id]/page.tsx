"use client"

import { employees } from "@/lib/data"
import { notFound } from "next/navigation"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Star, Mail, Phone, MapPin, Calendar, Bookmark, BookmarkCheck } from "lucide-react"
import { useBookmarkStore } from "@/store/bookmarks-store"
import { useToast } from "@/hooks/use-toast"
import { FeedbackForm } from "@/components/feedback-form"

interface EmployeeDetailPageProps {
  params: {
    id: string
  }
}

export default function EmployeeDetailPage({ params }: EmployeeDetailPageProps) {
  const employee = employees.find((emp) => emp.id === params.id)
  const { addBookmark, removeBookmark, isBookmarked } = useBookmarkStore()
  const { toast } = useToast()

  if (!employee) {
    notFound()
  }

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

  const getPerformanceBadge = (rating: number) => {
    if (rating >= 4.5) return { label: "Excellent", variant: "default" as const }
    if (rating >= 4.0) return { label: "Good", variant: "secondary" as const }
    if (rating >= 3.5) return { label: "Average", variant: "outline" as const }
    return { label: "Needs Improvement", variant: "destructive" as const }
  }

  const performanceBadge = getPerformanceBadge(employee.rating)

  return (
    <div className="space-y-8">
      {/* Header */}
      <Card>
        <CardContent className="p-8">
          <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6">
            <Avatar className="h-24 w-24">
              <AvatarImage src={employee.avatar || "/placeholder.svg"} alt={employee.name} />
              <AvatarFallback className="bg-primary/10 text-primary font-semibold text-lg">
                {employee.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>

            <div className="flex-1 space-y-4">
              <div>
                <div className="flex items-center space-x-3 mb-2">
                  <h1 className="text-3xl font-bold text-foreground">{employee.name}</h1>
                  <Badge variant={performanceBadge.variant}>{performanceBadge.label}</Badge>
                </div>

                <div className="flex items-center space-x-1 mb-3">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className={`h-5 w-5 ${
                        star <= employee.rating ? "fill-accent text-accent" : "text-muted-foreground"
                      }`}
                    />
                  ))}
                  <span className="text-lg font-medium ml-2">{employee.rating.toFixed(1)}</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4 text-muted-foreground" />
                  <span>{employee.email}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4 text-muted-foreground" />
                  <span>{employee.phone}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <span>{employee.address}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <span>Joined {new Date(employee.joinDate).toLocaleDateString()}</span>
                </div>
              </div>
            </div>

            <Button
              onClick={handleBookmark}
              variant={bookmarked ? "default" : "outline"}
              className="flex items-center space-x-2"
            >
              {bookmarked ? <BookmarkCheck className="h-4 w-4" /> : <Bookmark className="h-4 w-4" />}
              <span>{bookmarked ? "Bookmarked" : "Bookmark"}</span>
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Tabs */}
      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="projects">Projects</TabsTrigger>
          <TabsTrigger value="feedback">Feedback</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>About</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">{employee.bio}</p>
                <div className="mt-4 space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">Department:</span>
                    <Badge variant="outline">{employee.department}</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">Age:</span>
                    <span className="text-sm">{employee.age} years</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Performance History</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {employee.performance.map((record, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">{record.month}</span>
                      <span className="text-sm text-muted-foreground">{record.score}/100</span>
                    </div>
                    <Progress value={record.score} className="h-2" />
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>Goals: {record.goals}</span>
                      <span>Achieved: {record.achievements}</span>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="projects" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {employee.projects.map((project) => (
              <Card key={project.id}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{project.name}</CardTitle>
                    <Badge
                      variant={
                        project.status === "completed"
                          ? "default"
                          : project.status === "active"
                            ? "secondary"
                            : "outline"
                      }
                    >
                      {project.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">Progress</span>
                      <span className="text-sm text-muted-foreground">{project.progress}%</span>
                    </div>
                    <Progress value={project.progress} className="h-2" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="feedback" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Recent Feedback</h3>
              {employee.feedback.map((feedback) => (
                <Card key={feedback.id}>
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between mb-2">
                      <span className="font-medium text-sm">{feedback.from}</span>
                      <div className="flex items-center space-x-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star
                            key={star}
                            className={`h-3 w-3 ${
                              star <= feedback.rating ? "fill-accent text-accent" : "text-muted-foreground"
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">{feedback.message}</p>
                    <span className="text-xs text-muted-foreground">
                      {new Date(feedback.date).toLocaleDateString()}
                    </span>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Add Feedback</h3>
              <FeedbackForm employeeId={employee.id} employeeName={employee.name} />
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
