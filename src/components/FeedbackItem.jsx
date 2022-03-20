import { FiXCircle, FiEdit2 } from 'react-icons/fi';
import {useContext} from 'react'
import PropTypes from 'prop-types'
import Card from './shared/Card'
import FeedbackContext from '../context/FeedbackContext'


function FeedbackItem({item}) {
  const {deleteFeedback, editFeedback} = useContext(FeedbackContext)
 return (
    <Card>
        <div className="num-display">{item.rating}</div>
        <button onClick={() => deleteFeedback(item.id)} className="close">
          <FiXCircle color="purple" />
        </button>
        <button onClick={() => editFeedback(item)} className="edit">
          <FiEdit2 color="purple"></FiEdit2>
        </button>
        <div className="text-display">{item.text}</div>
    </Card>
  )
}
FeedbackItem.propTypes = {
  item: PropTypes.object.isRequired,
}
export default FeedbackItem;