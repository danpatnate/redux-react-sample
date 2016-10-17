import React from 'react';
import { connect } from 'react-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { createChallenge } from '../actions/challenges';
import config from '../config/default';

injectTapEventPlugin();

export default connect()(({ dispatch }) => {
  let title;
  let description;
  const clientData = [{}];
  const startDate = new Date();
  const endDate = new Date();
  const owner = {
    userId: '377500e2-6b9a-433f-b25a-bf5288823aea',
    email: 'dnate@h2wellness.com',
    phone: '5555555555',
    userName: 'jdoe',
    clientId: config.challenges.id,
    clientKey: '1',
    clientName: config.challenges.client,
  };

  return (
    <div className="partial-wrapper">
      <h1 className="page-header">Create Challenges</h1>
      <form
        className="form-horizontal"
        onSubmit={
          e => {
            e.preventDefault();
            if (!title.value || !description.value) {
              return;
            }
            dispatch(createChallenge({
              title: title.value,
              description: description.value,
              clientData,
              owner,
              startDate,
              endDate,
            }));
            title.value = '';
            description.value = '';
            startDate.value = new Date();
            endDate.value = new Date();
          }
        }
      >
        <div className="form-group">
          <label className="col-sm-1 control-label" htmlFor="title">Challenge Title</label>
          <div className="col-sm-10">
            <input
              name="title"
              type="text"
              className="form-control"
              ref={node => {
                title = node;
              }}
            />
          </div>
        </div>
        <div className="form-group">
          <label className="col-sm-1 control-label" htmlFor="desc">Description</label>
          <div className="col-sm-10">
            <input
              name="desc"
              type="text"
              className="form-control"
              ref={node => {
                description = node;
              }}
            />
          </div>
        </div>
        <div className="form-group">
          <div className="col-sm-offset-1 col-sm-10">
            <button type="submit" className="btn btn-default">Create Challenge</button>
          </div>
        </div>
      </form>
    </div>
  );
});
