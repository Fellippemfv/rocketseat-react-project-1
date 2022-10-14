import { ThumbsUp, Trash } from "phosphor-react"
import { useState } from "react"
import { Avatar } from "./Avatar"
import styles from "./Comment.module.css"

interface CommentProps {
    content: string;
    onDeleteComment: (comment: string) => void;
}

export function Comment({ content, onDeleteComment }: CommentProps) {
    const [likeCount, setLikeCount] = useState(0);

    function handleDeleteComment () {
        onDeleteComment(content);
    }

    function handleLikeComment () {
        setLikeCount((state) => {
            return likeCount + 1
        });
    }

    return(
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://xesque.rocketseat.dev/users/avatar/profile-ef0b0680-fd2f-483f-b088-603826401ba3-1641870924325.jpg" alt="" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Fellippe Matheus</strong>
                            <time title="12 de outubro ás 19:41h" dateTime="2022-10-12 19:41:30">Cerca de 1h atrás</time>
                        </div>

                        <button onClick={handleDeleteComment} title="Deletar comentário">
                            <Trash size={24} />
                        </button>
                    </header>

                    <p>{content}</p>
                </div>

                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp />
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}