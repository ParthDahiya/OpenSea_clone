import {GrTextAlignLeft} from 'react-icons/gr';
import {BsFillBookmarkFill} from 'react-icons/bs';
import DropDown from './DropDown';

const style = {
    wrapper: 'flex flex-col divide-y rounded-lg overflow-hidden border dark:divide-black dark:border-black',
    icon: 'h-5 w-5 text-gray-600'
}

const NFTDetails = ({listing}) => {
    const dropDownData = [
        {
            title: 'Description',
            icon: <GrTextAlignLeft className={style.icon} />
        },
        {
            title: 'Properties',
            icon: <BsFillBookmarkFill className={style.icon} />
        }
    ];

    return(
        <div className={style.wrapper}>
            {dropDownData.map((item, index) => {
                return (<DropDown key={index} title={item.title} icon={item.icon} listing={listing}/>)
            })}
        </div>
    )
}


export default NFTDetails