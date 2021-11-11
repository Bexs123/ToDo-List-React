const Date = ({todoDate}) => {
    return (
        <p className="date">{todoDate.toLocaleString()}</p>
    )
}

export default Date