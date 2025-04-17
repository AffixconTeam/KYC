import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Info, ExternalLink } from "lucide-react"

export default function ApiPostmanTest() {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-50">Test in Postman</h2>
        <p className="text-slate-700 dark:text-slate-300">
          You can easily test our API endpoints using Postman. Follow the instructions below to get started.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Import Postman Collection</CardTitle>
          <CardDescription>
            Import our pre-configured Postman collection to quickly test the API endpoints.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-slate-700 dark:text-slate-300">
            Click the button below to import our Postman collection directly into your Postman application:
          </p>
          <Button className="flex items-center gap-2">
            <ExternalLink className="h-4 w-4" />
            Import Postman Collection
          </Button>
        </CardContent>
      </Card>

      <Alert>
        <Info className="h-4 w-4" />
        <AlertTitle>Environment Variables</AlertTitle>
        <AlertDescription>
          Don't forget to set up your environment variables in Postman, including your API key and base URL.
        </AlertDescription>
      </Alert>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-50">Manual Setup</h3>
        <p className="text-slate-700 dark:text-slate-300">
          If you prefer to set up the requests manually, follow these steps:
        </p>
        <ol className="list-decimal list-inside space-y-2 text-slate-700 dark:text-slate-300">
          <li>Create a new request in Postman</li>
          <li>Set the request method to POST</li>
          <li>
            Enter the endpoint URL:
            <code className="block p-2 mt-1 bg-slate-100 dark:bg-slate-800 rounded-md font-mono">
              https://api.kycverification.com/v1/verify_user
            </code>
          </li>
          <li>
            Add the Authorization header:
            <code className="block p-2 mt-1 bg-slate-100 dark:bg-slate-800 rounded-md font-mono">
            {
              "Username": "testuser",
              "Password": "affixcon1234"
            }

            </code>
          </li>
          <li>
            Set the Content-Type header:
            <code className="block p-2 mt-1 bg-slate-100 dark:bg-slate-800 rounded-md font-mono">
              Content-Type: application/json
            </code>
          </li>
          <li>
            Add the request body in JSON format:
            <pre className="p-2 mt-1 bg-slate-100 dark:bg-slate-800 rounded-md font-mono text-sm overflow-x-auto">
              {`{
  "CountryPrefix": "UAE",
  "IDNumber": "784-1234-5678901-2",
  "FirstName": "Mohammed",
  "MiddleName": "Ahmed",
  "Surname": "Al-Maktoum",
  "Dob": "1985-06-15",
  "AddressElement1": "Villa 42",
  "AddressElement2": "Al Wasl Road",
  "AddressElement3": "Jumeirah",
  "AddressElement4": "Dubai",
  "Mobile": "+971501234567",
  "Email": "mohammed.ahmed@gmail.com"
}`}
            </pre>
          </li>
          <li>Click Send to test the API endpoint</li>
        </ol>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-50">Sample Response</h3>
        <p className="text-slate-700 dark:text-slate-300">
          Here's an example of what a successful response looks like:
        </p>
        <pre className="p-4 bg-slate-100 dark:bg-slate-800 rounded-md font-mono text-sm overflow-x-auto">
          {`{
  "Summary": {
    "NIKVerified": true,
    "IDVRecordVerified": true,
    "IDVVerifiedLevel": "N1",
    "IDVContactVerifiedLevel": "P2",
    "IDVMultiLevelVerification": false
  },
  "ReturnItems": {
    "Address": "Villa 42, Al Wasl Road, Jumeirah, Dubai"
  },
  "Scoring": {
    "SourceStatus": "Successful",
    "ErrorMessage": "",
    "NameMatchLevel": "Exact Match",
    "FullNameScore": 100,
    "FirstNameScore": 100,
    "MiddleNameScore": 100,
    "SurnameScore": 100,
    "AddressMatchLevel": "Full Match",
    "FullAddressScore": 100,
    "AddressElement1Score": 100,
    "AddressElement2Score": 100,
    "AddressElement3Score": 100,
    "AddressElement4Score": 100,
    "DOBMatch": true,
    "MobileMatch": true,
    "EmailMatch": true
  }
}`}
        </pre>
      </div>
    </div>
  )
}
