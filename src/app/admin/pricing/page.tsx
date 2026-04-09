"use client"

import { useState, useEffect } from "react"
import { supabase } from "@/lib/supabase"
import { AdminHeader } from "@/components/admin/AdminHeader"
import { Button } from "@/components/ui/Button"
import { Plus, Trash2, Edit, Loader2, Tag } from "lucide-react"
import { PricingPlan } from "@/types"

export default function PricingAdmin() {
  const [plans, setPlans] = useState<PricingPlan[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchPlans()
  }, [])

  async function fetchPlans() {
    setLoading(true)
    const { data, error } = await supabase
      .from("pricing")
      .select("*")
      .order("order", { ascending: true })
    
    if (!error && data) setPlans(data)
    setLoading(false)
  }

  async function deletePlan(id: string) {
    if (!confirm("Are you sure?")) return
    const { error } = await supabase.from("pricing").delete().eq("id", id)
    if (!error) fetchPlans()
  }

  return (
    <div className="space-y-6">
      <AdminHeader 
        title="Pricing Plans" 
        description="Manage your investment packages and features."
      >
        <Button className="rounded-xl flex gap-2">
          <Plus size={18} />
          Add Plan
        </Button>
      </AdminHeader>

      {loading ? (
        <div className="flex justify-center p-20">
          <Loader2 className="w-10 h-10 animate-spin text-secondary" />
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div key={plan.id} className={`bg-white p-8 rounded-[2rem] border ${plan.is_popular ? 'border-secondary ring-2 ring-secondary/10' : 'border-slate-100'} shadow-sm relative group`}>
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-xl font-bold text-primary">{plan.name}</h3>
                  <div className="text-3xl font-extrabold text-primary tracking-tighter mt-1">{plan.price}k</div>
                </div>
                <div className="flex gap-2">
                  <button className="text-slate-400 hover:text-primary transition-colors">
                    <Edit size={16} />
                  </button>
                  <button 
                    onClick={() => deletePlan(plan.id)}
                    className="text-slate-400 hover:text-red-500 transition-colors"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>

              <div className="space-y-2">
                <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Key Features:</p>
                <ul className="text-xs text-muted-foreground space-y-1">
                  {plan.features.slice(0, 3).map((f, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <div className="w-1 h-1 rounded-full bg-secondary" />
                      {f}
                    </li>
                  ))}
                  {plan.features.length > 3 && <li className="italic">+ {plan.features.length - 3} more</li>}
                </ul>
              </div>
            </div>
          ))}

          {plans.length === 0 && !loading && (
            <div className="col-span-full bg-white p-20 rounded-[2rem] border border-dashed text-center text-slate-400 italic">
              No pricing plans found. Define your packages to get started.
            </div>
          )}
        </div>
      )}
    </div>
  )
}
