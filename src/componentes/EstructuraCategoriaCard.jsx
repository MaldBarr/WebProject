import styles from '/css/EstructuraCategoriaCard.module.css'
import PropTypes from 'prop-types';

function EstructuraCategoriaCard(props) {

    return (
        <>
        <ul className={styles.listaEstructurasDatos}>
            {props.images.map((image, index) => {
                let imageStyle = image.cuadrado ? {height: '120px'} : {height: '40px'};
                return (
                    <li key={index} className={styles.Estructura} >
                        <img className={styles.imgEstructura} style={imageStyle} src={`public/estructuras-de-datos/${image.nameImg}.png`} alt={image.altImg}/>
                    </li>
                );
            })}
        </ul>
        </>
    );
}

EstructuraCategoriaCard.propTypes = {
    images: PropTypes.arrayOf(
        PropTypes.shape({
            nameImg: PropTypes.string.isRequired,
            altImg: PropTypes.string.isRequired,
            cuadrado: PropTypes.bool
        })
    ).isRequired,
};


export default EstructuraCategoriaCard;
