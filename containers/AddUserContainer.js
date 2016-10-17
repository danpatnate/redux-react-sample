import React from 'react';
import { connect } from 'react-redux'; // user to wire store & view
// import { addUser } from '../actions'; // TODO: add this back

export default connect()(({ dispatch }) => {
  let firstName;
  let lastName;

  return (
    <div className="partial-wrapper">
      <h1 className="page-header">Add User</h1>
      <form
        className="form-horizontal"
        onSubmit={
          e => {
            e.preventDefault();
            if (!firstName.value.trim() || !lastName.value.trim()) {
              return;
            }
            // dispatch(addUser({ firstName: firstName.value, lastName: lastName.value }));
            dispatch();
            firstName.value = '';
            lastName.value = '';
          }
        }
      >
        <div className="form-group">
          <label className="col-sm-1 control-label" htmlFor="first_name">First Name</label>
          <div className="col-sm-9">
            <input
              name="first_name"
              type="text"
              className="form-control"
              ref={node => {
                firstName = node;
              }}
            />
          </div>
        </div>
        <div className="form-group">
          <label className="col-sm-1 control-label" htmlFor="last_name">Last Name</label>
          <div className="col-sm-9">
            <input
              name="last_name"
              type="text"
              className="form-control"
              ref={node => {
                lastName = node;
              }}
            />
          </div>
        </div>
        <div className="form-group">
          <div className="col-sm-offset-1 col-sm-9">
            <button type="submit" className="btn btn-default">Add User</button>
          </div>
        </div>
      </form>
    </div>
  );
});
