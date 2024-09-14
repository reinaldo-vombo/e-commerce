import { Dasboard } from "@/components/dashboard/Dashboard";
import { LayoutProp } from "@/types";

export default function CMSLayout({ children }: LayoutProp) {
   return (
      <Dasboard>{children}</Dasboard>
   )
}