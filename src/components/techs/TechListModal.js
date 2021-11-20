import React, { useEffect } from 'react';
import TechItem from './TechItem';
import { getTechs } from '../../actions/techActions';
import { useSelector, useDispatch } from 'react-redux';

const TechListModal = () => {
  const { techs, loading } = useSelector((state) => state.tech);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTechs());
    // eslint-disable-next-line
  }, []);

  return (
    <div id='tech-list-modal' className='modal'>
      <div className='modal-content'>
        <h4>Technician List</h4>
        <ul className='collection'>
          {!loading &&
            null !== techs &&
            techs.map((tech) => <TechItem tech={tech} key={tech.id} />)}
        </ul>
      </div>
    </div>
  );
};

export default TechListModal;
