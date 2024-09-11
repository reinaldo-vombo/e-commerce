'use client'
import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

const PaymentMethod = () => {
   const [paymentMethod, setPaymentMethod] = useState("credit")
   return (
      <Card className="mt-8">
         <CardHeader>
            <CardTitle>Payment Method</CardTitle>
            <CardDescription>Select your preferred payment method</CardDescription>
         </CardHeader>
         <CardContent>
            <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
               <div className="flex items-center space-x-2">
                  <RadioGroupItem value="credit" id="credit" />
                  <Label htmlFor="credit">Credit Card</Label>
               </div>
               <div className="flex items-center space-x-2">
                  <RadioGroupItem value="paypal" id="paypal" />
                  <Label htmlFor="paypal">PayPal</Label>
               </div>
            </RadioGroup>
            {paymentMethod === "credit" && (
               <div className="mt-4 space-y-4">
                  <div className="space-y-2">
                     <Label htmlFor="card-number">Card Number</Label>
                     <Input id="card-number" placeholder="1234 5678 9012 3456" />
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                     <div className="space-y-2">
                        <Label htmlFor="expiry-month">Expiry Month</Label>
                        <Select>
                           <SelectTrigger id="expiry-month">
                              <SelectValue placeholder="Month" />
                           </SelectTrigger>
                           <SelectContent>
                              {Array.from({ length: 12 }, (_, i) => (
                                 <SelectItem key={i} value={`${i + 1}`.padStart(2, "0")}>
                                    {`${i + 1}`.padStart(2, "0")}
                                 </SelectItem>
                              ))}
                           </SelectContent>
                        </Select>
                     </div>
                     <div className="space-y-2">
                        <Label htmlFor="expiry-year">Expiry Year</Label>
                        <Select>
                           <SelectTrigger id="expiry-year">
                              <SelectValue placeholder="Year" />
                           </SelectTrigger>
                           <SelectContent>
                              {Array.from({ length: 10 }, (_, i) => (
                                 <SelectItem key={i} value={`${new Date().getFullYear() + i}`}>
                                    {new Date().getFullYear() + i}
                                 </SelectItem>
                              ))}
                           </SelectContent>
                        </Select>
                     </div>
                     <div className="space-y-2">
                        <Label htmlFor="cvv">CVV</Label>
                        <Input id="cvv" placeholder="123" />
                     </div>
                  </div>
               </div>
            )}
         </CardContent>
      </Card>
   )
}

export default PaymentMethod
