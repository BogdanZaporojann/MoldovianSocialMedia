

export let SwapiItem = (props) => {
    return(
      <div>
          <div>Name : {props.name}</div>
          <div>Height: {props.height}</div>
          <div>Mass : {props.mass}</div>
      </div>
    );
}