import ReactGA from "react-ga";

const useAnalyticsEventTracker = (
  category = "Unknown category"
): ((action?: string, label?: string) => void) => {
  const eventTracker = (action = "test action", label = "test label") => {
    ReactGA.event({ category, action, label });
  };
  return eventTracker;
};
export default useAnalyticsEventTracker;
