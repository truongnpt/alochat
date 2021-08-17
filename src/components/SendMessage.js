import React, { useState } from 'react'
import { db, auth } from '../firebase'
import firebase from 'firebase'
import { Input, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    input: {
        width: '78%', 
        fontSize: '15px', 
        fontWeight: '400', 
        marginLeft: '5px', 
        marginBottom: '-3px',
    },
    button: {
        width: '18%', 
        fontSize: '15px', 
        fontWeight: '400', 
        margin: '4px 5% -13px 5%', 
        maxWidth: '200px'
    },
  }));

function SendMessage({ scroll }) {
    const classes = useStyles();
    const [msg, setMsg] = useState('')

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
                    <Input className={classes.input} placeholder='Message...' type="text" value={msg} onChange={e => setMsg(e.target.value)} />
                    <Button className={classes.button} type="submit" color="primary">Send</Button>
                </div>
            </form>
        </div>
    )
}

export default SendMessage
