
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import PaymentMethod from "@/components/PaymentMethod"

export default function CheckoutPage() {
   return (
      <section className="padding">
         <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-8">Checkout</h1>
            <div className="grid gap-8 lg:grid-cols-2">
               <div>
                  <Card>
                     <CardHeader>
                        <CardTitle>Informações De Envio</CardTitle>
                        <CardDescription>Insira Seus Detalhes De Envio</CardDescription>
                     </CardHeader>
                     <CardContent className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                           <div className="space-y-2">
                              <Label htmlFor="first-name">Primero Nome</Label>
                              <Input id="first-name" placeholder="John" />
                           </div>
                           <div className="space-y-2">
                              <Label htmlFor="last-name">Ùltimo Nome</Label>
                              <Input id="last-name" placeholder="Doe" />
                           </div>
                        </div>
                        <div className="space-y-2">
                           <Label htmlFor="address">Endereço</Label>
                           <Input id="address" placeholder="123 Main St" />
                        </div>
                        <div className="grid grid-cols-3 gap-4">
                           <div className="space-y-2">
                              <Label htmlFor="city">Cidade</Label>
                              <Input id="city" placeholder="New York" />
                           </div>
                           <div className="space-y-2">
                              <Label htmlFor="state">Stado</Label>
                              <Select>
                                 <SelectTrigger id="state">
                                    <SelectValue placeholder="Select" />
                                 </SelectTrigger>
                                 <SelectContent>
                                    <SelectItem value="ny">New York</SelectItem>
                                    <SelectItem value="ca">California</SelectItem>
                                    <SelectItem value="tx">Texas</SelectItem>
                                 </SelectContent>
                              </Select>
                           </div>
                           <div className="space-y-2">
                              <Label htmlFor="zip">ZIP</Label>
                              <Input id="zip" placeholder="10001" />
                           </div>
                        </div>
                     </CardContent>
                  </Card>
                  <PaymentMethod />
               </div>
               <div>
                  <Card>
                     <CardHeader>
                        <CardTitle>Resumo do pedido</CardTitle>
                        <CardDescription>Revise os detalhes do seu pedido</CardDescription>
                     </CardHeader>
                     <CardContent className="space-y-4">
                        <div className="flex justify-between">
                           <span>Subtotal</span>
                           <span>$99.99</span>
                        </div>
                        <div className="flex justify-between">
                           <span>Envio</span>
                           <span>$9.99</span>
                        </div>
                        <div className="flex justify-between">
                           <span>Imposto</span>
                           <span>$10.00</span>
                        </div>
                        <Separator />
                        <div className="flex justify-between font-bold">
                           <span>Total</span>
                           <span>$119.98</span>
                        </div>
                     </CardContent>
                     <CardFooter>
                        <Button className="w-full">Fazer Pedido</Button>
                     </CardFooter>
                  </Card>
                  <Card className="mt-8">
                     <CardHeader>
                        <CardTitle>Método de envio</CardTitle>
                        <CardDescription>Escolha a opção de envio de sua preferência</CardDescription>
                     </CardHeader>
                     <CardContent>
                        <RadioGroup defaultValue="standard">
                           <div className="flex items-center justify-between">
                              <div className="flex items-center space-x-2">
                                 <RadioGroupItem value="standard" id="standard" />
                                 <Label htmlFor="standard">Envio padrão</Label>
                              </div>
                              <span>$9.99</span>
                           </div>
                           <div className="flex items-center justify-between">
                              <div className="flex items-center space-x-2">
                                 <RadioGroupItem value="express" id="express" />
                                 <Label htmlFor="express">Envio Expresso</Label>
                              </div>
                              <span>$19.99</span>
                           </div>
                        </RadioGroup>
                     </CardContent>
                  </Card>
               </div>
            </div>
         </div>
      </section>
   )
}