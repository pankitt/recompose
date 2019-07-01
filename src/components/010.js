import React,  { useState, useEffect } from 'react';

const ChatAPI = {
    subscribeToFriendStatus: () => true,
    unsubscribeFromFriendStatus: () => false,
};
const friendList = [
    { id: 1, name: 'Татьяна' },
    { id: 2, name: 'Алла' },
    { id: 3, name: 'Лиля' },
];

function useFriendStatus(friendID) {
    const [isOnline, setIsOnline] = useState(null);

    useEffect(() => {
        function handleStatusChange(status) {
            setIsOnline(status.isOnline);
        }

        ChatAPI.subscribeToFriendStatus(friendID, handleStatusChange);
        // Указываем, как сбросить этот эффект:
        return () => {
            ChatAPI.unsubscribeFromFriendStatus(friendID, handleStatusChange);
        };
    }, [friendID]);

    return isOnline;
}

function FriendStatus() {
    const isOnline = useFriendStatus(friendList.id);

    if (isOnline === null) {
        return 'Загрузка...';
    }
    return isOnline ? 'В сети' : 'Не в сети';
}
function FriendListItem() {
    return (
        <ul>
            {friendList.map(friend => (
                    <li key={friend.id}>
                {friend.name}
            </li>
            ))}
        </ul>
    )

}
function Example() {
    return (
        <>
            <FriendStatus/>
            <FriendListItem/>
        </>
    )
}


export default Example;
