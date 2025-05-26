"use client"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuCheckboxItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Search, Filter, X } from "lucide-react"
import { departments } from "@/lib/data"

interface SearchFilterProps {
  searchTerm: string
  setSearchTerm: (term: string) => void
  selectedDepartments: string[]
  setSelectedDepartments: (departments: string[]) => void
  selectedRatings: number[]
  setSelectedRatings: (ratings: number[]) => void
  resultCount: number
}

export function SearchFilter({
  searchTerm,
  setSearchTerm,
  selectedDepartments,
  setSelectedDepartments,
  selectedRatings,
  setSelectedRatings,
  resultCount,
}: SearchFilterProps) {
  const handleDepartmentChange = (department: string, checked: boolean) => {
    if (checked) {
      setSelectedDepartments([...selectedDepartments, department])
    } else {
      setSelectedDepartments(selectedDepartments.filter((d) => d !== department))
    }
  }

  const handleRatingChange = (rating: number, checked: boolean) => {
    if (checked) {
      setSelectedRatings([...selectedRatings, rating])
    } else {
      setSelectedRatings(selectedRatings.filter((r) => r !== rating))
    }
  }

  const clearFilters = () => {
    setSearchTerm("")
    setSelectedDepartments([])
    setSelectedRatings([])
  }

  const hasActiveFilters = searchTerm || selectedDepartments.length > 0 || selectedRatings.length > 0

  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input
            placeholder="Search by name, email, or department..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>

        <div className="flex gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="flex items-center gap-2">
                <Filter className="h-4 w-4" />
                Departments
                {selectedDepartments.length > 0 && (
                  <Badge variant="secondary" className="ml-1">
                    {selectedDepartments.length}
                  </Badge>
                )}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuLabel>Filter by Department</DropdownMenuLabel>
              <DropdownMenuSeparator />
              {departments.map((department) => (
                <DropdownMenuCheckboxItem
                  key={department}
                  checked={selectedDepartments.includes(department)}
                  onCheckedChange={(checked) => handleDepartmentChange(department, checked)}
                >
                  {department}
                </DropdownMenuCheckboxItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="flex items-center gap-2">
                <Filter className="h-4 w-4" />
                Rating
                {selectedRatings.length > 0 && (
                  <Badge variant="secondary" className="ml-1">
                    {selectedRatings.length}
                  </Badge>
                )}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuLabel>Filter by Rating</DropdownMenuLabel>
              <DropdownMenuSeparator />
              {[5, 4, 3, 2, 1].map((rating) => (
                <DropdownMenuCheckboxItem
                  key={rating}
                  checked={selectedRatings.includes(rating)}
                  onCheckedChange={(checked) => handleRatingChange(rating, checked)}
                >
                  {rating} Star{rating !== 1 ? "s" : ""} & Above
                </DropdownMenuCheckboxItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {hasActiveFilters && (
            <Button variant="ghost" onClick={clearFilters} className="flex items-center gap-2">
              <X className="h-4 w-4" />
              Clear
            </Button>
          )}
        </div>
      </div>

      <div className="flex items-center justify-between">
        <p className="text-sm text-muted-foreground">
          Showing {resultCount} employee{resultCount !== 1 ? "s" : ""}
        </p>

        {hasActiveFilters && (
          <div className="flex flex-wrap gap-2">
            {searchTerm && (
              <Badge variant="outline" className="flex items-center gap-1">
                Search: {searchTerm}
                <X className="h-3 w-3 cursor-pointer" onClick={() => setSearchTerm("")} />
              </Badge>
            )}
            {selectedDepartments.map((dept) => (
              <Badge key={dept} variant="outline" className="flex items-center gap-1">
                {dept}
                <X className="h-3 w-3 cursor-pointer" onClick={() => handleDepartmentChange(dept, false)} />
              </Badge>
            ))}
            {selectedRatings.map((rating) => (
              <Badge key={rating} variant="outline" className="flex items-center gap-1">
                {rating}+ Stars
                <X className="h-3 w-3 cursor-pointer" onClick={() => handleRatingChange(rating, false)} />
              </Badge>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
