"use client"

export function AdminHeader({ title, description, children }: { title: string, description: string, children?: React.ReactNode }) {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-10">
      <div>
        <h1 className="text-3xl font-bold text-primary tracking-tight">{title}</h1>
        <p className="text-muted-foreground">{description}</p>
      </div>
      <div className="flex gap-4">
        {children}
      </div>
    </div>
  )
}
