import { Disclosure } from "@headlessui/react";
import { BiChevronUp, BiChevronDown } from 'react-icons/bi';

const style ={ 
    buttonWrapper: 'flex items-center justify-between p-4',
    buttonLeft: 'flex items-center space-x-4',
    title: 'font-semibold',
    rightIcon: 'h-6 w-6 text-gray-50 p-4 dark:bg-[#313339]',
    innerTextContainer: 'flex flex-col px-4'


}

const DropDown = ({title, icon, listing}) => {
    return(
        <Disclosure>
            {({open}) => (
                <><Disclosure.Button>
                    <div className={style.buttonWrapper}>
                        <div className={style.buttonLeft}>
                            {icon}
                            <span className={style.title}>{title}</span>
                        </div>

                        {open ? (
                            <BiChevronDown className={style.rightIcon}/>
                        ) : (
                            <BiChevronUp className={style.rightIcon}/>
                        )}
                    </div>
                </Disclosure.Button>
                <Disclosure.Panel>
                    <div className={style.innerTextContainer}>
                        {title === 'Description' ?
                             (listing?.asset?.description) :
                              (listing?.asset?.attributes.map((item, index) => {
                                return (
<<<<<<< HEAD
                                    <table key={index}>
=======
                                    <table>
>>>>>>> 230b08dd2d5449f772275d29a81e9ae0f7158ef3
                                        <tr>
                                            <td>{item.trait_type}</td>
                                            <td>{item.value}</td>
                                        </tr> 
                                    </table>    
                                )
                              }) )}
                    </div>
                </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    )
}

export default DropDown