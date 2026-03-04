import CustomTable from "@/components/common/CustomTable";

export default function TermsConditions() {
  return (
    <section className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold text-foreground">Terms & Conditions</h2>
        <p className="mt-1 text-sm text-muted-foreground">
          Manage and track your terms and conditions
        </p>
      </div>

      <article className="rounded-lg border border-border bg-card p-6 text-card-foreground">
        <p className="text-muted-foreground">
          Your terms and conditions will appear here. Update this content to reflect your platform's terms and conditions.
        </p>
      </article>

      <CustomTable />
    </section>
  );
}
