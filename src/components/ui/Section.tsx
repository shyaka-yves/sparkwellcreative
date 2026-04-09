"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  container?: boolean
  paddingSize?: "none" | "sm" | "md" | "lg" | "xl"
}

export function Section({
  children,
  className,
  container = true,
  paddingSize = "lg",
  ...props
}: SectionProps) {
  const paddingClasses = {
    none: "",
    sm: "py-10 md:py-16",
    md: "py-16 md:py-24",
    lg: "py-24 md:py-32",
    xl: "py-32 md:py-48",
  }

  return (
    <section className={cn(paddingClasses[paddingSize], className)} {...props}>
      {container ? (
        <div className="max-w-7xl mx-auto px-6">
          {children}
        </div>
      ) : (
        children
      )}
    </section>
  )
}

export function SectionHeader({
  title,
  subtitle,
  description,
  centered = false,
  className,
}: {
  title: string
  subtitle?: string
  description?: string
  centered?: boolean
  className?: string
}) {
  return (
    <div className={cn("max-w-3xl mb-12 md:mb-20", centered && "mx-auto text-center", className)}>
      {subtitle && (
        <span className="text-secondary font-bold uppercase tracking-[0.2em] text-[10px] block mb-4">
          {subtitle}
        </span>
      ) }
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-primary mb-6">
        {title}
      </h2>
      {description && (
        <p className="text-base text-muted-foreground leading-relaxed">
          {description}
        </p>
      )}
    </div>
  )
}
