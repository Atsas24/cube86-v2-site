import Image from "next/image";

export function DashboardMockup() {
  return (
    <Image
      src="/workflow-dashboard.jpg"
      alt="Automation workflow dashboard"
      width={1380}
      height={776}
      className="w-full h-auto block"
      priority
    />
  );
}
