import { FiHelpCircle } from "react-icons/fi";
import {Link} from 'react-router-dom'
function AboutIconLink() {
  return (
  <div className="about-link">
      <Link to='/about'>
        <FiHelpCircle size={30} />
      </Link>
  </div>
  )
}

export default AboutIconLink;
