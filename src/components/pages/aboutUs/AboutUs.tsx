import CustomTable from "@/components/common/CustomTable";

export default function AboutUs() {
  return (
    <section className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold text-foreground">About Us</h2>
        <p className="mt-1 text-sm text-muted-foreground">
          Learn more about our health and wellness platform
        </p>
      </div>

      <article className="rounded-lg border border-border bg-card p-6 text-card-foreground">
        <p className="text-muted-foreground">
          Your about us information will appear here. Update this content to provide details about your organization.
        </p>
      </article>

      <CustomTable />
    </section>
  );
}
