"use client"

import { employees } from "@/lib/data"
import { useBookmarkStore } from "@/store/bookmarks-store"
import { EmployeeCard } from "@/components/employee-card"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Bookmark, Users, TrendingUp, FolderOpen } from "lucide-react"

export default function BookmarksPage() {
  const { bookmarkedIds, clearBookmarks } = useBookmarkStore()

  const bookmarkedEmployees = employees.filter((employee) => bookmarkedIds.includes(employee.id))

  const handleBulkAction = (action: string) => {
    // Simulate bulk actions
    console.log(`Performing ${action} on ${bookmarkedEmployees.length} employees`)
  }

  if (bookmarkedEmployees.length === 0) {
    return (
      <div className="space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-foreground">Bookmarked Employees</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Keep track of your important team members and perform bulk actions.
          </p>
        </div>

        <Card className="max-w-md mx-auto">
          <CardContent className="p-8 text-center space-y-4">
            <div className="mx-auto w-16 h-16 bg-muted rounded-full flex items-center justify-center">
              <Bookmark className="h-8 w-8 text-muted-foreground" />
            </div>
            <h3 className="text-lg font-semibold">No bookmarks yet</h3>
            <p className="text-muted-foreground">Start bookmarking employees from the dashboard to see them here.</p>
            <Button asChild>
              <a href="/">Browse Employees</a>
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-foreground">Bookmarked Employees</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Manage your bookmarked team members and perform bulk actions.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold">{bookmarkedEmployees.length}</p>
                <p className="text-sm text-muted-foreground">Bookmarked</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-4">
              <div className="p-2 bg-secondary/10 rounded-lg">
                <TrendingUp className="h-6 w-6 text-secondary" />
              </div>
              <div>
                <p className="text-2xl font-bold">
                  {(bookmarkedEmployees.reduce((sum, emp) => sum + emp.rating, 0) / bookmarkedEmployees.length).toFixed(
                    1,
                  )}
                </p>
                <p className="text-sm text-muted-foreground">Avg Rating</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-4">
              <div className="p-2 bg-accent/10 rounded-lg">
                <FolderOpen className="h-6 w-6 text-accent" />
              </div>
              <div>
                <p className="text-2xl font-bold">{new Set(bookmarkedEmployees.map((emp) => emp.department)).size}</p>
                <p className="text-sm text-muted-foreground">Departments</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Bulk Actions */}
      <Card>
        <CardContent className="p-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between space-y-4 sm:space-y-0">
            <div>
              <h3 className="text-lg font-semibold">Bulk Actions</h3>
              <p className="text-sm text-muted-foreground">
                Perform actions on all {bookmarkedEmployees.length} bookmarked employees
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              <Button
                variant="outline"
                onClick={() => handleBulkAction("promote")}
                className="text-secondary hover:bg-secondary hover:text-secondary-foreground"
              >
                <TrendingUp className="h-4 w-4 mr-2" />
                Bulk Promote
              </Button>
              <Button variant="outline" onClick={() => handleBulkAction("assign")}>
                <FolderOpen className="h-4 w-4 mr-2" />
                Assign Project
              </Button>
              <Button variant="destructive" onClick={clearBookmarks}>
                Clear All
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Employee Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {bookmarkedEmployees.map((employee) => (
          <EmployeeCard key={employee.id} employee={employee} />
        ))}
      </div>
    </div>
  )
}
