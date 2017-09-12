import React, {Component} from 'react'
import {connect} from 'react-redux'
import Home from '../components/home';
import {getCategories} from '../actions/category'
import {getPosts} from '../actions/post'

class HomeContainer extends Component {

  componentDidMount() {
    this.props.getCategories()
    this.props.getPosts()
  }
  render() {
    return (
      <Home {...this.props}/>
    )
  }
}

const mapStateToProps = (store,ownProps) => {
  return {
    category: store.category
  }

}

const mapDispatchToProps = (dispatch,ownProps) => {
  return {
    getCategories : () => dispatch(getCategories()),
    getPosts: () => dispatch(getPosts())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer)