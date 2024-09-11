
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
                        <CardTitle>Shipping Information</CardTitle>
                        <CardDescription>Enter your shipping details</CardDescription>
                     </CardHeader>
                     <CardContent className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                           <div className="space-y-2">
                              <Label htmlFor="first-name">First name</Label>
                              <Input id="first-name" placeholder="John" />
                           </div>
                           <div className="space-y-2">
                              <Label htmlFor="last-name">Last name</Label>
                              <Input id="last-name" placeholder="Doe" />
                           </div>
                        </div>
                        <div className="space-y-2">
                           <Label htmlFor="address">Address</Label>
                           <Input id="address" placeholder="123 Main St" />
                        </div>
                        <div className="grid grid-cols-3 gap-4">
                           <div className="space-y-2">
                              <Label htmlFor="city">City</Label>
                              <Input id="city" placeholder="New York" />
                           </div>
                           <div className="space-y-2">
                              <Label htmlFor="state">State</Label>
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
                        <CardTitle>Order Summary</CardTitle>
                        <CardDescription>Review your order details</CardDescription>
                     </CardHeader>
                     <CardContent className="space-y-4">
                        <div className="flex justify-between">
                           <span>Subtotal</span>
                           <span>$99.99</span>
                        </div>
                        <div className="flex justify-between">
                           <span>Shipping</span>
                           <span>$9.99</span>
                        </div>
                        <div className="flex justify-between">
                           <span>Tax</span>
                           <span>$10.00</span>
                        </div>
                        <Separator />
                        <div className="flex justify-between font-bold">
                           <span>Total</span>
                           <span>$119.98</span>
                        </div>
                     </CardContent>
                     <CardFooter>
                        <Button className="w-full">Place Order</Button>
                     </CardFooter>
                  </Card>
                  <Card className="mt-8">
                     <CardHeader>
                        <CardTitle>Shipping Method</CardTitle>
                        <CardDescription>Choose your preferred shipping option</CardDescription>
                     </CardHeader>
                     <CardContent>
                        <RadioGroup defaultValue="standard">
                           <div className="flex items-center justify-between">
                              <div className="flex items-center space-x-2">
                                 <RadioGroupItem value="standard" id="standard" />
                                 <Label htmlFor="standard">Standard Shipping</Label>
                              </div>
                              <span>$9.99</span>
                           </div>
                           <div className="flex items-center justify-between">
                              <div className="flex items-center space-x-2">
                                 <RadioGroupItem value="express" id="express" />
                                 <Label htmlFor="express">Express Shipping</Label>
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