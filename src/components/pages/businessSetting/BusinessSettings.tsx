import CustomTable from "@/components/common/CustomTable";

export default function BusinessSettings() {
  return (
    <section className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold text-foreground">Business Settings</h2>
        <p className="mt-1 text-sm text-muted-foreground">
          Manage and track your business settings
        </p>
      </div>

      <article className="rounded-lg border border-border bg-card p-6 text-card-foreground">
        <p className="text-muted-foreground">
          Your business settings will appear here. Update these settings to customize your platform.
        </p>
      </article>

      <CustomTable />
    </section>
  );
}
