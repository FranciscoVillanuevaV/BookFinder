function BookInformation(props) {
  const info = props.information;
  if (info.name){
    return (
      <div>
        <p key={info.name}>{info.name}</p>
        <p key={info.author}>{info.author}</p>
        <p key={info.publisher}>{info.publisher}</p>
        <p key={info.pages}>{info.pages}</p>
        <p key={info.edition}>{info.edition}</p>
        <p key={info.isbn}>{info.isbn}</p>
        <img src={info.image} alt='algo'></img>
        <p key='rayitas'>------------------------</p>
      </div>
    );
  } else {
    return <div></div>
  }
}

export default BookInformation;