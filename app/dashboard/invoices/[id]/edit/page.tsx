import { invoices } from "@/app/lib/placeholder-data";
import Breadcrumbs from "@/app/ui/invoices/breadcrumbs";
import Form from "@/app/ui/invoices/edit-form";
import { fetchInvoiceById, fetchCustomers } from "@/app/lib/data";

type Props = {
    params: Promise<{ id: string }>
}

export default async function Page(props: Props) {
    const params = await props.params;
    const id = params.id;
    const [invoice, customers] = await Promise.all([
        fetchInvoiceById(id),
        fetchCustomers(),
    ]);

    return (
        <main>
            <Breadcrumbs
                breadcrumbs={[
                    { label: "Invoices", href: "/dashboard/invoices" },
                    { label: "Invoices", href: `/dashboard/invoices/${id}/edit`, active: true },
                ]} />
            <Form invoice={invoice} customers={customers} />
        </main>
    );
}