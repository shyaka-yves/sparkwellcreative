import { createClient } from "@/lib/supabase-server"

export default async function AdminDashboard() {
  const supabase = await createClient()
  
  // Real stats would be fetched here
  const { count: portfolioCount } = await supabase.from('portfolio').select('*', { count: 'exact', head: true })
  const { count: teamCount } = await supabase.from('team').select('*', { count: 'exact', head: true })
  const { count: contactCount } = await supabase.from('contacts').select('*', { count: 'exact', head: true })

  const stats = [
    { title: "Portfolio Items", value: portfolioCount || 0, href: "/admin/portfolio" },
    { title: "Team Members", value: teamCount || 0, href: "/admin/team" },
    { title: "Form Submissions", value: contactCount || 0, href: "/admin/contacts" },
  ]

  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-3xl font-bold text-primary tracking-tight">Dashboard Overview</h1>
        <p className="text-muted-foreground">Welcome back, Admin. Here's what's happening today.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {stats.map((stat, idx) => (
          <div key={idx} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-all">
            <h3 className="text-slate-500 text-sm font-bold uppercase tracking-widest mb-2">{stat.title}</h3>
            <p className="text-5xl font-extrabold text-primary tracking-tighter">{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="bg-white p-10 rounded-[2rem] border border-slate-100 shadow-sm">
        <h2 className="text-xl font-bold text-primary mb-6">Recent Activity</h2>
        <p className="text-slate-400 text-sm italic">Connect your database to see live updates.</p>
      </div>
    </div>
  )
}
