import React, { useState, useEffect, useRef } from 'react'
import { db, auth } from '../firebase'
import SendMessage from './SendMessage'
import Header from './Header'

function Chat() {
    const scroll = useRef()
    const [chats, setChat] = useState([])
    useEffect(() => {
        db.collection('chats_list').orderBy('createdAt').limit(50).onSnapshot(snapshot => {
            setChat(snapshot.docs.map(doc => doc.data()))
        })
    }, [])
    return (
        <div>
            <Header />
            <div className="msgs">
                {chats.map(({ id, message, displayName, photoURL, uid }) => (
                    <div className="msgs-item-box">
                        <div key={id} className={`msg ${uid === auth.currentUser.uid ? 'sent' : 'received'}`}>
                            <img src={photoURL} alt="" />
                            <p>{message}</p>
                        </div>
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
