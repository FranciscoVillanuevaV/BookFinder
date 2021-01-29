import FreeResource from './FreeResource';

function FoundedList (props){
  let t = 0;
  if (props.items){
    const theItems = props.items;
    if (theItems.length) {
      return theItems.map( 
        item =>       
          <FreeResource key={++t} info={item} />
      );
    } else {
      return <div style={{visibility: 'hidden'}}></div>
    }
  } else {
    return <div style={{visibility: 'hidden'}}></div>
  }
}

export default FoundedList;