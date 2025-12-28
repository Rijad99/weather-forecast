// TanStack
import { useQuery } from '@tanstack/react-query';

// Services
import { WeatherService } from './services/WeatherService.ts';

// Types
import { WeatherForecastDataType } from './types/WeatherTypes.ts';

export function useWeatherHook() {
    const weatherForecast = useQuery({
        queryKey: ['weather-forecast'],
        queryFn: async (): Promise<WeatherForecastDataType> => {
            return await WeatherService.getWeatherData();
        },
        retry: false,
        refetchOnWindowFocus: false,
    });

    return {
        ...weatherForecast,
        weatherForecastData: weatherForecast.data,
        isWeatherForecastFetching: weatherForecast.isFetching,
        isWeatherForecastError: weatherForecast.isError,
    };
}
