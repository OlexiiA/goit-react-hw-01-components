import PropTypes from 'prop-types';
import { FriendListItem } from "./FriendListItem";
import css from './FriendList.module.css';

export const FriendList = ({ friends }) => {
    return (
        <ul className={css.friends}>
            {friends.map(({ id, avatar, name, isOnline }) =>
                <FriendListItem key={id}
                    avatar={avatar}
                    name={name}
                    isOnline={isOnline} />)}
        </ul>
    );
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool,
        id: PropTypes.number.isRequired,
    })),
};