const ApiDataItem = (props) => {
  const { apiDetails } = props;
  const {
    gender,
    name,
    location,
    email,
    login,
    dob,
    registered,
    phone,
    id,
    picture,
    nat,
    info,
  } = apiDetails;
  return (
    <>
      <p>{gender} </p>
      <p> {name.title} </p>
      <p> {name.first} </p>
      <p> {name.last} </p>
      <p> {location.street.number} </p>
      <p> {location.street.name} </p>
      <p> {location.city} </p>
      <p> {location.state} </p>
      <p> {location.country} </p>
      <p> {location.postcode} </p>
      <p> {location.city} </p>
      <p>{location.coordinates.latitude} </p>
      <p>{location.coordinates.longitude} </p>
      <p> {location.timezone.offset} </p>
      <p> {location.timezone.description} </p>
      <p> {email} </p>
      <p> {login.uuid} </p>
      <p> {login.username} </p>
      <p> {login.password} </p>
      <p> {login.salt} </p>
      <p> {login.md5} </p>
      <p> {login.sha1} </p>
      <p> {login.sha256} </p>
      <p> {dob.date} </p>
      <p> {dob.age}</p>
      <p> {registered.date} </p>
      <p> {registered.age} </p>
      <p> {phone} </p>
      <p> {id.name}</p>
      <p> {id.value} </p>
      <img src={picture.large} alt="profileImg" />
      <p> {nat}</p>
      <p>{info.seed}</p>
      <p>{info.results}</p>
      <p>{info.page}</p>
      <p>{info.version}</p>
    </>
  );
};

export default ApiDataItem;
