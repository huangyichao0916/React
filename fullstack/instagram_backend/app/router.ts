import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router } = app;
  //controller  url -> controller -> render view
  router.get('/', controller.home.index);
};
