import CustomTable from "@/components/common/CustomTable";

export default function PatientManagement() {
  return (
    <section className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold text-foreground">Patient Management</h2>
        <p className="mt-1 text-sm text-muted-foreground">
          Manage and track your patients
        </p>
      </div>

      <article className="rounded-lg border border-border bg-card p-6 text-card-foreground">
        <p className="text-muted-foreground">
          Your patients will appear here. Add new patients to get started.
        </p>
      </article>

      <CustomTable />
    </section>
  );
}
