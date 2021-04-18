import { container } from 'tsyringe';

import { IDateProvider } from './DateProvider/models/IDateProvider';
import { DayJSProvider } from './DateProvider/implementations/DayJSProvider';

container.registerSingleton<IDateProvider>('DateProvider', DayJSProvider);