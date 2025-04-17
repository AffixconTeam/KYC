import type { Metadata } from "next"
import ApiDocumentation from "@/components/api-documentation"

export const metadata: Metadata = {
  title: "KYC Verification API Documentation",
  description: "Complete API documentation for the KYC verification system",
}

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950">
      <ApiDocumentation />
    </main>
  )
}
