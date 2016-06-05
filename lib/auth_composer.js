export function authComposer({context}, onData) {
  const {Meteor} = context();

  onData(null, {
    loggedIn: Boolean(Meteor.userId()),
    loggingIn: Meteor.loggingIn()
  });
}
