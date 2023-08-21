import {connect} from 'react-redux'
import { addToCart,removeToCart } from '../services/actions/Action'
import Home from '../components/Home'
const mapStateToProps = state =>({
      data:state.CardItems
})
const mapDispatchToProps =dispatch=>({
    addToCart:data=>dispatch(addToCart(data)),
    removeToCart:data => dispatch(removeToCart(data))
})
export default connect(mapStateToProps,mapDispatchToProps)(Home)

