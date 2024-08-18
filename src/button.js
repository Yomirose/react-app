function Button({childern, nameOfFunction}){
    return (
        <div>
            <button onClick={nameOfFunction}>{childern}</button>
        </div>
    )
}

export default Button;