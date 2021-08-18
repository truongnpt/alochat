import React, { useState } from 'react'
import { db, auth } from '../firebase'
import firebase from 'firebase'
import { Input, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import SendIcon from '@material-ui/icons/Send';
import translation from '../static/translation';

const useStyles = makeStyles((theme) => ({
    input: {
        width: '78%', 
        fontSize: '15px', 
        fontWeight: '400', 
    },
    button: {
        width: '18%', 
        fontSize: '15px', 
        fontWeight: '400', 
        maxWidth: '200px'
    },
  }));

function SendMessage({ scroll }) {
    const classes = useStyles();
    const [msg, setMsg] = useState('')

    const currentLang = translation.find(t => t.key === 'vi');

    async function sendMessage(e) {
        e.preventDefault()
        const { uid, photoURL, displayName } = auth.currentUser

        await db.collection('chats_list').add({
            message: msg,
            photoURL,
            displayName,
            uid,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        })
        setMsg('')
        scroll.current.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <div>
            <form onSubmit={sendMessage}>
                <div className="sendMsg">
                    <Input className={classes.input} disableUnderline={true} placeholder={currentLang.placeholder_message} type="text" value={msg} onChange={e => setMsg(e.target.value)} />
                    <Button className={classes.button} type="submit" color="primary"><SendIcon /></Button>
                </div>
            </form>
        </div>
    )
}

export default SendMessage
