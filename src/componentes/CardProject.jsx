import styles from '/css/cardProject.module.css'

function CardProject(props) {

    return (
        <>
            <div className={styles.cardProject}>
                <h5> <b> {props.title} </b> </h5>
                <div className={styles.preview}>
                    <img src={props.imgPath} alt="Imagen crear proyecto"></img>
                </div>
            </div>
        </>
    );
}

export default CardProject;
