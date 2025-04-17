"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import type { Endpoint } from "@/lib/api-endpoints"
import { CopyBlock, dracula } from "react-code-blocks"

interface ApiEndpointProps {
  endpoint: Endpoint
}

export default function ApiEndpoint({ endpoint }: ApiEndpointProps) {
  const [activeTab, setActiveTab] = useState("request")

  const getMethodColor = (method: string) => {
    switch (method.toLowerCase()) {
      case "get":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
      case "post":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
      case "put":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300"
      case "delete":
        return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300"
    }
  }

  return (
    <Card className="border border-slate-200 dark:border-slate-800">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Badge className={`${getMethodColor(endpoint.method)} font-mono uppercase`}>{endpoint.method}</Badge>
            <CardTitle className="text-xl font-bold">{endpoint.name}</CardTitle>
          </div>
        </div>
        <CardDescription className="mt-2 text-slate-700 dark:text-slate-300">{endpoint.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="mb-4">
          <div className="font-mono text-sm p-2 bg-slate-100 dark:bg-slate-800 rounded-md">{endpoint.path}</div>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="mb-4">
            <TabsTrigger value="request">Request</TabsTrigger>
            <TabsTrigger value="response">Response</TabsTrigger>
            {endpoint.errors && <TabsTrigger value="errors">Errors</TabsTrigger>}
          </TabsList>

          <TabsContent value="request" className="space-y-4">
            {endpoint.parameters && endpoint.parameters.length > 0 && (
              <div className="space-y-2">
                <h4 className="font-semibold">Parameters</h4>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-slate-100 dark:bg-slate-800 text-left">
                        <th className="p-2 border border-slate-200 dark:border-slate-700">Name</th>
                        <th className="p-2 border border-slate-200 dark:border-slate-700">Type</th>
                        <th className="p-2 border border-slate-200 dark:border-slate-700">Required</th>
                        <th className="p-2 border border-slate-200 dark:border-slate-700">Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      {endpoint.parameters.map((param, index) => (
                        <tr key={index} className="border-b border-slate-200 dark:border-slate-700">
                          <td className="p-2 border border-slate-200 dark:border-slate-700 font-mono text-sm">
                            {param.name}
                          </td>
                          <td className="p-2 border border-slate-200 dark:border-slate-700">{param.type}</td>
                          <td className="p-2 border border-slate-200 dark:border-slate-700">
                            {param.required ? (
                              <Badge
                                variant="outline"
                                className="bg-red-50 text-red-700 border-red-200 dark:bg-red-900 dark:text-red-300 dark:border-red-800"
                              >
                                Required
                              </Badge>
                            ) : (
                              <Badge
                                variant="outline"
                                className="bg-slate-50 text-slate-700 border-slate-200 dark:bg-slate-900 dark:text-slate-300 dark:border-slate-800"
                              >
                                Optional
                              </Badge>
                            )}
                          </td>
                          <td className="p-2 border border-slate-200 dark:border-slate-700">{param.description}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {endpoint.requestExample && (
              <div className="space-y-2">
                <h4 className="font-semibold">Example Request</h4>
                <div className="rounded-md overflow-hidden">
                  <CopyBlock
                    text={endpoint.requestExample}
                    language="json"
                    showLineNumbers={false}
                    theme={dracula}
                    wrapLines
                  />
                </div>
              </div>
            )}
          </TabsContent>

          <TabsContent value="response" className="space-y-4">
            {endpoint.responseExample && (
              <div className="space-y-2">
                <h4 className="font-semibold">Example Response</h4>
                <div className="rounded-md overflow-hidden">
                  <CopyBlock
                    text={endpoint.responseExample}
                    language="json"
                    showLineNumbers={false}
                    theme={dracula}
                    wrapLines
                  />
                </div>
              </div>
            )}
          </TabsContent>

          {endpoint.errors && (
            <TabsContent value="errors" className="space-y-4">
              <div className="space-y-2">
                <h4 className="font-semibold">Possible Errors</h4>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-slate-100 dark:bg-slate-800 text-left">
                        <th className="p-2 border border-slate-200 dark:border-slate-700">Code</th>
                        <th className="p-2 border border-slate-200 dark:border-slate-700">Message</th>
                        <th className="p-2 border border-slate-200 dark:border-slate-700">Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      {endpoint.errors.map((error, index) => (
                        <tr key={index} className="border-b border-slate-200 dark:border-slate-700">
                          <td className="p-2 border border-slate-200 dark:border-slate-700 font-mono">{error.code}</td>
                          <td className="p-2 border border-slate-200 dark:border-slate-700">{error.message}</td>
                          <td className="p-2 border border-slate-200 dark:border-slate-700">{error.description}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </TabsContent>
          )}
        </Tabs>
      </CardContent>
    </Card>
  )
}
