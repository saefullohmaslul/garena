import { getContent } from '@/redux/actions/content.action'
import { getUniversities } from '@/redux/actions/university.action'

export const mapDispatchToProps = dispatch => {
  return {
    getContent: payload => dispatch(getContent(payload)),
    getUniversities: payload => dispatch(getUniversities(payload))
  }
}
