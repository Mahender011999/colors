const Profile = (props) => {
    const {title,url,thumbnailUrl} = props
    return (
        
      <artical className="pofile-card">
      <img src={thumbnailUrl} alt="a" />
        <h2 className="title">{title}</h2>
        <a href={url} className="button">
          Details
        </a>
      </artical>
   
    );
  };
  export default Profile