import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import { Button, CircularProgress } from '@material-ui/core';
import { TextField } from 'formik-material-ui';
import { getTweetCreatedTime } from '../../apis/twitter';
import { extractTweetId, formatDateTime } from '../../utils/helpers';

function TweetsTime() {
  let [displayDateTime, setDisplayDateTime] = useState('');

  let values = { link: '' };
  return (
    <div>
      <Formik
        initialValues={values}
        validate={(values) => {
          const errors = {};
          if (!values.link) {
            errors.link = 'The link is required';
          }
          return errors;
        }}
        onSubmit={async (values, { setSubmitting }) => {
          setSubmitting(false);
          const tweetId = extractTweetId(values.link);
          const createdAt = await getTweetCreatedTime(tweetId);
          setDisplayDateTime(formatDateTime(createdAt));
        }}
      >
        {({ submitForm, isSubmitting, resetForm }) => (
          <Form>
            <Field
              component={TextField}
              name="link"
              type="text"
              label="Link"
              variant="outlined"
              fullWidth
            />
            {isSubmitting && <CircularProgress />}
            <br />
            <Button
              variant="contained"
              color="primary"
              disabled={isSubmitting}
              onClick={submitForm}
            >
              Submit
            </Button>
            <Button
              variant="contained"
              color="default"
              disabled={isSubmitting}
              onClick={() => {
                resetForm();
                setDisplayDateTime('');
              }}
            >
              Clear
            </Button>
          </Form>
        )}
      </Formik>
      <h2>The UTC time of this tweet is: {displayDateTime}</h2>
    </div>
  );
}

export default TweetsTime;
