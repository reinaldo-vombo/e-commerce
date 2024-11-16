
import SheetModal from "@/components/shared/SheetModal"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
   Card,
   CardContent,
   CardDescription,
   CardFooter,
   CardHeader,
   CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
   Tabs,
   TabsContent,
   TabsList,
   TabsTrigger,
} from "@/components/ui/tabs"
import { PRODUCTS } from "@/constant/site-content"
import Image from "next/image"

const MobileOrders = () => {
   return (
      <Tabs defaultValue="pending" className="w-full">
         <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="pending">Pendente</TabsTrigger>
            <TabsTrigger value="completed">Completos</TabsTrigger>
         </TabsList>
         <TabsContent value="pending">
            <Card>
               <CardHeader>
                  <CardTitle>Compras pendentes</CardTitle>
                  <CardDescription>
                     Listas de compras pendentes
                  </CardDescription>
               </CardHeader>
               <CardContent className="space-y-2">
                  {PRODUCTS.map((item) => (
                     <Card key={item.id}>
                        <CardContent className="flex items-center justify-between p-1">
                           <Image src={item.image} className="rounded-md" width={60} height={60} alt={item.title} />
                           <div>
                              <div className="flex items-center flex-col">
                                 <h2 className="text-base grid">
                                    {item.title}
                                    <span>Tamanho:</span>
                                 </h2>
                                 <div className="flex items-center gap-4">
                                    <SheetModal
                                       trigger={<Badge className="bg-black">Comentar</Badge>}
                                       side="bottom"
                                    >comment</SheetModal>
                                    <Badge className="bg-green-500">Concluido</Badge>
                                 </div>
                              </div>
                              <div></div>
                           </div>
                        </CardContent>
                     </Card>
                  ))}
               </CardContent>
               <CardFooter>

               </CardFooter>
            </Card>
         </TabsContent>
         <TabsContent value="completed">
            <Card>
               <CardHeader>
                  <CardTitle>Comprar Concluidas</CardTitle>
                  <CardDescription>
                     Compras pagas e recebidas
                  </CardDescription>
               </CardHeader>
               <CardContent className="space-y-2">
                  {PRODUCTS.map((item) => (
                     <Card key={item.id}>
                        <CardContent className="flex items-center justify-between p-1">
                           <Image src={item.image} className="rounded-md" width={60} height={60} alt={item.title} />
                           <div>
                              <div className="flex items-center flex-col">
                                 <h2 className="text-base grid">
                                    {item.title}
                                    <span>Tamanho:</span>
                                 </h2>
                                 <div className="flex items-center gap-4">
                                    <SheetModal
                                       trigger={<Badge className="bg-black">Ver</Badge>}
                                       side="bottom"
                                    >comment</SheetModal>
                                    <Badge className="bg-green-500">Concluido</Badge>
                                 </div>
                              </div>
                              <div></div>
                           </div>
                        </CardContent>
                     </Card>
                  ))}
               </CardContent>
               <CardFooter>

               </CardFooter>
            </Card>
         </TabsContent>
      </Tabs>
   )
}

export default MobileOrders;
