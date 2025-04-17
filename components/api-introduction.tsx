import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Info } from "lucide-react"

export default function ApiIntroduction() {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-50">Introduction</h2>
        <p className="text-slate-700 dark:text-slate-300">
          Welcome to the KYC Verification API documentation. This API allows you to verify the identity of users in UAE
          and Saudi Arabia through our comprehensive verification system.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Base URL</CardTitle>
          <CardDescription>All API requests should be made to the following base URL:</CardDescription>
        </CardHeader>
        <CardContent>
          <code className="block p-4 bg-slate-100 dark:bg-slate-800 rounded-md font-mono">
            https://da366281-6d92-4a1a-b5cb-a6df3ddb080d-00-2500pxf7x67tc.kirk.replit.dev/docs
          </code>
        </CardContent>
      </Card>


      <Alert>
        <Info className="h-4 w-4" />
        <AlertTitle>Important Note</AlertTitle>
        <AlertDescription>
          Our KYC API is designed to be compliant with UAE and Saudi Arabia regulations including AML and KYC
          requirements. Ensure that your implementation adheres to the relevant regulations in these jurisdictions.
        </AlertDescription>
      </Alert>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-50">Supported Countries</h3>
        <p className="text-slate-700 dark:text-slate-300">
          This API currently supports identity verification for the following countries:
        </p>
        <ul className="list-disc list-inside space-y-2 text-slate-700 dark:text-slate-300">
          <li>
            <strong>UAE (United Arab Emirates)</strong> - Full identity verification with government database checks
          </li>
          <li>
            <strong>Saudi Arabia</strong> - Comprehensive identity verification with national ID validation
          </li>
        </ul>
      </div>
    </div>
  )
}
