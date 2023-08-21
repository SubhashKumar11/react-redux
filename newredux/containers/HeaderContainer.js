import {connect} from 'react-redux'
import { addToCart,removeToCart } from '../services/actions/Action'
import Header from '../components/Header'
const mapStateToProps = state =>({
      data:state.CardItems
})
const mapDispatchToProps =dispatch=>({
  //  addToCart:data=>dispatch(addToCart(data)),
  //  removeToCart:data => dispatch(removeToCart(data))
})
export default connect(mapStateToProps,mapDispatchToProps)(Header)

