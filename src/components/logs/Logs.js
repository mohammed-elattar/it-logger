import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getLogs } from '../../actions/logActions';
import { GET_LOGS } from '../../actions/types';
import Preloader from '../layout/Preloader';
import LogItem from './LogItem';

const Logs = () => {
  //   const [logs, setLogs] = useState([]);
  const { logs, loading } = useSelector((state) => state.log);
  const dispatch = useDispatch();
  //   const [loading, setLoading] = useState(false);
  //   const getLogs = async () => {
  //     setLoading(true);
  //     const res = await fetch('/logs');
  //     const logs = await res.json();
  //     setLoading(false);
  //     setLogs(logs);
  //   };

  useEffect(() => {
    dispatch(getLogs());
  }, []);

  console.log(logs, 'logs');
  if (loading || !logs) {
    return <Preloader />;
  }
  return (
    <ul className='collection with-header'>
      <li className='collection-header'>
        <h4 className='center'>System Logs</h4>
      </li>
      {!loading && logs.length === 0 ? (
        <p>No logs to show...</p>
      ) : (
        logs.map((log) => <LogItem log={log} key={log.id} />)
      )}
    </ul>
  );
};

export default Logs;
