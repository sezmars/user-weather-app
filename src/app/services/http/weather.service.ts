import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

import { environment } from '~environments/environment';
import { IHourlyBase, IWeather, IWeatherBase } from '~interfaces/weather';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private http: HttpClient) {}

  public getWeather(
    latitude: string,
    longitude: string,
    timezone: string
  ): Observable<Partial<IWeather>> {
    return this.http
      .get<{
        daily: Partial<IWeatherBase>;
        hourly: IHourlyBase;
      }>(
        `${environment.openMeteoApi}?latitude=${latitude}&longitude=${longitude}&timezone=${timezone}&daily=weathercode,temperature_2m_max,temperature_2m_min&hourly=temperature_2m,relativehumidity_2m,apparent_temperature,surface_pressure,windspeed_10m`
      )
      .pipe(
        map(data => {
          const {
            temperature_2m_max: max,
            temperature_2m_min: min,
            time: dates,
            weathercode: codes,
          } = data.daily;

          return { max, min, dates, codes, hourly: data.hourly };
        })
      );
  }
}
