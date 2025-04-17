"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Info, ExternalLink } from "lucide-react"

export default function ApiSwaggerTest() {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-50">Test on Swagger</h2>
        <p className="text-slate-700 dark:text-slate-300">
          You can easily test our API endpoints using our interactive Swagger documentation. Follow the instructions
          below to get started.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Access Swagger Documentation</CardTitle>
          <CardDescription>
            Our Swagger documentation provides an interactive interface to test the API endpoints directly in your
            browser.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-slate-700 dark:text-slate-300">
            Click the button below to access our Swagger documentation:
          </p>
          <Button
            className="flex items-center gap-2"
            onClick={() =>
              window.open(
                "https://da366281-6d92-4a1a-b5cb-a6df3ddb080d-00-2500pxf7x67tc.kirk.replit.dev/docs",
                "_blank",
              )
            }
          >
            <ExternalLink className="h-4 w-4" />
            Open Swagger Documentation
          </Button>
        </CardContent>
      </Card>

      <Alert>
        <Info className="h-4 w-4" />
        <AlertTitle>Authentication</AlertTitle>
        <AlertDescription>
          You'll need to authenticate using Basic Auth with the following credentials:
          <pre className="mt-2 p-4 bg-slate-100 dark:bg-slate-800 rounded-md font-mono text-sm">
            {`{
  "Username": "testuser",
  "Password": "affixcon1234"
}`}
          </pre>
        </AlertDescription>
      </Alert>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-50">Testing Steps</h3>
        <p className="text-slate-700 dark:text-slate-300">
          Follow these steps to test the API endpoints using Swagger:
        </p>
        <ol className="list-decimal list-inside space-y-2 text-slate-700 dark:text-slate-300">
          <li>Click the "Open Swagger Documentation" button above</li>
          <li>Click on the "Authorize" button in the Swagger UI</li>
          <li>Enter the username "testuser" and password "affixcon1234"</li>
          <li>Click "Authorize" to authenticate</li>
          <li>Navigate to the "/verify_user" endpoint</li>
          <li>Click "Try it out" to enable the testing interface</li>
          <li>Enter the request body using one of the examples below</li>
          <li>Click "Execute" to send the request</li>
          <li>View the response in the "Response body" section</li>
        </ol>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-50">Example: UAE Verification</h3>
        <p className="text-slate-700 dark:text-slate-300">Use this example to test the UAE verification endpoint:</p>
        <pre className="p-4 bg-slate-100 dark:bg-slate-800 rounded-md font-mono text-sm overflow-x-auto">
          {`{
  "CountryPrefix": "uae",
  "IDNumber": "784194000001118",
  "FirstName": "Ishaqjese",
  "MiddleName": "",
  "Surname": "Anuajumahe",
  "Dob": "1940-12-31",
  "AddressElement1": "The Meadows",
  "AddressElement2": " 5 Dubai",
  "AddressElement3": "Dubai",
  "AddressElement4": "",
  "Mobile": "505256924.0",
  "Email": "ishaqjese.anuajumahe@yahoo.com"
}`}
        </pre>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-50">Example: Saudi Arabia Verification</h3>
        <p className="text-slate-700 dark:text-slate-300">
          Use this example to test the Saudi Arabia verification endpoint:
        </p>
        <pre className="p-4 bg-slate-100 dark:bg-slate-800 rounded-md font-mono text-sm overflow-x-auto">
          {`{
  "CountryPrefix": "saudi",
  "IDNumber": "1000000016",
  "FirstName": "عبدالرحمن",
  "MiddleName": "هزاع",
  "Surname": "الزمر",
  "Dob": "2005-02-15",
  "AddressElement1": "حي الملك سلمان المجمعة, منطقة الرياض",
  "AddressElement2": "المجمعة",
  "AddressElement3": "",
  "AddressElement4": "",
  "Mobile": "591811999",
  "Email": "as.alzomor@hotmail.com"
}`}
        </pre>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-50">Expected Response</h3>
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
    "Address": "The Meadows, 5 Dubai, Dubai"
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
