import CustomTable from "@/components/common/CustomTable";

export default function Transactions() {
  return (
    <section className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold text-foreground">Transactions</h2>
        <p className="mt-1 text-sm text-muted-foreground">
          Manage and track your health transactions
        </p>
      </div>

      <article className="rounded-lg border border-border bg-card p-6 text-card-foreground">
        <p className="text-muted-foreground">
          Your transactions will appear here. View and manage your transaction
          history.
        </p>
      </article>

      <CustomTable />
    </section>
  );
}
