import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertTriangle, Key } from "lucide-react"

export default function ApiAuthentication() {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-50">Authentication</h2>
        <p className="text-slate-700 dark:text-slate-300">
          The KYC Verification API uses Basic Authentication to authenticate requests.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Key className="h-5 w-5" />
            Basic Authentication
          </CardTitle>
          <CardDescription>All API requests must include your credentials in the Authorization header.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-slate-700 dark:text-slate-300">
            Your credentials should be included in the Authorization header as Basic Auth:
          </p>
          <pre className="block p-4 bg-slate-100 dark:bg-slate-800 rounded-md font-mono">
            {`{
  "Username": "testuser",
  "Password": "affixcon1234"
}`}
          </pre>
        </CardContent>
      </Card>

      <Alert variant="destructive">
        <AlertTriangle className="h-4 w-4" />
        <AlertTitle>Security Warning</AlertTitle>
        <AlertDescription>
          Your credentials carry many privileges, so be sure to keep them secure! Do not share your credentials in
          publicly accessible areas such as GitHub, client-side code, or in your frontend application.
        </AlertDescription>
      </Alert>
    </div>
  )
}
