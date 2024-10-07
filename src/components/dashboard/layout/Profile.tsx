'use client'

import { useState } from 'react'
import { LogOut } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import UpdatePersonalInfo from '../forms/UpdatePersonalInfo'
import UpdateSecurityInfo from '../forms/UpdateSecurityInfo'

export default function AdminProfile() {
   const [personalInfo, setPersonalInfo] = useState({
      name: "Jane Doe",
      email: "jane.doe@example.com",
      phone: "+1 (555) 123-4567",
      address: "123 Admin St, Dashboard City, 12345",
   })

   const [notifications, setNotifications] = useState({
      email: true,
      push: false,
      sms: true,
   })

   const handlePersonalInfoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setPersonalInfo({ ...personalInfo, [e.target.name]: e.target.value })
   }

   const handleNotificationChange = (type: keyof typeof notifications) => {
      setNotifications({ ...notifications, [type]: !notifications[type] })
   }

   return (
      <div className="container mx-auto p-6">
         <h1 className="text-3xl font-bold mb-6">Admin Profile</h1>

         <div className="grid gap-6 md:grid-cols-2">
            <Card>
               <CardHeader>
                  <CardTitle>Personal Information</CardTitle>
                  <CardDescription>Update your personal details here.</CardDescription>
               </CardHeader>
               <CardContent>
                  <UpdatePersonalInfo />
               </CardContent>
            </Card>

            <div className="space-y-6">
               <Card>
                  <CardHeader>
                     <CardTitle>Account Statistics</CardTitle>
                     <CardDescription>Key metrics for your admin account.</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                     <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">Total Orders Processed</span>
                        <span className="text-2xl font-bold">1,234</span>
                     </div>
                     <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">Active Products</span>
                        <span className="text-2xl font-bold">567</span>
                     </div>
                     <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">Customer Support Tickets</span>
                        <span className="text-2xl font-bold">89</span>
                     </div>
                     <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">Average Response Time</span>
                        <span className="text-2xl font-bold">2.5h</span>
                     </div>
                  </CardContent>
               </Card>

               <Card>
                  <CardHeader>
                     <CardTitle>Account Settings</CardTitle>
                     <CardDescription>Manage your account preferences.</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                     <Tabs defaultValue="notifications">
                        <TabsList className="grid w-full grid-cols-2">
                           <TabsTrigger value="notifications">Notifications</TabsTrigger>
                           <TabsTrigger value="security">Security</TabsTrigger>
                        </TabsList>
                        <TabsContent value="notifications" className="space-y-4">
                           <div className="flex items-center justify-between">
                              <div className="space-y-0.5">
                                 <Label htmlFor="email-notifications">Email Notifications</Label>
                                 <p className="text-sm text-muted-foreground">Receive email updates about your account activity.</p>
                              </div>
                              <Switch
                                 id="email-notifications"
                                 checked={notifications.email}
                                 onCheckedChange={() => handleNotificationChange('email')}
                              />
                           </div>
                           <Separator />
                           <div className="flex items-center justify-between">
                              <div className="space-y-0.5">
                                 <Label htmlFor="push-notifications">Push Notifications</Label>
                                 <p className="text-sm text-muted-foreground">Receive push notifications on your devices.</p>
                              </div>
                              <Switch
                                 id="push-notifications"
                                 checked={notifications.push}
                                 onCheckedChange={() => handleNotificationChange('push')}
                              />
                           </div>
                           <Separator />
                           <div className="flex items-center justify-between">
                              <div className="space-y-0.5">
                                 <Label htmlFor="sms-notifications">SMS Notifications</Label>
                                 <p className="text-sm text-muted-foreground">Receive text messages for important updates.</p>
                              </div>
                              <Switch
                                 id="sms-notifications"
                                 checked={notifications.sms}
                                 onCheckedChange={() => handleNotificationChange('sms')}
                              />
                           </div>
                        </TabsContent>
                        <TabsContent value="security" className="space-y-4">
                           <UpdateSecurityInfo />
                        </TabsContent>
                     </Tabs>
                  </CardContent>
               </Card>
            </div>
         </div>

         <div className="mt-6 flex justify-end">
            <Button variant="destructive">
               <LogOut className="mr-2 h-4 w-4" /> Sair
            </Button>
         </div>
      </div>
   )
}