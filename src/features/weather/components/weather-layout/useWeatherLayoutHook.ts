export function useWeatherLayoutHook() {
    function determineGridLayout(isWeatherForecastError: boolean) {
        let gridLayoutStyle = '';

        if (isWeatherForecastError) {
            gridLayoutStyle = 'grid-rows-[45px_1fr]';
        } else {
            gridLayoutStyle = 'grid-rows-[45px_auto_50px_1fr] max-[700px]:grid-rows-[45px_auto_auto_1fr]';
        }

        return gridLayoutStyle;
    }

    return {
        determineGridLayout,
    };
}
