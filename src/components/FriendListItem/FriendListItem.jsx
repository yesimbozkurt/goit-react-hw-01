const FriendListItem = ({ avatar, name, isOnline }) => {
    return (
        <div>
            <img src={avatar} alt={name} width="48" />
            <p>{name}</p>
            <p className="isOnline">{isOnline}</p>
        </div>

    )
}
export default FriendListItem;  