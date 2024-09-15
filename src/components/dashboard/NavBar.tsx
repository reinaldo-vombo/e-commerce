import { Search } from "lucide-react"
import Modal from "../shared/Modal"
import { Input } from "../ui/input"

const NavBar = () => {
   return (
      <header className="py-4 px-6 sticky top-0 w-full">
         <nav>
            <Modal btn={<Search />} title="Pesquisar...">
               <Input type="search" />
            </Modal>
         </nav>
      </header>
   )
}

export default NavBar
