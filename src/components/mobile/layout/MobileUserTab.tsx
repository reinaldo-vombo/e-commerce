
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
import Image from "next/image"
import UpdateUser from "../form/UpdateUser"

const MobileUserTa = () => {
   return (
      <Tabs defaultValue="account" className="w-full">
         <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="account">Conta</TabsTrigger>
            <TabsTrigger value="password">Palavra-passe</TabsTrigger>
         </TabsList>
         <TabsContent value="account">
            <Card>
               <CardHeader>
                  <CardTitle>Conta</CardTitle>
                  <CardDescription>
                     Faça alterações em sua conta aqui. Clique em salvar quando terminar.
                  </CardDescription>
               </CardHeader>
               <CardContent className="space-y-2">
                  <UpdateUser />
               </CardContent>
               <CardFooter>
                  <Button className="w-full">Save changes</Button>
               </CardFooter>
            </Card>
         </TabsContent>
         <TabsContent value="password">
            <Card>
               <CardHeader>
                  <CardTitle>Password</CardTitle>
                  <CardDescription>
                     Faça alterações da sua palavra-passe aqui. assim que salvar tera sessão encerada.
                  </CardDescription>
               </CardHeader>
               <CardContent className="space-y-2">
                  <div className="space-y-1">
                     <Label htmlFor="current">Current password</Label>
                     <Input id="current" type="password" />
                  </div>
                  <div className="space-y-1">
                     <Label htmlFor="new">New password</Label>
                     <Input id="new" type="password" />
                  </div>
               </CardContent>
               <CardFooter>
                  <Button>Save password</Button>
               </CardFooter>
            </Card>
         </TabsContent>
      </Tabs>
   )
}
export default MobileUserTa;
