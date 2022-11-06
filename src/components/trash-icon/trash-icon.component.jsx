import { ReactComponent as TrashCanIcon } from '../../assets/trash-can.svg';

const TrashIcon = ({ handler }) => {
    return (
        <div className='w-6 h-full'>
            <TrashCanIcon 
                className='w-6 h-6'
                onClick={handler}
            />
        </div>
    )
}

export default TrashIcon;