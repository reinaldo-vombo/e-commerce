import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Star, Mail, Phone, MapPin, Download } from "lucide-react";
import { Button } from '@/components/ui/button';


export default function ProfilePage() {
   return (
      <section className="padding">
         <div className=" container mt-16 flex flex-col md:flex-row gap-6">
            <aside className="w-full md:w-1/3">
               <Card>
                  <CardHeader>
                     <CardTitle>Personal Information</CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-col items-center">
                     <Avatar className="w-32 h-32 mb-4">
                        <AvatarImage src="/placeholder-user.jpg" alt="Customer" />
                        <AvatarFallback>CN</AvatarFallback>
                     </Avatar>
                     <h2 className="text-2xl font-bold">John Doe</h2>
                     <p className="text-muted-foreground">Customer since 2021</p>
                     <div className="mt-4 space-y-2 w-full">
                        <div className="flex items-center">
                           <Mail className="mr-2 h-4 w-4" />
                           <span>john.doe@example.com</span>
                        </div>
                        <div className="flex items-center">
                           <Phone className="mr-2 h-4 w-4" />
                           <span>+1 (555) 123-4567</span>
                        </div>
                        <div className="flex items-center">
                           <MapPin className="mr-2 h-4 w-4" />
                           <span>123 Main St, Anytown, USA</span>
                        </div>
                     </div>
                  </CardContent>
                  <CardFooter>
                     <Button className="w-full">Edit Profile</Button>
                  </CardFooter>
               </Card>
            </aside>
            <main className="w-full md:w-2/3">
               <Tabs defaultValue="invoices">
                  <TabsList className="grid w-full grid-cols-2">
                     <TabsTrigger value="invoices">Invoices</TabsTrigger>
                     <TabsTrigger value="feedback">Feedback</TabsTrigger>
                  </TabsList>
                  <TabsContent value="invoices">
                     <Card>
                        <CardHeader>
                           <CardTitle>Invoice History</CardTitle>
                           <CardDescription>View and download your past invoices.</CardDescription>
                        </CardHeader>
                        <CardContent>
                           <Table>
                              <TableHeader>
                                 <TableRow>
                                    <TableHead>Invoice #</TableHead>
                                    <TableHead>Date</TableHead>
                                    <TableHead>Amount</TableHead>
                                    <TableHead>Status</TableHead>
                                    <TableHead>Action</TableHead>
                                 </TableRow>
                              </TableHeader>
                              <TableBody>
                                 <TableRow>
                                    <TableCell>INV-001</TableCell>
                                    <TableCell>2023-05-01</TableCell>
                                    <TableCell>$250.00</TableCell>
                                    <TableCell>Paid</TableCell>
                                    <TableCell>
                                       <Button variant="ghost" size="sm">
                                          <Download className="mr-2 h-4 w-4" />
                                          Download
                                       </Button>
                                    </TableCell>
                                 </TableRow>
                                 <TableRow>
                                    <TableCell>INV-002</TableCell>
                                    <TableCell>2023-06-15</TableCell>
                                    <TableCell>$180.00</TableCell>
                                    <TableCell>Paid</TableCell>
                                    <TableCell>
                                       <Button variant="ghost" size="sm">
                                          <Download className="mr-2 h-4 w-4" />
                                          Download
                                       </Button>
                                    </TableCell>
                                 </TableRow>
                                 <TableRow>
                                    <TableCell>INV-003</TableCell>
                                    <TableCell>2023-07-30</TableCell>
                                    <TableCell>$320.00</TableCell>
                                    <TableCell>Pending</TableCell>
                                    <TableCell>
                                       <Button variant="ghost" size="sm" disabled>
                                          <Download className="mr-2 h-4 w-4" />
                                          Download
                                       </Button>
                                    </TableCell>
                                 </TableRow>
                              </TableBody>
                           </Table>
                        </CardContent>
                     </Card>
                  </TabsContent>
                  <TabsContent value="feedback">
                     <Card>
                        <CardHeader>
                           <CardTitle>Customer Feedback</CardTitle>
                           <CardDescription>View your past feedback and submit new feedback.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6">
                           <div>
                              <h3 className="text-lg font-semibold mb-2">Previous Feedback</h3>
                              <div className="space-y-4">
                                 <div className="bg-muted p-4 rounded-lg">
                                    <div className="flex items-center mb-2">
                                       <div className="flex items-center">
                                          {[1, 2, 3, 4, 5].map((star) => (
                                             <Star
                                                key={star}
                                                className={`w-4 h-4 ${star <= 4 ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                                             />
                                          ))}
                                       </div>
                                       <span className="ml-2 text-sm text-muted-foreground">2023-04-15</span>
                                    </div>
                                    <p className="text-sm">Great products and excellent customer service! Will definitely shop here again.</p>
                                 </div>
                                 <div className="bg-muted p-4 rounded-lg">
                                    <div className="flex items-center mb-2">
                                       <div className="flex items-center">
                                          {[1, 2, 3, 4, 5].map((star) => (
                                             <Star
                                                key={star}
                                                className={`w-4 h-4 ${star <= 5 ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                                             />
                                          ))}
                                       </div>
                                       <span className="ml-2 text-sm text-muted-foreground">2023-02-28</span>
                                    </div>
                                    <p className="text-sm">The delivery was super fast, and the product quality exceeded my expectations!</p>
                                 </div>
                              </div>
                           </div>
                        </CardContent>
                     </Card>
                  </TabsContent>
               </Tabs>
            </main>
         </div>
      </section>
   )
}
