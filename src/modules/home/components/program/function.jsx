import { getContent } from '@/redux/actions/content.action'

export const mapStateToProps = state => {
  return {
    contents: state.contents
  }
}

export const mapDispatchToProps = dispatch => {
  return {
    getContent: payload => dispatch(getContent(payload))
  }
}
