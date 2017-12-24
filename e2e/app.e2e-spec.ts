import { ReduxPage } from './app.po';

describe('redux App', () => {
  let page: ReduxPage;

  beforeEach(() => {
    page = new ReduxPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
