import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { Button } from "@/components/ui/button";
import { Phone, Mail, Calendar, Users, BarChart2, Eye, LogOut, RefreshCw, AlertTriangle } from "lucide-react";

type Booking = {
  id: string;
  full_name: string;
  email: string;
  phone: string;
  company?: string;
  service_type: string;
  preferred_date?: string;
  message: string;
  status: string;
  created_at: string;
};

type Visit = {
  id: string;
  page: string;
  visited_at: string;
};

const statusColors: Record<string, string> = {
  pending: "bg-yellow-100 text-yellow-800 border-yellow-200",
  confirmed: "bg-blue-100 text-blue-800 border-blue-200",
  completed: "bg-green-100 text-green-800 border-green-200",
  cancelled: "bg-red-100 text-red-800 border-red-200",
};

const AdminPage = () => {
  const [authed, setAuthed] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [tab, setTab] = useState<"bookings" | "visits">("bookings");
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [visits, setVisits] = useState<Visit[]>([]);
  const [loading, setLoading] = useState(false);

  const ADMIN_PASSWORD = import.meta.env.VITE_ADMIN_PASSWORD || "briq@admin2024";

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setAuthed(true);
      setError("");
    } else {
      setError("Incorrect password.");
    }
  };

  const fetchData = async () => {
    if (!supabase) return;
    setLoading(true);
    try {
      const [bookRes, visitRes] = await Promise.all([
        supabase.from("booking_calls").select("*").order("created_at", { ascending: false }),
        supabase.from("site_visits").select("*").order("visited_at", { ascending: false }).limit(100),
      ]);
      if (bookRes.data) setBookings(bookRes.data);
      if (visitRes.data) setVisits(visitRes.data);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (authed) fetchData();
  }, [authed]);

  const updateStatus = async (id: string, status: string) => {
    if (supabase) {
      await supabase.from("booking_calls").update({ status }).eq("id", id);
    }
    setBookings((prev) => prev.map((b) => (b.id === id ? { ...b, status } : b)));
  };

  const formatDate = (s: string) =>
    new Date(s).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric", hour: "2-digit", minute: "2-digit" });

  if (!authed) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-secondary pt-20">
        <div className="w-full max-w-sm mx-auto px-6">
          <div className="text-center mb-8">
            <h1 className="heading-md mb-2">Admin Access</h1>
            <p className="body-sm">BriQ Engineering dashboard</p>
          </div>
          <form onSubmit={handleLogin} className="space-y-4">
            <input
              type="password"
              placeholder="Enter admin password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full h-12 rounded-xl bg-background border border-border text-sm px-4 focus:outline-none focus:ring-2 focus:ring-ring"
            />
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <Button type="submit" className="w-full" size="lg">Login</Button>
          </form>
        </div>
      </main>
    );
  }

  const pendingCount = bookings.filter((b) => b.status === "pending").length;
  const totalVisits = visits.length;
  const uniquePages = [...new Set(visits.map((v) => v.page))].length;

  return (
    <main className="min-h-screen bg-background pt-20">
      <div className="container-site px-5 sm:px-8 lg:px-16 py-10">
        {/* Supabase not configured warning */}
        {!supabase && (
          <div className="mb-8 flex items-start gap-3 bg-yellow-50 border border-yellow-200 rounded-2xl p-5">
            <AlertTriangle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-semibold text-yellow-800">Supabase not configured</p>
              <p className="text-xs text-yellow-700 mt-1">Add <code className="bg-yellow-100 px-1 rounded">VITE_SUPABASE_URL</code> and <code className="bg-yellow-100 px-1 rounded">VITE_SUPABASE_ANON_KEY</code> to your <code className="bg-yellow-100 px-1 rounded">.env</code> file, then run the SQL in <code className="bg-yellow-100 px-1 rounded">supabase-setup.sql</code>. Bookings and visitor data will appear here once connected.</p>
            </div>
          </div>
        )}
        {/* Header */}
        <div className="flex items-center justify-between mb-10">
          <div>
            <h1 className="heading-md">Admin Dashboard</h1>
            <p className="body-sm mt-1">Manage bookings and visitor analytics</p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline" size="sm" onClick={fetchData} disabled={loading}>
              <RefreshCw className={`w-4 h-4 ${loading ? "animate-spin" : ""}`} /> Refresh
            </Button>
            <Button variant="ghost" size="sm" onClick={() => setAuthed(false)}>
              <LogOut className="w-4 h-4" /> Logout
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {[
            { icon: Calendar, label: "Total Bookings", value: bookings.length },
            { icon: Users, label: "Pending Calls", value: pendingCount },
            { icon: Eye, label: "Page Views", value: totalVisits },
            { icon: BarChart2, label: "Unique Pages", value: uniquePages },
          ].map((s) => (
            <div key={s.label} className="bg-secondary rounded-2xl p-5">
              <s.icon className="w-5 h-5 text-accent mb-3" />
              <p className="text-2xl font-bold font-display">{s.value}</p>
              <p className="text-xs text-muted-foreground mt-1">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div className="flex gap-1 mb-8 bg-secondary p-1 rounded-xl w-fit">
          {(["bookings", "visits"] as const).map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`px-5 py-2 rounded-lg text-sm font-medium transition-all capitalize ${
                tab === t ? "bg-foreground text-background" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {t === "bookings" ? `Booked Calls (${bookings.length})` : `Visitor Log (${visits.length})`}
            </button>
          ))}
        </div>

        {/* Bookings Table */}
        {tab === "bookings" && (
          <div className="space-y-4">
            {bookings.length === 0 && !loading && (
              <div className="text-center py-16 text-muted-foreground">No bookings yet.</div>
            )}
            {bookings.map((b) => (
              <div key={b.id} className="bg-secondary rounded-2xl p-6 border border-border">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="font-semibold text-base">{b.full_name}</h3>
                    <p className="text-sm text-muted-foreground">{b.company}</p>
                  </div>
                  <span className={`text-xs font-medium px-3 py-1 rounded-full border capitalize ${statusColors[b.status] || ""}`}>
                    {b.status}
                  </span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4 text-sm">
                  <a href={`tel:${b.phone}`} className="flex items-center gap-2 text-muted-foreground hover:text-foreground">
                    <Phone className="w-3.5 h-3.5 text-accent" /> {b.phone}
                  </a>
                  <a href={`mailto:${b.email}`} className="flex items-center gap-2 text-muted-foreground hover:text-foreground">
                    <Mail className="w-3.5 h-3.5 text-accent" /> {b.email}
                  </a>
                  {b.preferred_date && (
                    <span className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="w-3.5 h-3.5 text-accent" /> {b.preferred_date}
                    </span>
                  )}
                </div>
                <div className="mb-4 text-sm">
                  <span className="label-sm mr-2">Service:</span>{b.service_type}
                </div>
                <p className="text-sm text-muted-foreground mb-4 bg-background rounded-xl p-3">{b.message}</p>
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <p className="text-xs text-muted-foreground">{formatDate(b.created_at)}</p>
                  <div className="flex gap-2 flex-wrap">
                    {["pending", "confirmed", "completed", "cancelled"].map((s) => (
                      <button
                        key={s}
                        onClick={() => updateStatus(b.id, s)}
                        className={`text-xs px-3 py-1 rounded-full border capitalize transition-all ${
                          b.status === s
                            ? "bg-foreground text-background border-foreground"
                            : "text-muted-foreground border-border hover:border-foreground hover:text-foreground"
                        }`}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Visits Table */}
        {tab === "visits" && (
          <div className="overflow-x-auto rounded-2xl border border-border">
            <table className="w-full text-sm">
              <thead className="bg-secondary border-b border-border">
                <tr>
                  <th className="text-left px-4 py-3 text-xs label-sm">Page</th>
                  <th className="text-left px-4 py-3 text-xs label-sm">Time</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {visits.length === 0 && (
                  <tr><td colSpan={2} className="text-center py-8 text-muted-foreground">No visits tracked yet.</td></tr>
                )}
                {visits.map((v) => (
                  <tr key={v.id} className="hover:bg-secondary/50 transition-colors">
                    <td className="px-4 py-3 font-medium">{v.page}</td>
                    <td className="px-4 py-3 text-muted-foreground">{formatDate(v.visited_at)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </main>
  );
};

export default AdminPage;
