
import BlogManagement from '@/components/dashboard/layout/Blog';

export default function BlogManagementPage() {
   const posts = [
      {
         id: 1,
         title: "10 Must-Have Products for Summer",
         excerpt: "Get ready for the sunny season with our top picks...",
         content: "Summer is just around the corner, and we've curated a list of essential products to make your season unforgettable...",
         author: "Jane Doe",
         publishDate: "2023-06-15",
         status: "Publicado"
      },
      {
         id: 2,
         title: "The Future of E-commerce: Trends to Watch",
         excerpt: "Stay ahead of the curve with these emerging trends...",
         content: "The e-commerce landscape is constantly evolving. In this post, we explore the latest trends that are shaping the future of online retail...",
         author: "John Smith",
         publishDate: "2023-07-01",
         status: "Não Publicado"
      },
   ]
   return <BlogManagement data={posts} />
}
