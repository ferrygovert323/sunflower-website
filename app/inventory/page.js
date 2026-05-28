import AppShell from "../components/AppShell";
import PageHeader from "../components/PageHeader";
import StatCard from "../components/StatCard";

const products = [
  {
    name: "Sunflower Oil 1L",
    category: "Cooking Oil",
    stock: 42,
    status: "Available",
  },
  {
    name: "Sunflower Seeds 250g",
    category: "Seeds",
    stock: 9,
    status: "Low Stock",
  },
  {
    name: "Honey Sunflower Soap",
    category: "Personal Care",
    stock: 0,
    status: "Out of Stock",
  },
  {
    name: "Sunflower Bouquet",
    category: "Flowers",
    stock: 18,
    status: "Available",
  },
];

export default function InventoryPage() {
  return (
    <AppShell>
      <PageHeader
        title="Inventory"
        subtitle="Monitor product stock and availability"
      />

      <div className="row g-3 mb-4">
        <div className="col-md-4">
          <StatCard
            label="Products Ready"
            value="67"
            icon="bi-box-seam"
            color="bg-success"
          />
        </div>
        <div className="col-md-4">
          <StatCard
            label="Need Restock"
            value="14"
            icon="bi-exclamation-triangle"
            color="bg-warning"
          />
        </div>
        <div className="col-md-4">
          <StatCard
            label="Unavailable"
            value="7"
            icon="bi-x-circle"
            color="bg-danger"
          />
        </div>
      </div>

      <div className="card-box">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h6 className="mb-0">Product List</h6>
          <button className="btn btn-success btn-sm" type="button">
            Add Product
          </button>
        </div>

        <div className="table-responsive">
          <table className="table align-middle mb-0">
            <thead>
              <tr>
                <th>Product</th>
                <th>Category</th>
                <th>Stock</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.name}>
                  <td>{product.name}</td>
                  <td>{product.category}</td>
                  <td>{product.stock}</td>
                  <td>
                    <span
                      className={`badge ${
                        product.status === "Available"
                          ? "text-bg-success"
                          : product.status === "Low Stock"
                            ? "text-bg-warning"
                            : "text-bg-danger"
                      }`}
                    >
                      {product.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </AppShell>
  );
}
