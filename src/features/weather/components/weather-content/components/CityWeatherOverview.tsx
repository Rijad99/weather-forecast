// Types
import { WeatherForecastDataType } from '../../../types/WeatherTypes.ts';

// Images
import bgHeroImage from '../../../../../images/desktop-hero-bg.svg';

// Date utils
import { getCurrentDate } from '../../../../../common/date-utils.ts';

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

    console.log(weatherForecast);

    return (
        <div className="relative">
            <CityWeatherOverviewHeroImage />
            <CityWeatherOverviewContent city={city} country={country} date={date} />
        </div>
    );
}

function CityWeatherOverviewHeroImage() {
    return (
        <img
            className="w-full h-full object-cover rounded-[var(--radius-24)]"
            src={bgHeroImage}
            alt="bg-hero-desktop-image"
        />
    );
}

interface CityWeatherOverviewContentProps {
    city: string | undefined;
    country: string | undefined;
    date: string;
}

function CityWeatherOverviewContent({ city, country, date }: CityWeatherOverviewContentProps) {
    return (
        <div className="absolute flex justify-between items-center top-0 bottom-0 left-0 right-0 p-[var(--spacing-24)] max-[550px]:text-center max-[550px]:justify-center">
            <div>
                <h1 className="text-(length:--fs-32) font-(weight:--fw-semi-bold) text-[var(--neutral-0)] max-[650px]:text-(length:--fs-24) max-[550px]:text-(length:--fs-20)">
                    {`${city}, ${country}`}
                </h1>
                <span className="text-[var(--neutral-0)] max-[550px]:text-(length:--fs-14)">{date}</span>
            </div>
        </div>
    );
}
