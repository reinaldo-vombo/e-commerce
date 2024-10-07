'use client'
import { Pencil, Trash2, PlusCircle, } from 'lucide-react'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

import Modal from '@/components/shared/Modal'
import { Badge } from '@/components/ui/badge'
import CreateBlog from '../forms/CreateBlog'
import AlertModal from '@/components/shared/AlertModal'
import UpdateBlog from '../forms/UpdateBlog'

type BlogPost = {
   data: {
      id: number
      title: string
      excerpt: string
      content: string
      author: string
      publishDate: string
      status: string
   }[]
}


export default function BlogManagement({ data }: BlogPost) {
   return (
      <section className="">
         <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold">Gerenciamento de blogs</h1>
            <Modal
               btn={<div className='flex items-center'><PlusCircle className="mr-2 h-4 w-4" /> Novo post</div>}
               title='Cria blog'
               className='bg-black rounded-lg text-white p-3'
            >
               <CreateBlog />
            </Modal>
         </div>

         <Table>
            <TableHeader>
               <TableRow>
                  <TableHead>Title</TableHead>
                  <TableHead>Author</TableHead>
                  <TableHead>Publish Date</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
               </TableRow>
            </TableHeader>
            <TableBody>
               {data && data.length > 0 ? data.map((post) => (
                  <TableRow key={post.id}>
                     <TableCell className="font-medium">{post.title}</TableCell>
                     <TableCell>{post.author}</TableCell>
                     <TableCell>{post.publishDate}</TableCell>
                     <TableCell>
                        <Badge className={`${post.status === 'Publicado' ? 'bg-green-500' : 'bg-red-500'}`}>{post.status}</Badge>
                     </TableCell>
                     <TableCell className="text-right">
                        <Modal btn={<Pencil className="mr-2 h-4 w-4" />} className='p-2' title='Editar blog'>
                           <UpdateBlog />
                        </Modal>
                        <AlertModal trigger={<Trash2 className="h-4 w-4" />} label='trash icon button' onSubmit={() => { }} />
                     </TableCell>
                  </TableRow>
               )) : (
                  <div className='text-center'>
                     <h2>Ainda não foi publicado nenum blog</h2>
                  </div>
               )}
            </TableBody>
         </Table>
      </section>
   )
}