import React, { useState, useEffect, useRef } from 'react'
import { db, auth } from '../firebase'
import SendMessage from './SendMessage'
import Header from './Header'
import DeleteIcon from '@material-ui/icons/Delete';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    icon: {
      top: '40%',
      right: '5px', 
      fontSize: '12px',
      position: 'absolute',
      color: '#c1c1c1'
    }
  }));

function Chat() {
    const classes = useStyles();
    const scroll = useRef()
    const [chats, setChat] = useState([])
    const [currentMsg, setCurrentMsg] = useState([])

    const displayRemoveIcon = (id) => {
        setCurrentMsg(id === currentMsg ? null : id)
    }

    const deleteMessage = (id) => {
        db.collection('chats_list').doc(id).delete()
    }

    useEffect(() => {
        db.collection('chats_list').orderBy('createdAt').limit(50).onSnapshot(snapshot => {
            setChat(snapshot.docs.map(doc => {
                return {
                    id: doc.id,
                    message: doc.data().message,
                    displayName: doc.data().displayName,
                    photoURL: doc.data().photoURL,
                    uid: doc.data().uid,
                }
            }))
        })
    }, [])

    return (
        <div>
            <Header />
            <div className="msgs">
                {chats.map(({ id, message, displayName, photoURL, uid }) => (
                    <div key={id} className="msgs-item-box">
                        <div className={`msg ${uid === auth.currentUser.uid ? 'sent' : 'received'}`} onClick={uid === auth.currentUser.uid ? () => displayRemoveIcon(id) : null}>
                            <img src={photoURL} alt="" />
                            <p>{message}</p>
                        </div>
                        {uid === auth.currentUser.uid && currentMsg === id ? <DeleteIcon id={id} onClick={() => deleteMessage(id)} className={`remove-item ${classes.icon}`} /> : ''}
                        {uid !== auth.currentUser.uid ? <span className="user-name">{displayName}</span> : ''}
                    </div>
                ))}
            </div>
            <SendMessage scroll={scroll} />
            <div ref={scroll}></div>
        </div>
    )
}

export default Chat
