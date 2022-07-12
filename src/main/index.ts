import { App } from './app';
import { EventEmmiter } from './event';
import { AppState } from './enum';

const application = new App({});

setImmediate(async () => {
  try {
    const event = EventEmmiter.getInstance();

    event.on(AppState.RESTART, async (data: any) => {
      await application.restart();
    });
    await application.start();
  } catch (error) {
    // eslint-disable-next-line
    console.error({ error });
  }
});
