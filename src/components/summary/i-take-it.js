import React from 'react';
import auth from '../../utils/auth';

export default ({iTakeIt, takenBy, iChangedMyMind, allDone}) => {
  const takenByMe = auth.username === takenBy;
  const takenBySomeoneElse = takenBy && !takenByMe;

  if (takenByMe) {
    return (
      <div className="row">
        <div className="col mr-3 ml-3 p-3 text-center">
          <button onClick={iChangedMyMind} className="btn btn-danger">
            No, I change my mind
          </button>
        </div>
        <div className="col mr-3 ml-3 p-3 text-center">
          <button onClick={allDone} className="btn btn-secondary">
            All done, let's clear the list!
          </button>
        </div>
      </div>
    );
  } else if (takenBySomeoneElse) {
    return (
      <div className="row">
        <div className="col mr-3 ml-3 p-3 text-center">
          Good news!<br />Next round is beeing taken by <h3>{takenBy}</h3>
        </div>
      </div>
    );
  } else {
    return (
      <div className="row">
        <div className="col mr-3 ml-3 p-3 text-center">
          <button onClick={iTakeIt} className="btn btn-success">
            My round, I take it
          </button>
        </div>
      </div>
    );

  }
}
