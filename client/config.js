import Raven from "raven-js";

const sentry_key = "7f78e646524d11e9b8e04201c0a8d02b";
const sentry_app = "reduxstudy";
export const sentry_url =
  "https://" + sentry_key + "@app.getsentry.com/" + sentry_app + "]";

export function logException(ex, context) {
  Raven.captureException(ex, {
    extra: context
  });
  /*eslin no-console:0*/
  window && window.console && console.error && console.error(ex);
}

// import * as Sentry from '@sentry/browser';

// // Sentry.init({
// //  dsn: "https://8da75c53fea9405c897db623d7575572@sentry.io/1427119"
// // });
// // should have been called before using it here
// // ideally before even rendering your react app

// class ExampleBoundary extends Component {
//     constructor(props) {
//         super(props);
//         this.state = { error: null };
//     }

//     componentDidCatch(error, errorInfo) {
//       this.setState({ error });
//       Sentry.withScope(scope => {
//         Object.keys(errorInfo).forEach(key => {
//           scope.setExtra(key, errorInfo[key]);
//         });
//         Sentry.captureException(error);
//       });
//     }

//     render() {
//         if (this.state.error) {
//             //render fallback UI
//             return (
//               <a onClick={() => Sentry.showReportDialog()}>Report feedback</a>
//             );
//         } else {
//             //when there's not an error, render children untouched
//             return this.props.children;
//         }
//     }
// }
