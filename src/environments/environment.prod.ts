import { IEnv } from '~interfaces/env';

export const environment: IEnv = {
  production: true,
  domain: 'http://localhost:4200',
  randomUserApi: 'https://randomuser.me/api/',
  randomQuotableApi: 'https://api.quotable.io/random',
  openMeteoApi: 'https://api.open-meteo.com/v1/forecast',
};
