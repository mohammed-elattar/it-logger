import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import M from 'materialize-css/dist/js/materialize.min.js';
import { deleteLog } from '../../actions/logActions';

const LogItem = ({ log }) => {
  const dispatch = useDispatch();
  const onDelete = () => {
    dispatch(deleteLog(log.id));
    M.toast({ html: 'Log Deleted' });
  };
  return (
    <li className='collection-item'>
      <div>
        <a
          href='#edit-log-modal'
          className={`modal-trigger ${
            log.attention ? 'red-text' : 'blue-text'
          }`}
        >
          {log.message}
        </a>
        <br />
        <span className='grey-text'>
          <span className='black-text'>ID #{log.id}</span> last updated by{' '}
          <span className='black-text'>{log.tech}</span> on{' '}
          <Moment format='MMM Do YYYY, h:mm:ss a'>{log.date}</Moment>
        </span>
        <a href='#!' className='secondary-content' onClick={onDelete}>
          <i className='material-icons grey-text'>delete</i>
        </a>
      </div>
    </li>
  );
};

LogItem.propTypes = {
  log: PropTypes.object.isRequired,
};

export default LogItem;
