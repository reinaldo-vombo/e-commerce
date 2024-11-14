import SearchDropdow from '@/components/SearchDropdow';
import SheetModal from '@/components/shared/SheetModal';
import FavoriteItem from '@/components/wishList/ListItem';
import { Icons } from '@/constant/icons';
import Link from 'next/link';
import React from 'react'
import CartMobilePage from '../layout/Cart';

const NavigationTab = () => {
    return (
        <div className="fixed bottom-0 left-0 z-50 w-full h-16 bg-white border-t border-gray-200 dark:bg-gray-700 dark:border-gray-600 md:hidden">
            <div className="grid h-full grid-cols-12 place-content-center place-items-center mx-auto font-medium">
                <div className="col-span-3">
                    <Link href='/' className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group">
                        <Icons.home width={30} />
                    </Link>
                </div>
                <div className="col-span-3">
                    <SearchDropdow trigger={<Icons.search width={25} />} />
                </div>
                <div className="col-span-3">
                    <SheetModal
                        label="shop icon"
                        side="right"
                        className='w-full md:w-3/4 left-0 md:left-auto'
                        trigger={
                            <div className="hover:bg-slate-200 rounded-full p-2 flex items-center justify-center">
                                <Icons.heart width={25} />
                            </div>
                        }
                    >
                        <FavoriteItem />
                    </SheetModal>
                </div>
                <div className="col-span-3">
                    <SheetModal
                        label="shop icon"
                        side="right"
                        className='w-full md:w-3/4 left-0 md:left-auto'
                        trigger={
                            <div className="hover:bg-slate-200 rounded-full p-2 flex items-center justify-center">
                                <Icons.shoppingCart width={25} />
                            </div>
                        }
                    >
                        <CartMobilePage />
                    </SheetModal>

                </div>
            </div>
        </div>

    )
}

export default NavigationTab;
