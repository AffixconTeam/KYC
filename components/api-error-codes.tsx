import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CopyBlock, dracula } from "react-code-blocks"

export default function ApiErrorCodes() {
  const errorCodes = [
    {
      code: "400",
      name: "Bad Request",
      description:
        "The request was unacceptable, often due to missing a required parameter or invalid parameter value.",
    },
    {
      code: "401",
      name: "Unauthorized",
      description: "No valid API key provided or the API key is invalid.",
    },
    {
      code: "403",
      name: "Forbidden",
      description: "The API key doesn't have permissions to perform the request.",
    },
    {
      code: "404",
      name: "Not Found",
      description: "The requested resource doesn't exist.",
    },
    {
      code: "409",
      name: "Conflict",
      description: "The request conflicts with another request or with the current state of the resource.",
    },
    {
      code: "422",
      name: "Unprocessable Entity",
      description: "The request was well-formed but was unable to be followed due to semantic errors.",
    },
    {
      code: "429",
      name: "Too Many Requests",
      description: "Too many requests hit the API too quickly. We recommend an exponential backoff of your requests.",
    },
    {
      code: "500",
      name: "Internal Server Error",
      description: "Something went wrong on our end. Please contact support if the issue persists.",
    },
    {
      code: "503",
      name: "Service Unavailable",
      description: "Service is temporarily unavailable due to maintenance or high load. Please try again later.",
    },
  ]

  const kycSpecificErrors = [
    {
      code: "KYC001",
      name: "Document Verification Failed",
      description:
        "The submitted document could not be verified. This could be due to poor image quality, document expiration, or document tampering.",
    },
    {
      code: "KYC002",
      name: "Biometric Verification Failed",
      description:
        "The biometric verification failed. This could be due to poor image quality or a mismatch between the document and the selfie.",
    },
    {
      code: "KYC003",
      name: "Address Verification Failed",
      description:
        "The address verification failed. This could be due to invalid address information or inability to verify the provided address.",
    },
    {
      code: "KYC004",
      name: "Identity Verification Failed",
      description:
        "The identity verification failed. This could be due to discrepancies in the provided information or inability to verify the identity.",
    },
    {
      code: "KYC005",
      name: "Document Type Not Supported",
      description: "The submitted document type is not supported for verification.",
    },
    {
      code: "KYC006",
      name: "Document Expired",
      description: "The submitted document has expired and cannot be used for verification.",
    },
    {
      code: "KYC007",
      name: "Watchlist Match",
      description: "The user has been matched against a watchlist (AML, sanctions, PEP, etc.).",
    },
    {
      code: "KYC008",
      name: "Verification Limit Exceeded",
      description: "The user has exceeded the maximum number of verification attempts.",
    },
  ]

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-50">Error Codes</h2>
        <p className="text-slate-700 dark:text-slate-300">
          The KYC Verification API uses conventional HTTP response codes to indicate the success or failure of an API
          request. In general, codes in the 2xx range indicate success, codes in the 4xx range indicate an error that
          failed given the information provided, and codes in the 5xx range indicate an error with our servers.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>HTTP Status Codes</CardTitle>
          <CardDescription>Standard HTTP status codes returned by the API</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-slate-100 dark:bg-slate-800 text-left">
                  <th className="p-2 border border-slate-200 dark:border-slate-700">Code</th>
                  <th className="p-2 border border-slate-200 dark:border-slate-700">Name</th>
                  <th className="p-2 border border-slate-200 dark:border-slate-700">Description</th>
                </tr>
              </thead>
              <tbody>
                {errorCodes.map((error, index) => (
                  <tr key={index} className="border-b border-slate-200 dark:border-slate-700">
                    <td className="p-2 border border-slate-200 dark:border-slate-700 font-mono">{error.code}</td>
                    <td className="p-2 border border-slate-200 dark:border-slate-700 font-semibold">{error.name}</td>
                    <td className="p-2 border border-slate-200 dark:border-slate-700">{error.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>KYC-Specific Error Codes</CardTitle>
          <CardDescription>Error codes specific to KYC verification processes</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-slate-100 dark:bg-slate-800 text-left">
                  <th className="p-2 border border-slate-200 dark:border-slate-700">Code</th>
                  <th className="p-2 border border-slate-200 dark:border-slate-700">Name</th>
                  <th className="p-2 border border-slate-200 dark:border-slate-700">Description</th>
                </tr>
              </thead>
              <tbody>
                {kycSpecificErrors.map((error, index) => (
                  <tr key={index} className="border-b border-slate-200 dark:border-slate-700">
                    <td className="p-2 border border-slate-200 dark:border-slate-700 font-mono">{error.code}</td>
                    <td className="p-2 border border-slate-200 dark:border-slate-700 font-semibold">{error.name}</td>
                    <td className="p-2 border border-slate-200 dark:border-slate-700">{error.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-50">Error Response Format</h3>
        <p className="text-slate-700 dark:text-slate-300">
          All error responses include a JSON object with the following properties:
        </p>
        <div className="rounded-md overflow-hidden">
          <CopyBlock
            text={`{
  "error": {
    "code": "ERROR_CODE",
    "message": "A human-readable message providing more details about the error.",
    "request_id": "req_123456789",
    "documentation_url": "https://api.kycverification.com/docs/errors#ERROR_CODE"
  }
}`}
            language="json"
            showLineNumbers={false}
            theme={dracula}
            wrapLines
          />
        </div>
      </div>
    </div>
  )
}
