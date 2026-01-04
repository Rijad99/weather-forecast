// Types
import { WeatherForecastDataType } from '../../../types/WeatherTypes.ts';

// Images
import bgHeroImage from '../../../../../shared/images/desktop-hero-bg.svg';

// Date utils
import { apiFormatOfDate, getCurrentDate } from '../../../../../shared/utils/date-utils.ts';

// Icons
import overcastIcon from '../../../../../shared/icons/svgs/overcast.svg';

// Hooks
import { useDetermineLocationHook } from '../../../useDetermineLocationHook.ts';

interface CityWeatherOverviewProps {
    weatherForecast: WeatherForecastDataType | undefined;
}

export function CityWeatherOverview({ weatherForecast }: CityWeatherOverviewProps) {
    const { location } = useDetermineLocationHook();

    const date = getCurrentDate();

    const city = location?.address.city_district ? location.address.city_district : location?.address.village;
    const country = location?.address.country;

    const indexOfCurrentHour = weatherForecast!.hourly.time.indexOf(apiFormatOfDate());
    const currentTemperature = Math.round(weatherForecast!.hourly.temperature_2m[indexOfCurrentHour]).toString();
    const hourlyUnits = weatherForecast!.hourly_units.temperature_2m;

    console.log('Weather Forecast: ', weatherForecast);

    console.log('Index of current hour: ', indexOfCurrentHour);
    console.log('Current Temperature: ', currentTemperature);

    return (
        <div className="relative">
            <CityWeatherOverviewHeroImage />
            <CityWeatherOverviewContent city={city} country={country} date={date} temperature={currentTemperature} hourlyUnits={hourlyUnits} />
        </div>
    );
}

function CityWeatherOverviewHeroImage() {
    return <img className="w-full h-full object-cover rounded-[var(--radius-24)]" src={bgHeroImage} alt="bg-hero-desktop-image" />;
}

interface CityWeatherOverviewContentProps {
    city: string | undefined;
    country: string | undefined;
    date: string;
    temperature: string;
    hourlyUnits: string;
}

function CityWeatherOverviewContent({ city, country, date, temperature, hourlyUnits }: CityWeatherOverviewContentProps) {
    return (
        <div className="absolute flex justify-between items-center max-[1080px]:flex-col top-0 bottom-0 left-0 right-0 p-[var(--spacing-24)] max-[550px]:text-center max-[550px]:justify-center max-[550px]:gap-[var(--spacing-32)]">
            <LocationAndDate city={city} country={country} date={date} />
            <CurrentTemperature icon={overcastIcon} temperature={temperature} hourlyUnits={hourlyUnits} />
        </div>
    );
}

interface LocationAndDateProps {
    city: string | undefined;
    country: string | undefined;
    date: string;
}

function LocationAndDate({ city, country, date }: LocationAndDateProps) {
    return (
        <div className="max-[1080px]:text-center">
            <h1 className="text-(length:--fs-32) font-(weight:--fw-semi-bold) text-[var(--neutral-0)] max-[650px]:text-(length:--fs-24) max-[550px]:text-(length:--fs-20)">{`${city}, ${country}`}</h1>
            <span className="text-[var(--neutral-0)] max-[550px]:text-(length:--fs-14)">{date}</span>
        </div>
    );
}

interface CurrentTemperatureProps {
    icon: string;
    temperature: string;
    hourlyUnits: string;
}

function CurrentTemperature({ icon, temperature, hourlyUnits }: CurrentTemperatureProps) {
    return (
        <div className="flex items-center gap-[var(--spacing-24)]">
            <img className="w-[96px] max-[1000px]:w-[66px]" src={icon} alt={'current-weather-icon'} />
            <span className="text-(length:--fs-96) text-[var(--neutral-0)] max-[1000px]:text-(length:--fs-52)">{`${temperature} ${hourlyUnits}`}</span>
        </div>
    );
}
