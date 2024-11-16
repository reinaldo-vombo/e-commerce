'use client'

import { useState } from 'react'
import { CreditCard, Trash2 } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

type CreditCardType = {
   id: number
   cardNumber: string
   cardHolder: string
   expirationMonth: string
   expirationYear: string
   cvv: string
}

const Paymente = () => {
   const [cards, setCards] = useState<CreditCardType[]>([])
   const [editingCard, setEditingCard] = useState<CreditCardType | null>(null)
   const currentYear = new Date().getFullYear()
   const years = Array.from({ length: 10 }, (_, i) => (currentYear + i).toString())

   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      const formData = new FormData(e.currentTarget)
      const newCard: CreditCardType = {
         id: Date.now(),
         cardNumber: formData.get('cardNumber') as string,
         cardHolder: formData.get('cardHolder') as string,
         expirationMonth: formData.get('expirationMonth') as string,
         expirationYear: formData.get('expirationYear') as string,
         cvv: formData.get('cvv') as string,
      }

      if (editingCard) {
         setCards(cards.map(card => card.id === editingCard.id ? newCard : card))
         setEditingCard(null)
      } else {
         setCards([...cards, newCard])
      }

      e.currentTarget.reset()
   }

   const handleEdit = (card: CreditCardType) => {
      setEditingCard(card)
   }

   const handleDelete = (id: number) => {
      setCards(cards.filter(card => card.id !== id))
   }

   return (
      <div className="container mx-auto p-4">
         <h1 className="text-2xl font-bold mb-4">Payment Information</h1>
         <div className="grid gap-6 md:grid-cols-2">
            <Card>
               <CardHeader>
                  <CardTitle>{editingCard ? 'Edit Credit Card' : 'Add New Credit Card'}</CardTitle>
                  <CardDescription>Enter your credit card details below</CardDescription>
               </CardHeader>
               <form onSubmit={handleSubmit}>
                  <CardContent className="space-y-4">
                     <div className="space-y-2">
                        <Label htmlFor="cardNumber">Card Number</Label>
                        <Input
                           id="cardNumber"
                           name="cardNumber"
                           placeholder="1234 5678 9012 3456"
                           required
                           defaultValue={editingCard?.cardNumber}
                        />
                     </div>
                     <div className="space-y-2">
                        <Label htmlFor="cardHolder">Card Holder</Label>
                        <Input
                           id="cardHolder"
                           name="cardHolder"
                           placeholder="John Doe"
                           required
                           defaultValue={editingCard?.cardHolder}
                        />
                     </div>
                     <div className="grid grid-cols-3 gap-4">
                        <div className="space-y-2">
                           <Label htmlFor="expirationMonth">Expiration Month</Label>
                           <Select name="expirationMonth" defaultValue={editingCard?.expirationMonth || ''}>
                              <SelectTrigger id="expirationMonth">
                                 <SelectValue placeholder="Month" />
                              </SelectTrigger>
                              <SelectContent>
                                 {Array.from({ length: 12 }, (_, i) => {
                                    const month = (i + 1).toString().padStart(2, '0')
                                    return <SelectItem key={month} value={month}>{month}</SelectItem>
                                 })}
                              </SelectContent>
                           </Select>
                        </div>
                        <div className="space-y-2">
                           <Label htmlFor="expirationYear">Expiration Year</Label>
                           <Select name="expirationYear" defaultValue={editingCard?.expirationYear || ''}>
                              <SelectTrigger id="expirationYear">
                                 <SelectValue placeholder="Year" />
                              </SelectTrigger>
                              <SelectContent>
                                 {years.map(year => (
                                    <SelectItem key={year} value={year}>{year}</SelectItem>
                                 ))}
                              </SelectContent>
                           </Select>
                        </div>
                        <div className="space-y-2">
                           <Label htmlFor="cvv">CVV</Label>
                           <Input
                              id="cvv"
                              name="cvv"
                              placeholder="123"
                              required
                              defaultValue={editingCard?.cvv}
                           />
                        </div>
                     </div>
                  </CardContent>
                  <CardFooter>
                     <Button type="submit" className="w-full">
                        {editingCard ? 'Update Card' : 'Add Card'}
                     </Button>
                  </CardFooter>
               </form>
            </Card>
            <Card>
               <CardHeader>
                  <CardTitle>Your Credit Cards</CardTitle>
                  <CardDescription>Manage your saved credit cards</CardDescription>
               </CardHeader>
               <CardContent>
                  {cards.length === 0 ? (
                     <p className="text-center text-gray-500">No credit cards added yet.</p>
                  ) : (
                     <ul className="space-y-4">
                        {cards.map(card => (
                           <li key={card.id} className="flex items-center justify-between p-4 border rounded-lg">
                              <div className="flex items-center space-x-4">
                                 <CreditCard className="text-gray-500" />
                                 <div>
                                    <p className="font-medium">
                                       **** **** **** {card.cardNumber.slice(-4)}
                                    </p>
                                    <p className="text-sm text-gray-500">
                                       {card.cardHolder} - Expires {card.expirationMonth}/{card.expirationYear}
                                    </p>
                                 </div>
                              </div>
                              <div className="flex space-x-2">
                                 <Button variant="outline" size="sm" onClick={() => handleEdit(card)}>
                                    Edit
                                 </Button>
                                 <Button variant="destructive" size="sm" onClick={() => handleDelete(card.id)}>
                                    <Trash2 className="h-4 w-4" />
                                 </Button>
                              </div>
                           </li>
                        ))}
                     </ul>
                  )}
               </CardContent>
            </Card>
         </div>
      </div>
   )
}
export default Paymente;