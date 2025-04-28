const Skill = (props) => {
    return (
        <div key={props.name} className={`${props.bgColor} rounded-2xl my-2`}>
            <p className={`text-xl ${props.textColor} font-bold py-2 px-6`}>{props.skillName}</p>
        </div>
    )   
}

export default Skill