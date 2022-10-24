import styles from './Post.module.css'

export const Post = (props) => {
    return(
        <div>
            <img className={styles.image} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLRMlKdRq8oRXWYefD9AQAT2tpYHyt16Eg-g&usqp=CAU" />
            <div>Text : {props.text}</div>
            <div>Likes : {props.likesCount}</div>
        </div>
    );
}