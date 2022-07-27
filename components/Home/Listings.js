import { useEffect, useState } from "react"
import Link from 'next/link'
import { useMarketplace } from "@thirdweb-dev/react"
import NFTCard from "./NFTCard"

const style ={
    wrapper: 'mx-auto grid max-w-fit flex-1 grid-cols-1 gap-8 p-10 pt-24 md:grid-cols-2 md:pt-0 lg:grid-cols-3 xl:grid-cols-4 '
}

const Listings = () => {
    const [listings, setlistings] = useState([])
    const marketplace = useMarketplace('0xcD6E54F0F99B74C64b0426FEaf62Fb708cDb60c2');

    useEffect(()=>{
        getListings();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    
    const getListings = async() =>{
        try {
            const list = await marketplace.getActiveListings();

            setlistings(list)
            console.log(list);
        } catch (error) {
            console.log(error);
        }
    }
 
    return (
        <div className={style.wrapper}>
            {listings.length > 0 ? (
                <>
                    {listings?.map((listing, index)=> (
                        <Link
                            key={index}
                            href={`/assests/${listing.assetContractAddress}/${listing.id}`}
                        >
                            <a>
                                 <NFTCard listing={listing}/>
                            </a>
                        </Link>
                    ))}
                </>
            ) : (
                <div>Loading...</div>
            )}
        </div>
    )
}

export default Listings