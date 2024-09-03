
import { Input } from '../ui/input'

const CartForm = () => {

   return (
      <div>
         <form action="">
            <div className="">
               <label htmlFor="card">Número do cartão</label>
               <Input name="card" id="card" className="border border-slate-400 border-t-0 border-x-0 rounded-none border-b-2 bg-transparent" />
            </div>
            <div className="flex items-center gap-3 mt-10">
               <div className="w-[80%]">
                  <label htmlFor="card">Data de validade</label>
                  <Input name="expire" type='date' id="card" className="border border-slate-400 border-t-0 border-x-0 rounded-none border-b-2 bg-transparent" />
               </div>
               <div className="w-[20%]">
                  <label htmlFor="card">CW</label>
                  <Input name="expire" id="card" className="border border-slate-400 border-t-0 border-x-0 rounded-none border-b-2 bg-transparent" />
               </div>
            </div>
         </form>
      </div>
   )
}

export default CartForm
