import { Link } from 'react-router-dom';
import Asterisk from './ui/Asterisk';
import ProfileLinks from './ProfileLinks';
import MotionToggle from './MotionToggle';
import { profile } from '../data/profile';

/** Fixed left rail from 900px (CSS hides it below): home mark, status, profile links, motion pause. */
export default function Rail() {
  return (
    <aside aria-label="Status and profiles" className="rail">
      <Link to="/" viewTransition className="rail__mark">
        <Asterisk />
        <span className="visually-hidden">Joel Leiva, home</span>
      </Link>
      <p className="rail__status label">
        <span className="status-dot" aria-hidden="true" />
        {profile.status}
      </p>
      <div className="rail__tools">
        <ProfileLinks variant="icon" />
        <MotionToggle compact />
      </div>
    </aside>
  );
}
