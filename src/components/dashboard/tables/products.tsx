'use client'

import { useState } from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Search, SortAsc, SortDesc, Eye, Edit, Trash2, ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import SheetModal from '@/components/shared/SheetModal'
import AlertModal from '@/components/shared/AlertModal'
import Modal from '@/components/shared/Modal'
import CreateProduct from '../forms/CreateProduct'
import Link from 'next/link'

type Product = {
   id: number;
   name: string;
   image: string;
   price: number;
   status: string;
   sold: number;
   returned: number;
};

type TSort = {
   key: keyof Product | null; // Use keyof to restrict to valid keys
   direction: 'ascending' | 'descending'; // Specify the possible values
};
// Sample product data '/product/NIKE+AIR+MAX+PLUS.png'
const initialProducts = [
   { id: 1, name: 'Laptop', image: '/product/NIKE+AIR+MAX+PLUS.png', price: 999, status: 'new', sold: 50, returned: 2 },
   { id: 2, name: 'Smartphone', image: '/product/NIKE+AIR+MAX+PLUS.png', price: 699, status: 'regular', sold: 100, returned: 5 },
   { id: 3, name: 'Headphones', image: '/product/NIKE+AIR+MAX+PLUS.png', price: 199, status: 'new', sold: 30, returned: 1 },
   { id: 4, name: 'Tablet', image: '/product/NIKE+AIR+MAX+PLUS.png', price: 499, status: 'regular', sold: 75, returned: 3 },
   { id: 5, name: 'Smartwatch', image: '/product/NIKE+AIR+MAX+PLUS.png', price: 299, status: 'new', sold: 40, returned: 2 },
   { id: 6, name: 'Desltop PC', image: '/product/NIKE+AIR+MAX+PLUS.png', price: 129, status: 'regular', sold: 15, returned: 2 },
   { id: 7, name: 'Wireless Mouse', image: '/product/NIKE+AIR+MAX+PLUS.png', price: 399, status: 'new', sold: 10, returned: 0 },
   { id: 8, name: 'Keyboard', image: '/product/NIKE+AIR+MAX+PLUS.png', price: 599, status: 'regular', sold: 500, returned: 1 },
   { id: 9, name: 'Monitor', image: '/product/NIKE+AIR+MAX+PLUS.png', price: 20000, status: 'new', sold: 10, returned: 0 },
   { id: 10, name: 'Pinter', image: '/product/NIKE+AIR+MAX+PLUS.png', price: 40050, status: 'new', sold: 5, returned: 0 },
   { id: 11, name: 'Webcam', image: '/product/NIKE+AIR+MAX+PLUS.png', price: 299, status: 'new', sold: 50, returned: 2 },
   { id: 12, name: 'Smartwatch', image: '/product/NIKE+AIR+MAX+PLUS.png', price: 299, status: 'new', sold: 40, returned: 2 },
]

const ProductTable = () => {
   const [products, setProducts] = useState(initialProducts)
   const [searchTerm, setSearchTerm] = useState('')
   const [activeFilter, setActiveFilter] = useState('all')
   const [sortConfig, setSortConfig] = useState<TSort>({ key: null, direction: 'ascending' })
   const [currentPage, setCurrentPage] = useState(1)
   const itemsPerPage = 5

   const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
      setSearchTerm(event.target.value)
      setCurrentPage(1)
   }

   const handleFilter = (filter: string) => {
      setActiveFilter(filter)
   }

   const handleSort = (key: keyof Product) => {
      let direction: 'ascending' | 'descending' = 'ascending';
      if (sortConfig.key === key && sortConfig.direction === 'ascending') {
         direction = 'descending';
      }
      setSortConfig({ key, direction })
   }
   const handleDelete = (id: number) => {
      setProducts(products.filter(product => product.id !== id))

   }

   const filteredProducts = products
      .filter(product => product.name.toLowerCase().includes(searchTerm.toLowerCase()))
      .filter(product => {
         if (activeFilter === 'new') return product.status === 'new'
         if (activeFilter === 'mostSold') return product.sold >= 50
         if (activeFilter === 'returned') return product.returned > 0
         return true
      })
      .sort((a, b) => {
         if (sortConfig.key === null) return 0
         const aValue = a[sortConfig.key]
         const bValue = b[sortConfig.key]
         if (aValue < bValue) return sortConfig.direction === 'ascending' ? -1 : 1
         if (aValue > bValue) return sortConfig.direction === 'ascending' ? 1 : -1
         return 0
      })
   const pageCount = Math.ceil(filteredProducts.length / itemsPerPage)
   const paginatedProducts = filteredProducts.slice(
      (currentPage - 1) * itemsPerPage,
      currentPage * itemsPerPage
   )

   return (
      <div className="container mx-auto p-4">
         <div className="mb-4 flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="relative w-full sm:w-64">
               <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
               <Input
                  type="text"
                  placeholder="Procurar productos..."
                  value={searchTerm}
                  onChange={handleSearch}
                  className="pl-8"
               />
            </div>
            <div className="flex flex-wrap gap-2">
               <Button
                  variant={activeFilter === 'all' ? 'default' : 'outline'}
                  onClick={() => handleFilter('all')}
               >
                  Todos
               </Button>
               <Button
                  variant={activeFilter === 'new' ? 'default' : 'outline'}
                  onClick={() => handleFilter('new')}
               >
                  Novos
               </Button>
               <Button
                  variant={activeFilter === 'mostSold' ? 'default' : 'outline'}
                  onClick={() => handleFilter('mostSold')}
               >
                  Mais vendidos
               </Button>
               <Button
                  variant={activeFilter === 'returned' ? 'default' : 'outline'}
                  onClick={() => handleFilter('returned')}
               >
                  Rembolsados
               </Button>
            </div>
         </div>
         <div className="overflow-x-auto">
            <Table>
               <TableHeader>
                  <TableRow>
                     <TableHead>Image</TableHead>
                     <TableHead>
                        <button
                           className="flex items-center"
                           onClick={() => handleSort('name')}
                        >
                           Name
                           {sortConfig.key === 'name' && (
                              sortConfig.direction === 'ascending' ? <SortAsc className="ml-1 h-4 w-4" /> : <SortDesc className="ml-1 h-4 w-4" />
                           )}
                        </button>
                     </TableHead>
                     <TableHead>
                        <button
                           className="flex items-center"
                           onClick={() => handleSort('price')}
                        >
                           Price
                           {sortConfig.key === 'price' && (
                              sortConfig.direction === 'ascending' ? <SortAsc className="ml-1 h-4 w-4" /> : <SortDesc className="ml-1 h-4 w-4" />
                           )}
                        </button>
                     </TableHead>
                     <TableHead>
                        <button
                           className="flex items-center"
                           onClick={() => handleSort('sold')}
                        >
                           Sold
                           {sortConfig.key === 'sold' && (
                              sortConfig.direction === 'ascending' ? <SortAsc className="ml-1 h-4 w-4" /> : <SortDesc className="ml-1 h-4 w-4" />
                           )}
                        </button>
                     </TableHead>
                     <TableHead>
                        <button
                           className="flex items-center"
                           onClick={() => handleSort('returned')}
                        >
                           Returned
                           {sortConfig.key === 'returned' && (
                              sortConfig.direction === 'ascending' ? <SortAsc className="ml-1 h-4 w-4" /> : <SortDesc className="ml-1 h-4 w-4" />
                           )}
                        </button>
                     </TableHead>
                     <TableHead>Actions</TableHead>
                  </TableRow>
               </TableHeader>
               <TableBody>
                  {paginatedProducts.map((product) => (
                     <TableRow key={product.id}>
                        <TableCell>
                           <Image src={product.image} width={50} height={50} alt={product.name} className="object-cover rounded-md" />
                        </TableCell>
                        <TableCell>{product.name}</TableCell>
                        <TableCell>${product.price}</TableCell>
                        <TableCell>{product.sold}</TableCell>
                        <TableCell>{product.returned}</TableCell>
                        <TableCell>
                           <div className="flex space-x-2">
                              <Link href='update-product' className='border border-slate-200 rounded-lg' aria-label={`Editar ${product.name}`}><Edit className="h-4 w-4" /></Link>

                              <SheetModal label={`Edit ${product.name}`} trigger={<Eye className="h-4 w-4" />} side='left'>
                                 hello
                              </SheetModal>
                              <AlertModal className='border border-slate-200 rounded-lg' onSubmit={() => handleDelete(product.id)} trigger={<Trash2 className="h-4 w-4" />} label={`Delete ${product.name}`} />
                           </div>
                        </TableCell>
                     </TableRow>
                  ))}
               </TableBody>
            </Table>
         </div>
         <div className="mt-4 flex justify-between items-center">
            <div>
               Showing {Math.min((currentPage - 1) * itemsPerPage + 1, filteredProducts.length)} to {Math.min(currentPage * itemsPerPage, filteredProducts.length)} of {filteredProducts.length} entries
            </div>
            <div className="flex items-center space-x-2">
               <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                  aria-label="Previous page"
               >
                  <ChevronLeft className="h-4 w-4" />
               </Button>
               <span>{currentPage} of {pageCount}</span>
               <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setCurrentPage(prev => Math.min(prev + 1, pageCount))}
                  disabled={currentPage === pageCount}
                  aria-label="Next page"
               >
                  <ChevronRight className="h-4 w-4" />
               </Button>
            </div>
         </div>
      </div>
   )
}
export default ProductTable