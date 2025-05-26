"use client"

import { useState } from "react"
import { employees } from "@/lib/data"
import { EmployeeCard } from "@/components/employee-card"
import { SearchFilter } from "@/components/search-filter"
import { useSearchFilter } from "@/hooks/use-search-filter"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

const EMPLOYEES_PER_PAGE = 8

export default function Dashboard() {
  const {
    searchTerm,
    setSearchTerm,
    selectedDepartments,
    setSelectedDepartments,
    selectedRatings,
    setSelectedRatings,
    filteredEmployees,
  } = useSearchFilter(employees)

  const [currentPage, setCurrentPage] = useState(1)

  const totalPages = Math.ceil(filteredEmployees.length / EMPLOYEES_PER_PAGE)
  const startIndex = (currentPage - 1) * EMPLOYEES_PER_PAGE
  const endIndex = startIndex + EMPLOYEES_PER_PAGE
  const currentEmployees = filteredEmployees.slice(startIndex, endIndex)

  const goToPage = (page: number) => {
    setCurrentPage(Math.max(1, Math.min(page, totalPages)))
  }

  // Reset to first page when filters change
  useState(() => {
    setCurrentPage(1)
  })

  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-foreground">HR Dashboard</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Manage your team, track performance, and make data-driven decisions with our comprehensive HR management
          system.
        </p>
      </div>

      <SearchFilter
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        selectedDepartments={selectedDepartments}
        setSelectedDepartments={setSelectedDepartments}
        selectedRatings={selectedRatings}
        setSelectedRatings={setSelectedRatings}
        resultCount={filteredEmployees.length}
      />

      {currentEmployees.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-lg text-muted-foreground">No employees found matching your criteria.</p>
          <p className="text-sm text-muted-foreground mt-2">Try adjusting your search terms or filters.</p>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {currentEmployees.map((employee) => (
              <EmployeeCard key={employee.id} employee={employee} />
            ))}
          </div>

          {totalPages > 1 && (
            <div className="flex items-center justify-center space-x-4">
              <Button variant="outline" onClick={() => goToPage(currentPage - 1)} disabled={currentPage === 1}>
                <ChevronLeft className="h-4 w-4 mr-2" />
                Previous
              </Button>

              <div className="flex items-center space-x-2">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <Button
                    key={page}
                    variant={currentPage === page ? "default" : "outline"}
                    size="sm"
                    onClick={() => goToPage(page)}
                    className="w-10"
                  >
                    {page}
                  </Button>
                ))}
              </div>

              <Button variant="outline" onClick={() => goToPage(currentPage + 1)} disabled={currentPage === totalPages}>
                Next
                <ChevronRight className="h-4 w-4 ml-2" />
              </Button>
            </div>
          )}
        </>
      )}
    </div>
  )
}
