import BookInformation from './BookInformation';

function FoundedList (props){
  if (props.resultsFounded.length) {
    return props.resultsFounded.map( 
      item => 
        <BookInformation key={item.name + item.edition} information={item} />
    );
  } else {
    return <div></div>
  }
}

export default FoundedList;