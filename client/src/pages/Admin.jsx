import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import API from "../services/api";

function Admin() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [leads, setLeads] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/login");
      return;
    }

    fetchLeads();
  }, []);

  const fetchLeads = async () => {
    try {
      const response = await API.get("/leads");
      setLeads(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const updateStatus = async (id, status) => {
    try {
      await API.put(`/leads/${id}`, {
        status,
      });

      fetchLeads();
    } catch (error) {
      console.log(error);
    }
  };

  const filteredLeads = leads.filter(
    (lead) =>
      lead.name.toLowerCase().includes(search.toLowerCase()) ||
      lead.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="admin-container">
      <h1>Admin Dashboard</h1>

      <button
        onClick={() => {
          if (window.confirm("Are you sure you want to logout?")) {
            localStorage.removeItem("token");
            navigate("/login");
          }
        }}
      >
        Logout
      </button>

      <input
        type="text"
        placeholder="Search by name or email..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {filteredLeads.length === 0 ? (
        <p style={{ textAlign: "center" }}>
          No leads match your search.
        </p>
      ) : (
        filteredLeads.map((lead) => (
          <div key={lead.id} className="lead-card">
            <h3>{lead.name}</h3>

            <p>
              <strong>Email:</strong> {lead.email}
            </p>

            <p>
              <strong>Budget:</strong> {lead.budget}
            </p>

            <p>
              <strong>Message:</strong> {lead.message}
            </p>

            <p>
              <strong>Created:</strong>{" "}
              {new Date(lead.createdAt).toLocaleString()}
            </p>

            <p>
              <strong>Status:</strong>

              <select
                value={lead.status}
                onChange={(e) => updateStatus(lead.id, e.target.value)}
              >
                <option value="New">New</option>
                <option value="Contacted">Contacted</option>
                <option value="Closed">Closed</option>
              </select>
            </p>
          </div>
        ))
      )}
    </div>
  );
}

export default Admin;