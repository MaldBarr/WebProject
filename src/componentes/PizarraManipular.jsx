import styles from '/css/PizarraManipular.module.css'
import PropTypes from 'prop-types';

import { useDrop } from 'react-dnd';

function PizarraManipular(props) {
    const [{ canDrop,isOver }, drop] = useDrop(() => ({
        accept: 'image',
        drop: () =>{{name : "the bin"}},
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
            canDrop: !!monitor.canDrop(),
        }),
    }));

    return (
        <>
        <div ref={drop} className={styles.pizarra}>
            {
                props.binnedItems.map((item,i)=>{
                    <div key={i}> 
                    <p>{item}</p>
                    </div>
                })
            }
        </div>
        </>

    );
}
PizarraManipular.propTypes = {
    binnedItems: PropTypes.array.isRequired,
};
export default PizarraManipular;
