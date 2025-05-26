import { create } from "zustand"
import { persist } from "zustand/middleware"

interface BookmarkStore {
  bookmarkedIds: string[]
  addBookmark: (id: string) => void
  removeBookmark: (id: string) => void
  isBookmarked: (id: string) => boolean
  clearBookmarks: () => void
}

export const useBookmarkStore = create<BookmarkStore>()(
  persist(
    (set, get) => ({
      bookmarkedIds: [],
      addBookmark: (id: string) =>
        set((state) => ({
          bookmarkedIds: state.bookmarkedIds.includes(id) ? state.bookmarkedIds : [...state.bookmarkedIds, id],
        })),
      removeBookmark: (id: string) =>
        set((state) => ({
          bookmarkedIds: state.bookmarkedIds.filter((bookmarkId) => bookmarkId !== id),
        })),
      isBookmarked: (id: string) => get().bookmarkedIds.includes(id),
      clearBookmarks: () => set({ bookmarkedIds: [] }),
    }),
    {
      name: "hr-bookmarks",
    },
  ),
)
