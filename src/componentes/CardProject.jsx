import styles from '/css/cardProject.module.css'
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

function CardProject(props) {

    return (
        <>
        <Link to={'/Pizarra'} className={styles.redireccionCard}>
                <h5> <b> {props.title} </b> </h5>
                <div className={styles.preview}>
                    <img src={props.imgPath} alt="Imagen de proyecto"></img>
                </div>
        </Link>
        </>
    );
}

CardProject.propTypes = {
    title: PropTypes.string.isRequired,
    imgPath: PropTypes.string.isRequired
};

export default CardProject;
