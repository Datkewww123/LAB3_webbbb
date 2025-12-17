import PropTypes from 'prop-types';

function UserProfile({Userdata, theme = 'light'}) {
    return (
        <div className={`profile-card theme-${theme}`}>
        <h2>User Profile</h2>
        <img
        src={Userdata.avatarUrl}
        alt={Userdata.name}
        width={Userdata.imageSize}
        height={Userdata.imageSize}
        className="profile-avatar"
        />
        <p>Name: {Userdata.name}</p>
        <p>Email: {Userdata.email}</p>
        </div>
    );
}
UserProfile.propTypes ={
    Userdata: PropTypes.shape({
        Name: PropTypes.string.isRequired,
        Email: PropTypes.string,
    }).isRequired,
    theme: PropTypes.string
}
export default UserProfile;