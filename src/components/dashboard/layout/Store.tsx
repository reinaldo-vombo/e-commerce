// 'use client'

// import { useState, useEffect } from 'react'
// import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
// import L from 'leaflet'
// import 'leaflet/dist/leaflet.css'
// import { Pencil, Trash2, PlusCircle, MapPin } from 'lucide-react'
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
// import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
// import {
//    Dialog,
//    DialogContent,
//    DialogDescription,
//    DialogFooter,
//    DialogHeader,
//    DialogTitle,
//    DialogTrigger,
// } from "@/components/ui/dialog"
// import { ScrollArea } from "@/components/ui/scroll-area"

// // Workaround for Leaflet icon issue in Next.js
// const icon = L.icon({
//    iconUrl: '/images/marker-icon.png',
//    shadowUrl: '/images/marker-shadow.png',
//    iconSize: [25, 41],
//    iconAnchor: [12, 41],
// })

// interface Store {
//    id: number
//    name: string
//    address: string
//    lat: number
//    lng: number
// }

// function MapUpdater({ stores }: { stores: Store[] }) {
//    const map = useMap()

//    useEffect(() => {
//       if (stores.length > 0) {
//          const bounds = L.latLngBounds(stores.map(store => [store.lat, store.lng]))
//          map.fitBounds(bounds)
//       }
//    }, [stores, map])

//    return null
// }

// export default function StoreManagement() {
//    const [stores, setStores] = useState<Store[]>([
//       { id: 1, name: "Downtown Store", address: "123 Main St, Cityville", lat: 40.7128, lng: -74.0060 },
//       { id: 2, name: "Suburban Mall", address: "456 Oak Ave, Townsburg", lat: 34.0522, lng: -118.2437 },
//    ])

//    const [isNewStoreDialogOpen, setIsNewStoreDialogOpen] = useState(false)
//    const [editingStore, setEditingStore] = useState<Store | null>(null)
//    const [mapCenter, setMapCenter] = useState<[number, number]>([39.8283, -98.5795])
//    const [mapZoom, setMapZoom] = useState(4)

//    const handleNewStore = (e: React.FormEvent<HTMLFormElement>) => {
//       e.preventDefault()
//       const formData = new FormData(e.currentTarget)
//       const newStore: Store = {
//          id: Date.now(),
//          name: formData.get('name') as string,
//          address: formData.get('address') as string,
//          lat: parseFloat(formData.get('lat') as string),
//          lng: parseFloat(formData.get('lng') as string),
//       }
//       setStores([...stores, newStore])
//       setIsNewStoreDialogOpen(false)
//    }

//    const handleEditStore = (e: React.FormEvent<HTMLFormElement>) => {
//       e.preventDefault()
//       if (!editingStore) return
//       const formData = new FormData(e.currentTarget)
//       const updatedStore: Store = {
//          ...editingStore,
//          name: formData.get('name') as string,
//          address: formData.get('address') as string,
//          lat: parseFloat(formData.get('lat') as string),
//          lng: parseFloat(formData.get('lng') as string),
//       }
//       setStores(stores.map(store => store.id === updatedStore.id ? updatedStore : store))
//       setEditingStore(null)
//    }

//    const handleDeleteStore = (id: number) => {
//       setStores(stores.filter(store => store.id !== id))
//    }

//    return (
//       <div className="container mx-auto p-6">
//          <div className="flex justify-between items-center mb-6">
//             <h1 className="text-3xl font-bold">Store Management</h1>
//             <Dialog open={isNewStoreDialogOpen} onOpenChange={setIsNewStoreDialogOpen}>
//                <DialogTrigger asChild>
//                   <Button>
//                      <PlusCircle className="mr-2 h-4 w-4" /> New Store
//                   </Button>
//                </DialogTrigger>
//                <DialogContent className="sm:max-w-[425px]">
//                   <DialogHeader>
//                      <DialogTitle>Add New Store</DialogTitle>
//                      <DialogDescription>
//                         Enter the details of the new store location.
//                      </DialogDescription>
//                   </DialogHeader>
//                   <form onSubmit={handleNewStore}>
//                      <div className="grid gap-4 py-4">
//                         <div className="grid grid-cols-4 items-center gap-4">
//                            <Label htmlFor="name" className="text-right">
//                               Name
//                            </Label>
//                            <Input id="name" name="name" className="col-span-3" required />
//                         </div>
//                         <div className="grid grid-cols-4 items-center gap-4">
//                            <Label htmlFor="address" className="text-right">
//                               Address
//                            </Label>
//                            <Input id="address" name="address" className="col-span-3" required />
//                         </div>
//                         <div className="grid grid-cols-4 items-center gap-4">
//                            <Label htmlFor="lat" className="text-right">
//                               Latitude
//                            </Label>
//                            <Input id="lat" name="lat" type="number" step="any" className="col-span-3" required />
//                         </div>
//                         <div className="grid grid-cols-4 items-center gap-4">
//                            <Label htmlFor="lng" className="text-right">
//                               Longitude
//                            </Label>
//                            <Input id="lng" name="lng" type="number" step="any" className="col-span-3" required />
//                         </div>
//                      </div>
//                      <DialogFooter>
//                         <Button type="submit">Add Store</Button>
//                      </DialogFooter>
//                   </form>
//                </DialogContent>
//             </Dialog>
//          </div>

//          <div className="grid md:grid-cols-2 gap-6">
//             <div>
//                <ScrollArea className="h-[600px] w-full rounded-md border">
//                   <Table>
//                      <TableHeader>
//                         <TableRow>
//                            <TableHead>Name</TableHead>
//                            <TableHead>Address</TableHead>
//                            <TableHead className="text-right">Actions</TableHead>
//                         </TableRow>
//                      </TableHeader>
//                      <TableBody>
//                         {stores.map((store) => (
//                            <TableRow key={store.id}>
//                               <TableCell className="font-medium">{store.name}</TableCell>
//                               <TableCell>{store.address}</TableCell>
//                               <TableCell className="text-right">
//                                  <Dialog>
//                                     <DialogTrigger asChild>
//                                        <Button variant="ghost" size="icon" onClick={() => setEditingStore(store)}>
//                                           <Pencil className="h-4 w-4" />
//                                        </Button>
//                                     </DialogTrigger>
//                                     <DialogContent className="sm:max-w-[425px]">
//                                        <DialogHeader>
//                                           <DialogTitle>Edit Store</DialogTitle>
//                                           <DialogDescription>
//                                              Make changes to the store details here.
//                                           </DialogDescription>
//                                        </DialogHeader>
//                                        <form onSubmit={handleEditStore}>
//                                           <div className="grid gap-4 py-4">
//                                              <div className="grid grid-cols-4 items-center gap-4">
//                                                 <Label htmlFor="edit-name" className="text-right">
//                                                    Name
//                                                 </Label>
//                                                 <Input id="edit-name" name="name" defaultValue={editingStore?.name} className="col-span-3" required />
//                                              </div>
//                                              <div className="grid grid-cols-4 items-center gap-4">
//                                                 <Label htmlFor="edit-address" className="text-right">
//                                                    Address
//                                                 </Label>
//                                                 <Input id="edit-address" name="address" defaultValue={editingStore?.address} className="col-span-3" required />
//                                              </div>
//                                              <div className="grid grid-cols-4 items-center gap-4">
//                                                 <Label htmlFor="edit-lat" className="text-right">
//                                                    Latitude
//                                                 </Label>
//                                                 <Input id="edit-lat" name="lat" type="number" step="any" defaultValue={editingStore?.lat} className="col-span-3" required />
//                                              </div>
//                                              <div className="grid grid-cols-4 items-center gap-4">
//                                                 <Label htmlFor="edit-lng" className="text-right">
//                                                    Longitude
//                                                 </Label>
//                                                 <Input id="edit-lng" name="lng" type="number" step="any" defaultValue={editingStore?.lng} className="col-span-3" required />
//                                              </div>
//                                           </div>
//                                           <DialogFooter>
//                                              <Button type="submit">Save Changes</Button>
//                                           </DialogFooter>
//                                        </form>
//                                     </DialogContent>
//                                  </Dialog>
//                                  <Button variant="ghost" size="icon" onClick={() => handleDeleteStore(store.id)}>
//                                     <Trash2 className="h-4 w-4" />
//                                  </Button>
//                               </TableCell>
//                            </TableRow>
//                         ))}
//                      </TableBody>
//                   </Table>
//                </ScrollArea>
//             </div>
//             <div className="h-[600px] rounded-md border">
//                <MapContainer center={mapCenter} zoom={mapZoom} style={{ height: '100%', width: '100%' }}>
//                   <TileLayer
//                      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//                      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//                   />
//                   {stores.map((store) => (
//                      <Marker key={store.id} position={[store.lat, store.lng]} icon={icon}>
//                         <Popup>
//                            <strong>{store.name}</strong><br />
//                            {store.address}
//                         </Popup>
//                      </Marker>
//                   ))}
//                   <MapUpdater stores={stores} />
//                </MapContainer>
//             </div>
//          </div>
//       </div>
//    )
// }