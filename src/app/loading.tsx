import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="w-full">
      {/* Header Skeleton */}
      <header className="w-full border-b">
        <div className="container mx-auto py-4 px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <Skeleton className="h-8 w-32" />
            <div className="flex space-x-4">
              <Skeleton className="h-8 w-8 rounded-full" />
              <Skeleton className="h-8 w-8 rounded-full" />
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar Skeleton */}
          <aside className="w-full md:w-64 flex-shrink-0">
            <Skeleton className="h-8 w-32 mb-4" />
            <div className="space-y-2">
              {[...Array(5)].map((_, i) => (
                <Skeleton key={i} className="h-4 w-full" />
              ))}
            </div>
            <Skeleton className="h-8 w-32 mt-6 mb-4" />
            <div className="space-y-2">
              {[...Array(4)].map((_, i) => (
                <Skeleton key={i} className="h-4 w-full" />
              ))}
            </div>
          </aside>

          {/* Main Content Skeleton */}
          <main className="flex-1">
            {/* Sort and View Options */}
            <div className="flex justify-between items-center mb-6">
              <Skeleton className="h-8 w-32" />
              <Skeleton className="h-8 w-32" />
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {[...Array(12)].map((_, i) => (
                <div key={i} className="border rounded-lg p-4">
                  <Skeleton className="h-48 w-full rounded-md mb-4" />
                  <Skeleton className="h-4 w-2/3 mb-2" />
                  <Skeleton className="h-4 w-1/2 mb-2" />
                  <Skeleton className="h-4 w-1/4" />
                </div>
              ))}
            </div>

            {/* Pagination Skeleton */}
            <div className="mt-8 flex justify-center">
              <div className="flex space-x-2">
                {[...Array(5)].map((_, i) => (
                  <Skeleton key={i} className="h-8 w-8" />
                ))}
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}