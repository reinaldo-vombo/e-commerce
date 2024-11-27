import SheetModal from "@/components/shared/SheetModal";
import { Box, ChevronRight, CreditCard, User } from "lucide-react";
import MobileUserTa from "./MobileUserTab";
import MobileOrders from "./MobileOrders";
import Paymente from "@/components/layout/Payment";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";

const MODAL_VIEWS = [
   { id: 1, label: "Encomendas", icon: <Box width={20} />, component: <MobileOrders /> },
   { id: 2, label: "Conta", icon: < User width={20} />, component: <MobileUserTa /> },
   { id: 3, label: "Pagamentos", icon: < CreditCard width={20} />, component: <Paymente /> },
]

const MobileAccounte = () => {
   return (
      <div className="space-x-5">
         {MODAL_VIEWS.map((view) => (
            <div key={view.id}>
               <SheetModal trigger={
                  <div className="flex items-center gap-4">
                     {view.icon}
                     <p className="text-sm text-gray-500">{view.label}</p>
                     <ChevronRight className="ml-auto" width={20} />
                  </div>}
                  side="right"
                  className="w-full"
                  triggerClass="w-full p-3"
               >
                  <ScrollArea className="h-[800px]">
                     {view.component}
                  </ScrollArea>
               </SheetModal>
               <Separator />
            </div>
         ))}
      </div>
   )
}

export default MobileAccounte;
