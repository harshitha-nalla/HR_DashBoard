"use client"

import { useState, useMemo } from "react"
import type { Employee } from "@/lib/data"

export function useSearchFilter(employees: Employee[]) {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedDepartments, setSelectedDepartments] = useState<string[]>([])
  const [selectedRatings, setSelectedRatings] = useState<number[]>([])

  const filteredEmployees = useMemo(() => {
    return employees.filter((employee) => {
      const matchesSearch =
        employee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        employee.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        employee.department.toLowerCase().includes(searchTerm.toLowerCase())

      const matchesDepartment = selectedDepartments.length === 0 || selectedDepartments.includes(employee.department)

      const matchesRating =
        selectedRatings.length === 0 || selectedRatings.some((rating) => Math.floor(employee.rating) === rating)

      return matchesSearch && matchesDepartment && matchesRating
    })
  }, [employees, searchTerm, selectedDepartments, selectedRatings])

  return {
    searchTerm,
    setSearchTerm,
    selectedDepartments,
    setSelectedDepartments,
    selectedRatings,
    setSelectedRatings,
    filteredEmployees,
  }
}
