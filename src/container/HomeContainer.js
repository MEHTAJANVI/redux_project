import Home from "../components/Home"
import { connect } from "react-redux";
import {addToCart} from '../services/Actions/action'

const mapStateToprops=state =>({

})
const mapDispatchToprops=dispatch=>({
    addToCartHandler:data=>dispatch(addToCart(data))
})

export default connect (mapStateToprops,mapDispatchToprops)(Home)

// export default Home;