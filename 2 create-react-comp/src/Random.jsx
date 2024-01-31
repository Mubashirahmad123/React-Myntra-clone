function Random(){

    let number = Math.random() * 100;

    return <h1 style={{'backgroundColor':'green'}}>Random number is: {Math.floor(number)}</h1>

}

export default Random;