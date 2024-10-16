"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import StarRating from "../StarRating"

const Feedbacks = () => {
   const [overallRating, setOverallRating] = useState(0)
   const [productQuality, setProductQuality] = useState(0)
   const [customerService, setCustomerService] = useState(0)
   const [deliveryExperience, setDeliveryExperience] = useState(0)
   const [comment, setComment] = useState("")
   const [submitted, setSubmitted] = useState(false)

   const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault()
      // Here you would typically send the data to your server
      console.log({ overallRating, productQuality, customerService, deliveryExperience, comment })
      setSubmitted(true)
   }

   if (submitted) {
      return (
         <Card className="w-full max-w-2xl mx-auto">
            <CardHeader>
               <CardTitle>Thank You for Your Feedback!</CardTitle>
               <CardDescription>We appreciate your time and input. Your feedback helps us improve our services.</CardDescription>
            </CardHeader>
         </Card>
      )
   }

   return (
      <section className="padding">
         <Card className="container mt-16 w-full max-w-2xl mx-auto">
            <CardHeader>
               <CardTitle>Ecommerce Feedback</CardTitle>
               <CardDescription>We value your opinion. Please share your thoughts about your recent shopping experience.</CardDescription>
            </CardHeader>
            <form onSubmit={handleSubmit}>
               <CardContent className="space-y-6">
                  <div className="space-y-2">
                     <Label htmlFor="overall">Overall Experience</Label>
                     <StarRating rating={overallRating} setRating={setOverallRating} name="overall" />
                  </div>
                  <div className="space-y-2">
                     <Label htmlFor="product-quality">Product Quality</Label>
                     <StarRating rating={productQuality} setRating={setProductQuality} name="product-quality" />
                  </div>
                  <div className="space-y-2">
                     <Label htmlFor="customer-service">Customer Service</Label>
                     <StarRating rating={customerService} setRating={setCustomerService} name="customer-service" />
                  </div>
                  <div className="space-y-2">
                     <Label htmlFor="delivery">Delivery Experience</Label>
                     <StarRating rating={deliveryExperience} setRating={setDeliveryExperience} name="delivery" />
                  </div>
                  <div className="space-y-2">
                     <Label htmlFor="comment">Additional Comments</Label>
                     <Textarea
                        id="comment"
                        placeholder="Please share any additional feedback you have about your experience."
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                     />
                  </div>
               </CardContent>
               <CardFooter>
                  <Button type="submit" className="w-full">Submit Feedback</Button>
               </CardFooter>
            </form>
         </Card>
      </section>
   )
}
export default Feedbacks;