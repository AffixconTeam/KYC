"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import ApiEndpoint from "@/components/api-endpoint"
import ApiSidebar from "@/components/api-sidebar"
import ApiAuthentication from "@/components/api-authentication"
import ApiIntroduction from "@/components/api-introduction"
import ApiSwaggerTest from "@/components/api-swagger-test"
import { endpoints } from "@/lib/api-endpoints"

export default function ApiDocumentation() {
  const [activeSection, setActiveSection] = useState("introduction")

  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      <ApiSidebar activeSection={activeSection} setActiveSection={setActiveSection} />
      <div className="flex-1 p-4 md:p-6 lg:p-8 overflow-y-auto">
        <div className="mx-auto max-w-5xl">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900 dark:text-slate-50">
            KYC Verification API - UAE & Saudi Arabia
          </h1>

          <div className="space-y-12">
            {activeSection === "introduction" && <ApiIntroduction />}
            {activeSection === "authentication" && <ApiAuthentication />}
            {activeSection === "swagger-test" && <ApiSwaggerTest />}

            {activeSection === "endpoints" && (
              <div className="space-y-12">
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-50">API Endpoints</h2>
                  <p className="text-slate-700 dark:text-slate-300">
                    The following endpoints are available for KYC verification processes in UAE and Saudi Arabia.
                  </p>
                </div>

                <Tabs defaultValue="verification" className="w-full">
                  <TabsList className="mb-6">
                    <TabsTrigger value="verification">Verification</TabsTrigger>
                  </TabsList>

                  <TabsContent value="verification" className="space-y-8">
                    {endpoints
                      .filter((e) => e.category === "verification")
                      .map((endpoint) => (
                        <ApiEndpoint key={endpoint.id} endpoint={endpoint} />
                      ))}
                  </TabsContent>
                </Tabs>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
