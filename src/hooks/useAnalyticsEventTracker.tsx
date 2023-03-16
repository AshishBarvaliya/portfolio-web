import ReactGA from "react-ga4";

const useAnalyticsEventTracker = (
  category = "Unknown category"
): ((action?: string, label?: string) => void) => {
  const eventTracker = (action = "test action", label = "clicked") => {
    ReactGA.event({ category, action, label });
  };
  return eventTracker;
};
export default useAnalyticsEventTracker;
