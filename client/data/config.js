import Raven from "raven-js";

const sentry_key = "8da75c53fea9405c897db623d7575572";
const sentry_app = "1427119";
export const sentry_url = `https://${sentry_key}@app.getsentry.com/${sentry_app}`;

export function logException(ex, context) {
  Raven.captureException(ex, {
    extra: context
  });
  /*eslint no-console:0*/
  window && window.console && console.error && console.error(ex);
}

// https://8da75c53fea9405c897db623d7575572@sentry.io/1427119
