export interface WeatherForecastDataType {
    latitude: number;
    longitude: number;
    timezone: string;
    timezone_abbreviation: string;
    elevation: number;
    hourly_units: {
        time: string;
        temperature_2m: string;
    };
    hourly: {
        time: string[];
        temperature_2m: number[];
    };
    utc_offset_seconds: number;
    generationtime_ms: number;
}
