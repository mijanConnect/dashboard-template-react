import CustomTable from "@/components/common/CustomTable";

export default function ContentManagement() {
  return (
    <section className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold text-foreground">Content Management</h2>
        <p className="mt-1 text-sm text-muted-foreground">
          Manage and track your content
        </p>
      </div>

      <article className="rounded-lg border border-border bg-card p-6 text-card-foreground">
        <p className="text-muted-foreground">
          Your content will appear here. Create and manage new content to get
          started.
        </p>
      </article>

      <CustomTable />
    </section>
  );
}
