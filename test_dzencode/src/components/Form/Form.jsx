import React from "react";
import { useState } from 'react';
import styles from './Form.module.css'
import { nanoid } from 'nanoid';



const Form = ({ onSubmit }) => {
    const [comment] = useState('')
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [homePage, setHomePage] = useState('')
    const [text, setText] = useState('')

    const userNameId = nanoid();
    const emailId = nanoid();
    const homePageId = nanoid()
    const textId = nanoid()

    const data = { comment, userName, email, homePage, text };

    const handleChangeUserName = (evt) => {
        setUserName(evt.target.value);
    }

    const handleChangeEmail = evt => {
        setEmail(evt.target.value);
    }
    const handleChangeHomePage = evt => {
        setHomePage(evt.target.value)
    }
    const handleChangeText = evt => {
        setText(evt.target.value)
    }
    const handleSubmit = evt => {
        evt.preventDefault();

        reset();

        onSubmit(data);
    };

    const reset = () => {
        setUserName('');
        setEmail('');
        setHomePage('')
        setText('')
    };
    return (
        <div>
            <form className={styles.form} onSubmit={handleSubmit}>
                <label htmlFor={userNameId}>
                    User Name
                    <input
                        className={styles.input}
                        type="text"
                        name="userName"
                        value={userName}
                        id={userNameId}
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        onChange={handleChangeUserName}
                        required
                    />
                </label>
                <label htmlFor={emailId}>
                    E-mail
                    <input
                        className={styles.input}
                        type="email"
                        name="email"
                        value={email}
                        id={emailId}
                        onChange={handleChangeEmail}
                        required
                    />
                </label>
                <label htmlFor={homePageId}>
                    Home page
                    <input
                        className={styles.input}
                        type='url'
                        name="homePage"
                        value={homePage}
                        id={homePageId}
                        onChange={handleChangeHomePage}>
                    </input>
                </label>
                <label htmlFor={textId}>
                    Text
                    <textarea
                        className={styles.input}
                        name='text'
                        value={text}
                        id={textId}
                        onChange={handleChangeText}
                        required>
                    </textarea>
                    <button className={styles.button__form} type="submit">
                        Add comment
                    </button>
                </label>

            </form>
        </div>
    )
}

export default Form