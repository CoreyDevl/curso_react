import PropTypes from "prop-types"


function Item({marca, ano_lançamento}){
    return(
        <>
        <li>{marca} - {ano_lançamento}</li>
        </>
    )
}
Item.propTypes = {
    marca: PropTypes.string.isRequired, 
    ano_lançamento: PropTypes.number.isRequired
}

Item.defaultProps = {
    marca: "faltou a marca!",
    ano_lançamento: 0,
}
export default Item