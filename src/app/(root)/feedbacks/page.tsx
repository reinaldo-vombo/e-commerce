
import Feedbacks from "@/components/layout/Feeback"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"

export default function FeedbackPage() {
   return (
      <Feedbacks />
      // <Card className="w-full max-w-2xl mx-auto">
      //    <CardHeader>
      //       <CardTitle>Ecommerce Feedback</CardTitle>
      //       <CardDescription>We value your opinion. Please share your thoughts about your recent shopping experience.</CardDescription>
      //    </CardHeader>
      //    <form onSubmit={handleSubmit}>
      //       <CardContent className="space-y-6">
      //          <div className="space-y-2">
      //             <Label htmlFor="overall">Overall Experience</Label>
      //             <StarRating rating={overallRating} setRating={setOverallRating} name="overall" />
      //          </div>
      //          <div className="space-y-2">
      //             <Label htmlFor="product-quality">Product Quality</Label>
      //             <StarRating rating={productQuality} setRating={setProductQuality} name="product-quality" />
      //          </div>
      //          <div className="space-y-2">
      //             <Label htmlFor="customer-service">Customer Service</Label>
      //             <StarRating rating={customerService} setRating={setCustomerService} name="customer-service" />
      //          </div>
      //          <div className="space-y-2">
      //             <Label htmlFor="delivery">Delivery Experience</Label>
      //             <StarRating rating={deliveryExperience} setRating={setDeliveryExperience} name="delivery" />
      //          </div>
      //          <div className="space-y-2">
      //             <Label htmlFor="comment">Additional Comments</Label>
      //             <Textarea
      //                id="comment"
      //                placeholder="Please share any additional feedback you have about your experience."
      //                value={comment}
      //                onChange={(e) => setComment(e.target.value)}
      //             />
      //          </div>
      //       </CardContent>
      //       <CardFooter>
      //          <Button type="submit" className="w-full">Submit Feedback</Button>
      //       </CardFooter>
      //    </form>
      // </Card>
   )
}
