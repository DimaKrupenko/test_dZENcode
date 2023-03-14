import React from 'react';
import styles from './CommentList.module.css';

const CommentList = ({ comments }) => {
  return (
    <ul>
      {comments.map(({ _id, username, email, homepage, text }) => (
        <li key={_id} className={styles.list}>
          <div className={styles.userNameConteiner}>
            <h2 className={styles.userName}>{username}</h2>
            <p className={styles.email}>{email}</p>
          </div>
          {homepage && (
            <div>
              Home page:
              <a className={styles.homePage} href={homepage}>
                {homepage}
              </a>
            </div>
          )}
          <p>{text}</p>
        </li>
      ))}
    </ul>
  );
};

export default CommentList;
