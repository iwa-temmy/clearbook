import WelcomeCard from "./components/welcome-card";
import MetricCards from "./components/metric-cards";
import ForecastSection from "./components/forecast-section";
import AttentionSection from "./components/attention-section";
import SmartInsights from "./components/smart-insights";

export default function Page() {
  return (
    <div className="flex flex-col gap-6 overflow-auto p-6">
      <WelcomeCard />
      <MetricCards />
      <ForecastSection />
      <AttentionSection />
      <SmartInsights />
    </div>
  );
}
