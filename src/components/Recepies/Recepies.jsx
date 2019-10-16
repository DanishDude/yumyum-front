import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { asyncFetchRecepies } from '../../actions/fetchRecepies';

import RecepieCard from './RecepieCard';

class Recepies extends Component {
  componentDidMount() {
    const { asyncFetchRecepies } = this.props;
    asyncFetchRecepies();
  }

  render() { 
    const { recepies, loading, error } = this.props;
    return ( 
      <div className="Recepies">
        {error !== '' ? <div>{error}</div> : ''}
        {!recepies && loading ? <div>Loading...</div> : (
          <ul className="list">
            {(recepies && recepies.length > 0)
            ? recepies.map(recepie => (
              <li 
                key={recepie.id}
                className="recepie-wrapper"
              >
                <RecepieCard recepie={recepie} />
              </li>
            ))
            : <div>{'Sorry, there are no recepies today :-('}</div>}
          </ul>
        )}
      </div>
    );
  }
}

const mstp = state => ({
  loading: state.recepies.loading,
  recepies: state.recepies.recepies,
  error: state.recepies.error,
});

const mdtp = dispatch => bindActionCreators({ asyncFetchRecepies }, dispatch);
 
export default connect(mstp, mdtp)(Recepies);
