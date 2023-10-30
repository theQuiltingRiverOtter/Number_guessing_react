function Form({ guessNumber }) {
    return (
        <form onSubmit={guessNumber}>
            <input type="number" max="100" min="1"></input>
            <button>Submit Guess</button>
        </form>
    )
}

export default Form