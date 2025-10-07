// Types
import { WeatherForecastDataType } from '../../../types/WeatherTypes.ts';

// Images
import bgHeroImage from '../../../../../shared/images/desktop-hero-bg.svg';

// Date utils
import { getCurrentDate } from '../../../../../shared/utils/date-utils.ts';

// Icons
import overcastIcon from '../../../../../shared/icons/svgs/overcast.svg';

// Hooks
import { useDetermineLocationHook } from '../../../useDetermineLocationHook.ts';

// Tailwind Breakpoints
import { breakpoints } from '../../../../../styling/tailwind-config.ts';

interface CityWeatherOverviewProps {
    weatherForecast: WeatherForecastDataType | undefined;
}

export function CityWeatherOverview({ weatherForecast }: CityWeatherOverviewProps) {
    const { location } = useDetermineLocationHook();

    const date = getCurrentDate();

    const city = location?.address.city_district ? location.address.city_district : location?.address.village;
    const country = location?.address.country;

    // TODO - Remove log after its actual usage
    console.log(weatherForecast);

    return (
        <div className="relative">
            <CityWeatherOverviewHeroImage />
            <CityWeatherOverviewContent city={city} country={country} date={date} />
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
}

function CityWeatherOverviewContent({ city, country, date }: CityWeatherOverviewContentProps) {
    return (
        <div
            className={`absolute flex justify-between items-center ${breakpoints.max_1080}:flex-col top-0 bottom-0 left-0 right-0 p-[var(--spacing-24)] ${breakpoints.max_550}:text-center ${breakpoints.max_550}:justify-center ${breakpoints.max_550}:gap-[var(--spacing-32)]`}
        >
            <LocationAndDate city={city} country={country} date={date} />
            <CurrentTemperature icon={overcastIcon} temperature={'20°'} />
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
        <div className={`${breakpoints.max_1000}:text-center`}>
            <h1
                className={`text-(length:--fs-32) font-(weight:--fw-semi-bold) text-[var(--neutral-0)] ${breakpoints.max_650}:text-(length:--fs-24) ${breakpoints.max_650}:text-(length:--fs-20)`}
            >{`${city}, ${country}`}</h1>
            <span className={`text-[var(--neutral-0)] ${breakpoints.max_550}:text-(length:--fs-14)`}>{date}</span>
        </div>
    );
}

interface CurrentTemperatureProps {
    icon: string;
    temperature: string;
}

function CurrentTemperature({ icon, temperature }: CurrentTemperatureProps) {
    return (
        <div className="flex items-center gap-[var(--spacing-24)]">
            <img className={`w-[96px] ${breakpoints.max_1000}:w-[66px]`} src={icon} alt={'current-weather-icon'} />
            <span className={`text-(length:--fs-96) text-[var(--neutral-0)] ${breakpoints.max_1000}:text-(length:--fs-52)`}>{temperature}</span>
        </div>
    );
}
