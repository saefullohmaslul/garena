import { getContent } from '@/redux/actions/content.action'
import { getUniversities } from '@/redux/actions/university.action'
import { getFaculties } from '@/redux/actions/faculty.action'

export const mapDispatchToProps = dispatch => {
  return {
    getContent: payload => dispatch(getContent(payload)),
    getUniversities: payload => dispatch(getUniversities(payload)),
    getFaculties: payload => dispatch(getFaculties(payload))
  }
}
